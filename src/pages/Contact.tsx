import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Calendar, Building2, Briefcase, Loader2, CheckCircle2 } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/felixwhite-studio/felixstudio-demo-intro-call";

export default function Contact() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [error, setError] = useState('');

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      setError('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid work email.');
      return;
    }

    // Simulate API submission / Web3Forms
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(2);
  };

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>

      {/* Subtle top glow border */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:1, zIndex:30, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.5) 40%,rgba(239,68,68,0.6) 50%,rgba(220,38,38,0.5) 60%,transparent)' }} />

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      {/* Ambient orb */}
      <div className="fixed pointer-events-none" style={{ zIndex:0, borderRadius:'50%', width:800, height:800, bottom:-300, right:-200, background:'radial-gradient(circle,rgba(185,28,28,0.12) 0%,transparent 70%)' }} />

      {/* ── Main content ── */}
      <div id="contact-section" className="relative z-10 flex-1 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">

        {/* Section header */}
        <div className="mb-16 lg:mb-20 text-center max-w-2xl mx-auto">
          <p className="font-inter text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-red-400 mb-3">
            Sales &amp; Investor Inquiry
          </p>
          <h1 className="font-podium text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-5 font-inter text-sm text-zinc-300 leading-relaxed">
            Select the appropriate channel below to connect with our team. We prioritize inquiries to ensure you reach the right department instantly.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* For Businesses */}
          <div className="group relative p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700/0 via-red-500/50 to-red-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-red-800/40 bg-red-950/40">
                <Building2 className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h2 className="font-podium text-2xl uppercase text-white tracking-wide">For Businesses</h2>
                <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-zinc-400 mt-1">Request Early Access</p>
              </div>
            </div>

            {step === 1 ? (
              <form className="space-y-5" onSubmit={handleDemoSubmit}>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-xs font-inter rounded">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block font-inter text-[10px] tracking-widest uppercase text-zinc-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-inter text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-inter text-[10px] tracking-widest uppercase text-zinc-400 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-inter text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-inter text-[10px] tracking-widest uppercase text-zinc-400 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-inter text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 disabled:bg-red-800 disabled:cursor-not-allowed px-6 py-4 text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                  ) : (
                    <>Request Demo <ArrowUpRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-up h-full">
                <div className="w-16 h-16 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-podium text-2xl uppercase text-white mb-3">Request Received</h3>
                <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-8 max-w-sm">
                  Thank you! Your demo request has been prioritized. You can skip the wait by scheduling a meeting with our team directly.
                </p>
                
                <button 
                  onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black px-6 py-4 text-xs tracking-widest uppercase transition-all duration-200 font-inter font-semibold mb-4"
                >
                  <Calendar className="w-4 h-4" /> Pick a Time Slot
                </button>
                
                <button 
                  onClick={() => { setStep(1); setFormData({ name: '', email: '', company: '' }); }}
                  className="w-full font-inter text-[10px] tracking-widest uppercase text-zinc-500 hover:text-white transition-colors mt-auto pt-4"
                >
                  Close &amp; Wait for Email
                </button>
              </div>
            )}
          </div>

          {/* For Investors */}
          <div className="group relative p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700/0 via-red-500/50 to-red-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700/40 bg-zinc-800/40">
                <Briefcase className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h2 className="font-podium text-2xl uppercase text-white tracking-wide">For Investors</h2>
                <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-zinc-400 mt-1">Angels &amp; VC Inquiries</p>
              </div>
            </div>

            <p className="font-inter text-sm text-zinc-300 leading-relaxed mb-8">
              We are currently in active discussions with strategic partners and investors who share our vision for the future of B2B financial infrastructure.
            </p>

            <div className="space-y-4 mt-auto">
              <a href="mailto:investors@felixstudio.com" className="w-full flex items-center justify-between border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-4 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span className="font-inter text-xs tracking-widest uppercase text-white">investors@felixstudio.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <button 
                onClick={() => window.open("https://calendly.com/felixwhite-studio/30min", "_blank", "noopener,noreferrer")}
                className="w-full flex items-center justify-between border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-4 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span className="font-inter text-xs tracking-widest uppercase text-white">Schedule Intro Call</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Institutional Footer ── */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-black/40 backdrop-blur-md py-12 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded border border-white/20 bg-white/10 flex items-center justify-center font-bold text-sm text-white font-inter">
              F
            </div>
            <div>
              <div className="font-podium uppercase text-white tracking-widest text-sm">Felixstudio, LLC</div>
              <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-1">Delaware C-Corp</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <Link to="/features" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">Features</Link>
            <Link to="/compliance" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">Compliance</Link>
            <Link to="/about" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">About Us</Link>
            <a href="#" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
