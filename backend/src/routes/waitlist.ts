import { Router, Request, Response } from 'express';
import { prisma } from '../db';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, company_name } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const waitlistEntry = await prisma.waitlist.create({
      data: {
        email,
        company_name,
      },
    });

    res.status(201).json({ message: 'Successfully joined waitlist', data: waitlistEntry });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already registered' });
    }
    console.error('Waitlist Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
