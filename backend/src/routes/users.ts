import { Router, Request, Response } from 'express';
import { prisma } from '../db';

const router = Router();

// Mock endpoint for post-Stripe checkout
router.post('/mock-setup', async (req: Request, res: Response) => {
  try {
    const { email, company_name, stripe_customer_id, stripe_subscription_status } = req.body;

    if (!email || !company_name) {
      return res.status(400).json({ error: 'Email and company name are required' });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        company_name,
        stripe_customer_id: stripe_customer_id || `mock_cus_${Date.now()}`,
        stripe_subscription_status: stripe_subscription_status || 'active',
      },
    });

    res.status(201).json({ 
      message: 'User created successfully', 
      data: newUser 
    });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return res.status(409).json({ error: 'User or Stripe ID already exists' });
    }
    console.error('User Setup Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
