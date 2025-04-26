import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEvents, getUpcomingEvents, getTodayEvents, getWeekEvents, getPastEvents, createEvent } from '../../../lib/db';
import { withAuth } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET requests - public access
  if (req.method === 'GET') {
    const { type, limit } = req.query;
    
    try {
      let events;
      
      switch (type) {
        case 'today':
          events = getTodayEvents();
          break;
        case 'upcoming':
          events = getUpcomingEvents(Number(limit) || 10);
          break;
        case 'week':
          events = getWeekEvents();
          break;
        case 'past':
          events = getPastEvents(Number(limit) || 20);
          break;
        default:
          events = getAllEvents();
      }
      
      return res.status(200).json({ events });
    } catch (error) {
      console.error('Error fetching events:', error);
      return res.status(500).json({ message: 'Error fetching events' });
    }
  }
  
  // Handle POST requests - protected, requires authentication
  if (req.method === 'POST') {
    // Only admin can create events - use withAuth middleware
    return withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { title, description, date, time, location, image_url, is_featured } = req.body;
        
        // Validate required fields
        if (!title || !date || !time) {
          return res.status(400).json({ message: 'Title, date, and time are required' });
        }
        
        // Create new event
        const eventId = createEvent({
          title,
          description: description || '',
          date,
          time,
          location: location || '',
          image_url: image_url || '',
          is_featured: is_featured || false
        });
        
        return res.status(201).json({ 
          message: 'Event created successfully',
          eventId
        });
      } catch (error) {
        console.error('Error creating event:', error);
        return res.status(500).json({ message: 'Error creating event' });
      }
    })(req, res);
  }
  
  // Return 405 for any other methods
  return res.status(405).json({ message: 'Method not allowed' });
} 