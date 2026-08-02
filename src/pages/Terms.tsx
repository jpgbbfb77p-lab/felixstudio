import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      <div className="relative z-10 flex-1 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <Helmet>
          <title>Terms of Service — Felixstudio, LLC</title>
          <meta name="description" content="Terms of Service for Felixstudio, LLC. Read our terms governing use of our B2B virtual card infrastructure and services." />
        </Helmet>
        <Link to="/" className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.35em] uppercase text-red-400 hover:text-red-300 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">Terms of Service</h1>
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-widest mb-12">Last Updated: July 2026</p>

        <div className="prose prose-invert prose-red max-w-none font-inter text-zinc-300 text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by <strong>Felixstudio, LLC</strong> ("Company", "we", "us", or "our"), available at <a href="https://getfelixstudio.com" className="text-red-400 hover:text-red-300">getfelixstudio.com</a>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Digital Services</h2>
            <p>
              Felixstudio, LLC provides B2B financial infrastructure and digital card management services. Our services are intended solely for commercial and business use. We do not offer personal or consumer financial products. You agree to use the service only for lawful business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall Felixstudio, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <br/>
              <a href="mailto:support@getfelixstudio.com" className="text-red-400 hover:text-red-300">support@getfelixstudio.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
