import sqlite3 from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'events.db');
const db = sqlite3(dbPath);

// Initialize database tables if they don't exist
const initDb = () => {
  // Create users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create events table
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      location TEXT,
      image_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_featured BOOLEAN DEFAULT 0
    )
  `);

  // Check if we need to create a default admin user
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
  
  if (userCount.count === 0) {
    // Create default admin user (username: admin, password: brittlestar2025)
    // In production, use a more secure method to generate and store passwords
    const createUser = db.prepare(`
      INSERT INTO users (username, password) VALUES (?, ?)
    `);
    
    createUser.run('admin', '$2a$10$VKkQpkTaAfRt89cPTSWEeO8n71fIHOiMo7JuWQP0YQLFc7qfPWKuy');
  }
};

// Initialize the database
initDb();

// User type
export interface User {
  id: number;
  username: string;
  password: string;
  created_at?: string;
}

// Event type
export interface Event {
  id?: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD format
  time: string; // HH:MM format
  location: string;
  image_url: string;
  created_at?: string;
  updated_at?: string;
  is_featured?: boolean;
}

// Get all events ordered by date (soonest first)
export const getAllEvents = () => {
  return db.prepare(`
    SELECT * FROM events 
    ORDER BY date ASC, time ASC
  `).all();
};

// Get today's events
export const getTodayEvents = () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  return db.prepare(`
    SELECT * FROM events 
    WHERE date = ? 
    ORDER BY time ASC
  `).all(today);
};

// Get upcoming events (excluding today)
export const getUpcomingEvents = (limit = 10) => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  return db.prepare(`
    SELECT * FROM events 
    WHERE date > ? 
    ORDER BY date ASC, time ASC
    LIMIT ?
  `).all(today, limit);
};

// Get upcoming week's events
export const getWeekEvents = () => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const todayStr = today.toISOString().split('T')[0];
  const nextWeekStr = nextWeek.toISOString().split('T')[0];
  
  return db.prepare(`
    SELECT * FROM events 
    WHERE date >= ? AND date <= ? 
    ORDER BY date ASC, time ASC
  `).all(todayStr, nextWeekStr);
};

// Get past events
export const getPastEvents = (limit = 20) => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  return db.prepare(`
    SELECT * FROM events 
    WHERE date < ? 
    ORDER BY date DESC, time DESC
    LIMIT ?
  `).all(today, limit);
};

// Get single event by ID
export const getEventById = (id: number) => {
  return db.prepare('SELECT * FROM events WHERE id = ?').get(id);
};

// Create a new event
export const createEvent = (event: Event) => {
  const { title, description, date, time, location, image_url, is_featured } = event;
  
  const stmt = db.prepare(`
    INSERT INTO events (title, description, date, time, location, image_url, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(title, description, date, time, location, image_url, is_featured ? 1 : 0);
  return result.lastInsertRowid;
};

// Update an existing event
export const updateEvent = (id: number, event: Partial<Event>) => {
  const { title, description, date, time, location, image_url, is_featured } = event;
  
  const stmt = db.prepare(`
    UPDATE events 
    SET title = ?, description = ?, date = ?, time = ?, location = ?, 
        image_url = ?, is_featured = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);
  
  return stmt.run(title, description, date, time, location, image_url, is_featured ? 1 : 0, id);
};

// Delete an event
export const deleteEvent = (id: number) => {
  return db.prepare('DELETE FROM events WHERE id = ?').run(id);
};

// Validate user credentials
export const validateUser = (username: string, password: string): User | null => {
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User | undefined;
  if (!user) return null;
  
  // In a real implementation, verify the password hash here
  // For this demo, we'll just check if the password matches
  return user.password === password ? user : null;
};

export default db; 