import { Router, Request, Response } from 'express';
import Stripe from 'stripe';
import { prisma, tenantContext } from '../db';
import { requireTenant } from '../middleware/tenant';

const router = Router();
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', {
  apiVersion: '2025-01-27.acacia',
});

// 1. Create Stripe Identity Verification Session (Requires Tenant Context)
router.post('/kyb-session', requireTenant, async (req: Request, res: Response) => {
  try {
    const { organizationId } = tenantContext.getStore()!;
    const { returnUrl } = req.body;

    // Create a VerificationSession with Stripe
    const verificationSession = await stripe.identity.verificationSessions.create({
      type: 'document',
      metadata: {
        organizationId,
      },
      return_url: returnUrl || 'https://getfelixstudio.com/dashboard/settings',
    });

    res.status(200).json({ client_secret: verificationSession.client_secret, url: verificationSession.url });
  } catch (error) {
    console.error('Error creating KYB session:', error);
    res.status(500).json({ error: 'Failed to create Identity Session' });
  }
});

// 2. Mock Stripe Hosted Onboarding Link (For Phase 3 Prep)
router.get('/kyb-onboarding-link', requireTenant, async (req: Request, res: Response) => {
  try {
    const { organizationId } = tenantContext.getStore()!;
    // In reality, this would call stripe.accountLinks.create for the organization's stripeAccountId
    
    // Simulate a slight delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUrl = `https://connect.stripe.com/setup/s/mock_session_123?org=${organizationId}`;
    res.status(200).json({ url: mockUrl });
  } catch (error) {
    console.error('Error creating KYB link:', error);
    res.status(500).json({ error: 'Failed to create onboarding link' });
  }
});

export default router;
