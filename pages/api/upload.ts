import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../lib/auth';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Configure to parse form data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Define file type
interface FormidableFile {
  filepath: string;
  originalFilename?: string;
  newFilename?: string;
  mimetype?: string;
  size?: number;
}

// Handle file upload
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Use authentication middleware
  return withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), 'public/uploads/events');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      // Parse the form
      const form = formidable({
        uploadDir: uploadsDir,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024, // 10MB max file size
      });

      return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error('Error parsing form:', err);
            res.status(500).json({ message: 'Error uploading file' });
            return resolve(undefined);
          }

          // Get uploaded file
          const fileArray = files.file;
          if (!fileArray || fileArray.length === 0) {
            res.status(400).json({ message: 'No file uploaded' });
            return resolve(undefined);
          }
          
          const file = Array.isArray(fileArray) ? fileArray[0] : fileArray;
          
          // Generate unique filename
          const uniqueFilename = `${uuidv4()}${path.extname(file.originalFilename || '')}`;
          const newPath = path.join(uploadsDir, uniqueFilename);
          
          // Rename the file to the unique name
          fs.renameSync(file.filepath, newPath);

          // Return the file URL
          const fileUrl = `/uploads/events/${uniqueFilename}`;
          res.status(200).json({ 
            message: 'File uploaded successfully',
            url: fileUrl 
          });
          
          return resolve(undefined);
        });
      });
    } catch (error) {
      console.error('Upload error:', error);
      return res.status(500).json({ message: 'Error uploading file' });
    }
  })(req, res);
};

export default handler; 