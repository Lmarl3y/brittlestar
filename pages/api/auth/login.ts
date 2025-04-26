import { NextApiRequest, NextApiResponse } from 'next';
import { authenticateUser } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST for login
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const { username, password } = req.body;
    
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    
    // Authenticate user
    const authResult = await authenticateUser(username, password);
    
    if (!authResult) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Return token and user info
    return res.status(200).json({
      message: 'Login successful',
      ...authResult
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Authentication error' });
  }
} 