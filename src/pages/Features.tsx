
import { Link } from 'react-router-dom';
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

/* ─────────────────────────────────────────────────────────
   Features page
───────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>

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
          <h1 className="font-podium text-5xl sm:text-6xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
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
              <h2 className="font-podium text-xl sm:text-2xl uppercase text-white tracking-wide mb-4 leading-tight">
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
