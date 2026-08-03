import { Router, Request, Response } from 'express';
import { prisma } from '../db';
import { Resend } from 'resend';

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email notification to admin
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Waitlist <onboarding@getfelixstudio.com>', 
          to: process.env.ADMIN_EMAIL || 'admin@example.com',
          subject: 'New Waitlist Sign-up!',
          html: `<p>You have a new waitlist sign-up.</p>
                 <p><strong>Email:</strong> ${email}</p>
                 ${company_name ? `<p><strong>Company:</strong> ${company_name}</p>` : ''}`,
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Do not return error to client since the db insertion was successful
      }
    }

    res.status(201).json({ message: 'Successfully joined waitlist', data: waitlistEntry });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email already registered' });
    }
    console.error('Waitlist Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
