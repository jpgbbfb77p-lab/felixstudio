import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function Refund() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      <div className="relative z-10 flex-1 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <Helmet>
          <title>Refund & Cancellation Policy — Felixstudio, LLC</title>
          <meta name="description" content="Felixstudio's Refund and Cancellation Policy for B2B digital services, virtual card infrastructure, and subscription management." />
        </Helmet>
        <Link to="/" className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.35em] uppercase text-red-400 hover:text-red-300 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">Refund &amp; Cancellation Policy</h1>
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-widest mb-12">Last Updated: July 2026</p>

        <div className="prose prose-invert prose-red max-w-none font-inter text-zinc-300 text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Digital Service Provision</h2>
            <p>
              Due to the nature of our B2B financial infrastructure, digital services, virtual card setups, and subscriptions provided by <strong>Felixstudio, LLC</strong> are provisioned immediately upon successful payment or account approval.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Cancellation Policy</h2>
            <p>
              You may cancel your subscription or services at any time. Cancellations will take effect at the end of your current billing cycle. You will not be charged for subsequent cycles, but no prorated refunds are automatically issued for the remainder of the current cycle.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Refund Requests</h2>
            <p>
              While digital services are generally non-refundable once provisioned, we understand that exceptional circumstances occur. Customers may request a case-by-case refund review within <strong>14 days</strong> of their initial transaction. We reserve the right to approve or deny these requests at our sole discretion based on system usage and transaction history.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Contacting Us for a Refund</h2>
            <p>
              To request a cancellation or refund review, please contact our support team directly. Include your account details and the reason for your request. <br/>
              <br/>
              Email: <a href="mailto:support@getfelixstudio.com" className="text-red-400 hover:text-red-300">support@getfelixstudio.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
