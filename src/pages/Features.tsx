
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Code2, Zap, ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Feature data
───────────────────────────────────────────────────────── */
const FEATURES = [
  {
    Icon: CreditCard,
    label: 'Virtual Card Management',
    desc: 'Issue virtual cards instantly with precision spend controls — set daily or monthly limits and lock cards to specific merchant categories.',
    bullets: [
      'Instant Card Creation',
      'Daily / Monthly Spend Limits',
      'Merchant Category Control (MCC)',
    ],
  },
  {
    Icon: Code2,
    label: 'API Infrastructure',
    desc: 'Developer-first REST API designed to integrate with any accounting system, ERP, or internal finance tooling your organization runs.',
    bullets: [
      'REST API with Webhooks',
      'Accounting System Integration',
      'Real-time Transaction Events',
    ],
  },
  {
    Icon: Zap,
    label: 'Automated Expense Control',
    desc: 'Rules-based budget enforcement and auto-approval workflows — eliminate manual receipt reconciliation entirely.',
    bullets: [
      'Auto Budget Enforcement',
      'Instant Approval Workflows',
      'Zero Manual Reconciliation',
    ],
  },
] as const;

import { useState, useEffect } from 'react';

/* ─────────────────────────────────────────────────────────
   Interactive Features Demo
───────────────────────────────────────────────────────── */
function InteractiveDemo() {
  const [spendLimit, setSpendLimit] = useState(5000);
  const [isGenerating, setIsGenerating] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'approved', merchant: 'AWS EMEA', amount: 1450.00, time: 'Just now' },
    { id: 2, type: 'declined', merchant: 'Unrecognized Sub', amount: 99.00, time: '2m ago' },
    { id: 3, type: 'approved', merchant: 'Google Workspace', amount: 240.00, time: '1h ago' }
  ]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 800);
  };

  // Simulate incoming transactions
  useEffect(() => {
    const interval = setInterval(() => {
      const mockMerchants = ['Meta Ads', 'OpenAI API', 'Slack', 'Vercel', 'Figma'];
      const isApproved = Math.random() > 0.3;
      const newTx = {
        id: Date.now(),
        type: isApproved ? 'approved' : 'declined',
        merchant: mockMerchants[Math.floor(Math.random() * mockMerchants.length)],
        amount: Math.floor(Math.random() * 500) + 15,
        time: 'Just now'
      };
      
      setTransactions(prev => [newTx, ...prev].slice(0, 4));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-24 mb-12">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">Interactive Demo</span>
        </div>
        <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Experience <span className="text-red-500">Real-time</span> Control
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-red-900/10">
        
        {/* Left Col: Card & Controls */}
        <div className="flex flex-col gap-8">
          
          {/* Virtual Card */}
          <div className="relative w-full max-w-md mx-auto aspect-[1.586/1] perspective-1000">
            <div 
              className={`w-full h-full rounded-2xl overflow-hidden relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-3d ${isGenerating ? 'rotate-y-180 scale-95' : 'rotate-y-0 scale-100'}`}
              style={{
                border: '1px solid rgba(220, 38, 38, 0.4)',
                background: 'linear-gradient(135deg, rgba(220,20,20,0.4) 0%, rgba(20,5,5,0.9) 100%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(220,38,38,0.2)'
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,50,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,50,50,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className={`absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent ${isGenerating ? 'animate-[shineSweep_0.8s_ease-in-out]' : ''}`} />
              
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-bold text-lg text-white">F</div>
                  <div className="text-right">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">Spend Limit</div>
                    <div className="text-xl font-bebas tracking-wide text-white transition-all duration-300">
                      ${spendLimit.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="w-12 h-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-600 mb-4 opacity-80" />
                  <div className="font-mono text-lg tracking-[0.2em] text-white/80">•••• •••• •••• 8924</div>
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Card Holder</div>
                      <div className="text-sm font-medium text-white">Engineering Dept</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Expires</div>
                      <div className="text-sm font-medium text-white">12/28</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <label className="font-inter text-xs tracking-widest uppercase text-zinc-400">Monthly Limit</label>
              <span className="font-mono text-sm text-red-400">${spendLimit.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="10000" 
              step="100"
              value={spendLimit}
              onChange={(e) => setSpendLimit(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500 mb-6"
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-red-700 hover:bg-red-600 disabled:bg-red-800/50 py-3 text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter rounded border border-red-500/50"
            >
              {isGenerating ? 'Provisioning...' : 'Update Card Config'}
            </button>
          </div>
        </div>

        {/* Right Col: Live Feed */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <h3 className="font-bebas text-xl uppercase text-white tracking-wide">Live Transaction Feed</h3>
          </div>
          
          <div className="flex-1 flex flex-col gap-3 relative overflow-hidden">
            {/* Fade out mask at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
            
            {transactions.map((tx, idx) => (
              <div 
                key={tx.id}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-lg animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    tx.type === 'approved' ? 'bg-green-950/30 border-green-500/30 text-green-400' : 'bg-red-950/30 border-red-500/30 text-red-400'
                  }`}>
                    {tx.type === 'approved' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </div>
                  <div>
                    <div className="font-inter text-sm font-medium text-white mb-1">{tx.merchant}</div>
                    <div className="font-inter text-[10px] tracking-widest uppercase text-zinc-500">{tx.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-sm ${tx.type === 'approved' ? 'text-zinc-300' : 'text-zinc-500 line-through'}`}>
                    ${tx.amount.toFixed(2)}
                  </div>
                  <div className={`font-inter text-[10px] tracking-widest uppercase mt-1 ${
                    tx.type === 'approved' ? 'text-green-500/80' : 'text-red-500/80'
                  }`}>
                    {tx.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Features page
───────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      <Helmet>
        <title>Features — Felixstudio | Virtual Card Management & API Infrastructure</title>
        <meta name="description" content="Explore Felixstudio's core features: instant virtual card issuance, REST API with webhooks, automated expense controls, and granular spend management for businesses." />
        <meta property="og:title" content="Features — Felixstudio" />
        <meta property="og:description" content="Instant virtual card issuance, REST API with webhooks, and automated expense controls for businesses." />
      </Helmet>

      {/* Subtle top glow border */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:1, zIndex:30, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.5) 40%,rgba(239,68,68,0.6) 50%,rgba(220,38,38,0.5) 60%,transparent)' }} />

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      {/* Ambient orb — top right */}
      <div className="fixed pointer-events-none" style={{ zIndex:0, borderRadius:'50%', width:700, height:700, top:-200, right:-150, background:'radial-gradient(circle,rgba(185,28,28,0.14) 0%,transparent 70%)' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.35em] uppercase text-red-400 hover:text-red-300 transition-colors duration-200 mb-6"
          >
            <span className="w-4 h-px bg-current" />
            Back to Home
          </Link>
          <p className="font-inter text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-red-400 mb-3">
            Product &amp; Infrastructure
          </p>
          <h1 className="font-bebas text-5xl sm:text-6xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
            Features
          </h1>
          <p className="mt-5 font-inter text-sm text-zinc-300 max-w-lg leading-relaxed">
            Built for fintech-grade compliance. Every component is designed for regulated, business-only spending environments.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {FEATURES.map(({ Icon, label, desc, bullets }, i) => (
            <div
              key={label}
              className="group px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0 hover:bg-red-950/10 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-7 inline-flex items-center justify-center w-11 h-11 border border-red-800/40 bg-red-950/40 group-hover:border-red-600/50 group-hover:bg-red-900/30 transition-all duration-300">
                <Icon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
              </div>

              {/* Number */}
              <div className="font-inter text-[10px] tracking-[0.3em] uppercase text-red-500/60 mb-3">
                0{i + 1}
              </div>

              {/* Title */}
              <h2 className="font-bebas text-xl sm:text-2xl uppercase text-white tracking-wide mb-4 leading-tight">
                {label}
              </h2>

              {/* Description */}
              <p className="font-inter text-sm text-zinc-300 leading-relaxed mb-8">
                {desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {bullets.map(b => (
                  <li key={b} className="flex items-center gap-3 font-inter text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-zinc-200 group-hover:text-white transition-colors duration-300">
                    <div className="w-4 h-px bg-red-500 shrink-0 group-hover:w-5 group-hover:bg-red-400 transition-all duration-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <InteractiveDemo />

        {/* Divider */}
        <div className="mt-20 lg:mt-28 h-px w-full" style={{ background:'linear-gradient(90deg,rgba(220,38,38,0.3),rgba(255,255,255,0.06) 50%,transparent)' }} />

        {/* Footer compliance */}
        <div id="compliance" className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-inter text-[10px] tracking-[0.35em] uppercase text-red-700/55">
              Commercial &amp; Business Use Only
            </span>
            <p className="font-inter text-xs text-white/22 mt-2 max-w-md leading-relaxed">
              Felixstudio, LLC provides virtual card and expense management infrastructure designed strictly for B2B commercial use.
              No personal or consumer card products offered.
            </p>
          </div>
          <div id="contact" className="shrink-0 sm:text-right">
            <div className="font-inter text-[10px] tracking-wider uppercase text-white/22">© 2026 Felixstudio, LLC</div>
            <div className="font-inter text-[10px] tracking-wider uppercase text-white/16 mt-1">Delaware, United States</div>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 border border-white/15 hover:border-red-700/50 px-5 py-2.5 text-[10px] tracking-widest uppercase text-white/40 hover:text-white/70 hover:bg-red-950/30 transition-all duration-200 font-inter"
            >
              Back to Home <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
