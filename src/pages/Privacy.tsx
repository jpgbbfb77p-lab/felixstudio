import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      <div className="relative z-10 flex-1 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <Helmet>
          <title>Privacy Policy — Felixstudio, LLC</title>
          <meta name="description" content="Felixstudio's Privacy Policy. Learn how we collect, protect, and handle your business data with enterprise-grade security." />
        </Helmet>
        <Link to="/" className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.35em] uppercase text-red-400 hover:text-red-300 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">Privacy Policy</h1>
        <p className="font-inter text-xs text-zinc-500 uppercase tracking-widest mb-12">Last Updated: July 2026</p>

        <div className="prose prose-invert prose-red max-w-none font-inter text-zinc-300 text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              <strong>Felixstudio, LLC</strong> respects your privacy. We only collect the necessary transaction and personal data required to provide our financial infrastructure services. This includes company details, contact information, and payment data processed securely via our partners.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Payment Infrastructure &amp; Security</h2>
            <p>
              We partner with regulated infrastructure providers for secure payment and card issuance processing. All sensitive transaction data is transmitted using enterprise-grade SSL encryption and is handled directly by certified infrastructure. We do not store raw card numbers on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Data Sharing</h2>
            <p>
              We <strong>do not</strong> sell, rent, or trade your personal or business data to third parties. Data is only shared with trusted enterprise service providers strictly for the purpose of executing the services you have requested, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data held by Felixstudio, LLC. If you wish to exercise these rights, please contact our support team.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Privacy Policy, please reach out to us at: <br/>
              <a href="mailto:support@getfelixstudio.com" className="text-red-400 hover:text-red-300">support@getfelixstudio.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
