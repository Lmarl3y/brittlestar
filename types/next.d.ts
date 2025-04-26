import { NextApiRequest } from 'next';
import { UserData } from '../lib/auth';

declare module 'next' {
  interface NextApiRequest {
    user?: UserData;
  }
} 