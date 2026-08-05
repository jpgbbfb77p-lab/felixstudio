import { Router, Request, Response } from 'express';
import { stripe } from './stripe';
import { db } from '../db';

const router = Router();

// This endpoint must receive the raw body for signature verification
router.post('/stripe', async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_secret';

  let event;

  try {
    // Construct the event from the raw request body
    event = stripe.webhooks.constructEvent(req.body, sig as string, endpointSecret);
  } catch (err: any) {
    console.error(`⚠️  Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Idempotency Check
  try {
    const existingEvent = await db.stripeWebhookEvent.findUnique({
      where: { stripeEventId: event.id }
    });

    if (existingEvent) {
      console.log(`[Webhook] Event ${event.id} already processed. Skipping.`);
      return res.status(200).json({ received: true });
    }

    // Log the event as pending to prevent concurrent duplicate processing
    await db.stripeWebhookEvent.create({
      data: {
        stripeEventId: event.id,
        type: event.type,
        status: 'pending'
      }
    });

  } catch (err: any) {
    console.error(`[Webhook] Database error during idempotency check: ${err.message}`);
    // Return 500 so Stripe retries if the database is down
    return res.status(500).json({ error: 'Database error' });
  }

  console.log(`[Webhook] Received verified event: ${event.type}`);

  // TODO: Add specific event handlers here in Phase 3
  
  // Mark event as processed (for future when handlers are implemented, this would be at the end)
  try {
    await db.stripeWebhookEvent.update({
      where: { stripeEventId: event.id },
      data: { status: 'processed' }
    });
  } catch (err: any) {
    console.error(`[Webhook] Failed to mark event ${event.id} as processed: ${err.message}`);
  }

  res.status(200).json({ received: true });
});

export default router;
