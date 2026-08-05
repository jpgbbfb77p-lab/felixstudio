import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { AsyncLocalStorage } from 'async_hooks';

const connectionString = process.env.DATABASE_URL;

// Add ssl configuration for external Render connection
const pool = new Pool({ 
  connectionString, 
  ssl: { rejectUnauthorized: false } 
});

const adapter = new PrismaPg(pool);
const basePrisma = new PrismaClient({ adapter });

// AsyncLocalStorage to hold tenant context
export const tenantContext = new AsyncLocalStorage<{ organizationId: string }>();

// Prisma extension for strict multi-tenancy
export const prisma = basePrisma.$extends({
  query: {
    $allModels: {
      async $allOperations({ model, operation, args, query }) {
        const context = tenantContext.getStore();
        const tenantModels = ['Card', 'Transaction', 'User'];
        
        if (context?.organizationId && tenantModels.includes(model)) {
          // Auto-inject organizationId into the where clause for all tenant models
          args.where = { ...args.where, organizationId: context.organizationId };
          
          // For create/createMany, also inject the organizationId into the data payload
          if (operation === 'create' || operation === 'createMany') {
            if (args.data) {
              if (Array.isArray(args.data)) {
                args.data = args.data.map(d => ({ ...d, organizationId: context.organizationId }));
              } else {
                args.data = { ...args.data, organizationId: context.organizationId };
              }
            }
          }
        }
        
        return query(args);
      }
    }
  }
});
