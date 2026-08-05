import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import waitlistRoutes from './routes/waitlist';
import userRoutes from './routes/users';
import organizationRoutes from './routes/organizations';
import cardRoutes from './routes/cards';
import transactionRoutes from './routes/transactions';
import stripeRoutes from './routes/stripe';
import webhookRoutes from './routes/webhooks';

const app = express();
const PORT = process.env.PORT || 8080;

// Trust the reverse proxy (required for Render so rate-limit works correctly)
app.set('trust proxy', 1);

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

// 4. Webhooks (Must be parsed as raw body before express.json)
app.use('/api/webhooks', express.raw({ type: 'application/json' }), webhookRoutes);

// 5. Body Parser
app.use(express.json());

// Health checks
const healthCheck = (req: Request, res: Response) => res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
app.get(['/', '/health', '/api/health'], healthCheck);

// 5. Routes
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/users', userRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/stripe', stripeRoutes);

// 6. Global Error Handler
import { NextFunction } from 'express';
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('[Global Error]:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Secure backend running on port ${PORT}`);
});
