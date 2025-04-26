import { validateUser } from './db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

// Secret key for JWT signing (in production, store this in env vars)
const JWT_SECRET = process.env.JWT_SECRET || 'brittlestar-events-secret-key-2025';

export interface UserData {
  id: number;
  username: string;
}

// Create JWT token
export const createToken = (user: UserData) => {
  return jwt.sign(
    { 
      id: user.id,
      username: user.username 
    },
    JWT_SECRET,
    { expiresIn: '8h' } // Token expires in 8 hours
  );
};

// Authenticate user and return token
export const authenticateUser = async (username: string, password: string) => {
  // Get user from database
  const user = validateUser(username, password);
  
  if (!user) {
    return null;
  }
  
  // Create and return token
  return {
    token: createToken({
      id: user.id,
      username: user.username
    }),
    user: {
      id: user.id,
      username: user.username
    }
  };
};

// Middleware to verify JWT token
export const withAuth = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Get token from header
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET) as UserData;
      
      // Add user data to request
      req.user = decoded;
      
      // Call the original handler
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
};

// Helper to hash passwords
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

// Helper to compare passwords
export const comparePasswords = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
}; 