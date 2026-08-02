import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

// Add ssl configuration for external Render connection
const pool = new Pool({ 
  connectionString, 
  ssl: { rejectUnauthorized: false } 
});

const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });
