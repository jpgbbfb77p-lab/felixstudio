import { Router, Request, Response } from 'express';
import { prisma } from '../db';
import { Prisma } from '@prisma/client';
import { requireTenant } from '../middleware/tenant';
import Stripe from 'stripe';
import crypto from 'crypto';

const router = Router();

// Apply strict multi-tenancy middleware to all card routes
router.use(requireTenant);

// Prepare the real Stripe SDK (to be used once keys are set)
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-01-27.acacia' });

const generateMockStripeCardId = () => `ic_${crypto.randomBytes(12).toString('hex')}`;

router.post('/issue', async (req: Request, res: Response) => {
  try {
    const { userId, spendingLimit, limitInterval } = req.body;
    
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // [Future Phase 2] Real Stripe call:
    // const stripeCard = await stripe.issuing.cards.create({
    //   cardholder: 'ich_123',
    //   currency: 'usd',
    //   type: 'virtual',
    //   status: 'active',
    //   spending_controls: { ... }
    // });
    
    // Mock response from Stripe Issuing
    const stripeCardId = generateMockStripeCardId();
    const last4 = Math.floor(1000 + Math.random() * 9000).toString();
    const expMonth = new Date().getMonth() + 1;
    const expYear = new Date().getFullYear() + 3;
    const brand = 'Visa';

    // Save to local database. 
    // Notice how we DO NOT pass organizationId here. The Prisma Extension injects it securely!
    const card = await prisma.card.create({
      data: {
        stripeCardId,
        last4,
        expMonth,
        expYear,
        brand,
        status: 'active',
        type: 'virtual',
        spendingLimit: spendingLimit || null,
        limitInterval: limitInterval || null,
        userId
      }
    });

    res.status(201).json(card);
  } catch (error) {
    console.error('Error issuing card:', error);
    res.status(500).json({ error: 'Failed to issue card' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    
    const filter: Prisma.CardWhereInput = {};
    if (userId) filter.userId = String(userId);

    // Notice we do NOT filter by organizationId here. The Prisma Extension injects it securely!
    const cards = await prisma.card.findMany({
      where: filter,
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } }
      }
    });

    res.status(200).json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, spendingLimit, limitInterval } = req.body;
    
    const updateData: Prisma.CardUpdateInput = {};
    if (status !== undefined) updateData.status = status; 
    if (spendingLimit !== undefined) updateData.spendingLimit = spendingLimit;
    if (limitInterval !== undefined) updateData.limitInterval = limitInterval;

    // The Prisma Extension ensures we can only update a card if it belongs to the active tenant
    const updatedCard = await prisma.card.update({
      where: { id },
      data: updateData
    });

    res.status(200).json(updatedCard);
  } catch (error) {
    console.error('Error updating card:', error);
    res.status(500).json({ error: 'Failed to update card' });
  }
});

export default router;
