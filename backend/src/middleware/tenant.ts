import { Request, Response, NextFunction } from 'express';
import { tenantContext, prisma } from '../db';

/**
 * Middleware to enforce strict multi-tenancy.
 * In a real production setup (e.g., Clerk), this would verify the JWT, 
 * fetch the user's active organization ID from the token claims,
 * and ensure they have access to it before setting the context.
 */
export const requireTenant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1. Extract organization ID (e.g., from header, token claim, or query param during transition)
    // For this Phase 2 preparation, we expect clients to send `x-organization-id` header
    // alongside their standard Authorization header.
    const organizationId = req.headers['x-organization-id'] as string;

    if (!organizationId) {
       res.status(401).json({ error: 'Missing organization context. x-organization-id header required.' });
       return;
    }

    // 2. Wrap the rest of the request within the AsyncLocalStorage context
    // Any Prisma query executed downstream will now automatically have `organizationId` injected!
    tenantContext.run({ organizationId }, () => {
      next();
    });

  } catch (error) {
    console.error('Tenant middleware error:', error);
    res.status(500).json({ error: 'Internal server error during tenant verification' });
  }
};
