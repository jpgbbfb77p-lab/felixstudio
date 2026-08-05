import { Router, Request, Response } from 'express';
import { prisma } from '../db';
import { Prisma } from '@prisma/client';
import { requireTenant } from '../middleware/tenant';

const router = Router();

// Apply strict multi-tenancy middleware
router.use(requireTenant);

// List all transactions (securely scoped to the tenant)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { cardId, status } = req.query;
    
    const filter: Prisma.TransactionWhereInput = {};
    if (cardId) filter.cardId = String(cardId);
    if (status) filter.status = String(status);

    const transactions = await prisma.transaction.findMany({
      where: filter,
      include: {
        card: { select: { id: true, last4: true, brand: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Mock generating a transaction (for testing purposes)
router.post('/mock', async (req: Request, res: Response) => {
  try {
    const { cardId, amount, merchantName, merchantCategoryCode, status } = req.body;
    
    if (!cardId || !amount || !merchantName) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // organizationId is injected automatically by Prisma Client Extension
    const transaction = await prisma.transaction.create({
      data: {
        stripeTransactionId: `txn_${Math.random().toString(36).substr(2, 9)}`,
        amount: parseInt(amount), // in cents
        currency: 'usd',
        status: status || 'pending',
        merchantName,
        merchantCategoryCode: merchantCategoryCode || '0000',
        cardId
      }
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error('Error creating mock transaction:', error);
    res.status(500).json({ error: 'Failed to create mock transaction' });
  }
});

export default router;
