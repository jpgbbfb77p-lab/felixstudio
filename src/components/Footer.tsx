import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Footer — shared
───────────────────────────────────────────────────────── */
export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8080';
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
        })
      });

      if (response.status === 201) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="relative z-10 border-t border-zinc-800/80 bg-[#0A0204] pt-16 pb-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-12">
        
        {/* Email Capture Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="max-w-md">
            <h3 className="font-bebas text-2xl uppercase text-white tracking-wide mb-2">Join the inner circle</h3>
            <p className="font-inter text-sm text-zinc-400 leading-relaxed">
              Get product updates, fintech insights, and early access to new features. No spam, just signal.
            </p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <Mail className="absolute left-4 w-4 h-4 text-zinc-500 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="founder@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-white/5 border border-white/10 rounded focus:border-red-500/50 focus:bg-white/10 transition-all text-sm text-white py-3 pl-11 pr-32 outline-none font-inter placeholder:text-zinc-600 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-1 top-1 bottom-1 bg-red-700 hover:bg-red-600 disabled:bg-red-900/50 text-white text-[10px] uppercase tracking-widest px-4 rounded font-inter transition-colors flex items-center gap-2"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join'}
                {status === 'success' ? <CheckCircle2 className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </form>
            {status === 'error' && (
              <p className="font-inter text-xs text-red-400 mt-2">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-8 h-8 rounded border border-white/20 bg-white/10 flex items-center justify-center font-bold text-sm text-white font-inter">
              F
            </div>
            <div>
              <div className="font-bebas uppercase text-white tracking-widest text-sm whitespace-nowrap">Felixstudio, LLC</div>
              <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-1 whitespace-nowrap">131 Continental Dr Suite 305 Newark, DE, 19713 US</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-4 lg:gap-6 w-full lg:w-auto">
            <Link to="/features" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Features</Link>
            <Link to="/pricing" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Pricing</Link>
            <Link to="/compliance" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Compliance</Link>
            <Link to="/about" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">About Us</Link>
            <Link to="/terms" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Terms of Service</Link>
            <Link to="/privacy" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
            <a href="mailto:support@getfelixstudio.com" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors whitespace-nowrap">Contact Us</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
