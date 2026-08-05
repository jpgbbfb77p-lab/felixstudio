import { Router, Request, Response } from 'express';
import { prisma } from '../db';

const router = Router();

// Create a new organization
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      res.status(400).json({ error: 'Organization name is required' });
      return;
    }

    const org = await prisma.organization.create({
      data: { name },
    });

    res.status(201).json(org);
  } catch (error) {
    console.error('Error creating organization:', error);
    res.status(500).json({ error: 'Failed to create organization' });
  }
});

// List all organizations
router.get('/', async (req: Request, res: Response) => {
  try {
    const orgs = await prisma.organization.findMany();
    res.status(200).json(orgs);
  } catch (error) {
    console.error('Error fetching organizations:', error);
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
});

// Get a specific organization
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const org = await prisma.organization.findUnique({
      where: { id },
      include: {
        users: true,
        cards: true,
      }
    });

    if (!org) {
      res.status(404).json({ error: 'Organization not found' });
      return;
    }

    res.status(200).json(org);
  } catch (error) {
    console.error('Error fetching organization:', error);
    res.status(500).json({ error: 'Failed to fetch organization' });
  }
});

export default router;
