import { NextApiRequest, NextApiResponse } from 'next';
import { getEventById, updateEvent, deleteEvent } from '../../../lib/db';
import { withAuth } from '../../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: 'Invalid event ID' });
  }
  
  const eventId = parseInt(id, 10);
  
  // Handle GET request - public access
  if (req.method === 'GET') {
    try {
      const event = getEventById(eventId);
      
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      
      return res.status(200).json({ event });
    } catch (error) {
      console.error('Error fetching event:', error);
      return res.status(500).json({ message: 'Error fetching event' });
    }
  }
  
  // Handle PUT request - protected, requires authentication
  if (req.method === 'PUT') {
    return withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { title, description, date, time, location, image_url, is_featured } = req.body;
        
        // Validate required fields
        if (!title || !date || !time) {
          return res.status(400).json({ message: 'Title, date, and time are required' });
        }
        
        // Check if event exists
        const existingEvent = getEventById(eventId);
        if (!existingEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
        
        // Update event
        updateEvent(eventId, {
          title,
          description,
          date,
          time,
          location,
          image_url,
          is_featured
        });
        
        return res.status(200).json({ 
          message: 'Event updated successfully',
          eventId
        });
      } catch (error) {
        console.error('Error updating event:', error);
        return res.status(500).json({ message: 'Error updating event' });
      }
    })(req, res);
  }
  
  // Handle DELETE request - protected, requires authentication
  if (req.method === 'DELETE') {
    return withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        // Check if event exists
        const existingEvent = getEventById(eventId);
        if (!existingEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
        
        // Delete event
        deleteEvent(eventId);
        
        return res.status(200).json({ 
          message: 'Event deleted successfully' 
        });
      } catch (error) {
        console.error('Error deleting event:', error);
        return res.status(500).json({ message: 'Error deleting event' });
      }
    })(req, res);
  }
  
  // Return 405 for any other methods
  return res.status(405).json({ message: 'Method not allowed' });
} 