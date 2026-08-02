import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import waitlistRoutes from './routes/waitlist';
import userRoutes from './routes/users';

const app = express();
const PORT = process.env.PORT || 8080;

// 1. Security Headers (Helmet)
app.use(helmet());

// 2. CORS Configuration (Restrict to Vercel/Production Domain)
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173', // Add 127.0.0.1 explicitly
  'https://felix-7udsd8j7o-getfelix.vercel.app', // Current Vercel deployment
  'https://getfelixstudio.com' // Future custom domain
];

app.use(cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// 3. Rate Limiting (Prevent DDoS / Brute Force on APIs)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', apiLimiter);

// 4. Body Parser
app.use(express.json());

// 5. Routes
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/users', userRoutes);

// Health check for Render
app.get('/health', (req: Request, res: Response) => { res.status(200).json({ status: 'ok' }); });

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Secure backend running on port ${PORT}`);
});
