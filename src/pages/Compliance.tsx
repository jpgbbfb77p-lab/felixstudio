import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Landmark, ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Compliance Data
───────────────────────────────────────────────────────── */
const COMPLIANCE_PILLARS = [
  {
    Icon: ShieldCheck,
    title: 'B2B Commercial Policy',
    desc: 'Felixstudio operates exclusively for corporate and business entities. No personal or consumer card products are offered under any circumstances.',
    bullets: [
      'Strict Commercial Use Only',
      'Mandatory KYC / KYB Verification',
      'Corporate Entity Authentication',
    ],
  },
  {
    Icon: Lock,
    title: 'Data Security & Infrastructure',
    desc: 'Enterprise-grade security architecture designed to protect sensitive financial data and ensure uninterrupted, secure transactional flows.',
    bullets: [
      '256-bit Data Encryption',
      'SOC2 Qualified Infrastructure',
      'Continuous Threat Monitoring',
    ],
  },
  {
    Icon: Landmark,
    title: 'Partner Network & Underwriting',
    desc: 'Backed by tier-1 financial institutions and regulatory partners in the United States to ensure full operational and legal compliance.',
    bullets: [
      'Enterprise Issuing Infrastructure',
      'Delaware LLC Regulatory Setup',
      'Regulated Banking Partners',
    ],
  },
] as const;

/* ─────────────────────────────────────────────────────────
   Compliance Page
───────────────────────────────────────────────────────── */
export default function Compliance() {
  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      <Helmet>
        <title>Compliance — Felixstudio | Security, KYC/KYB & Regulatory Standards</title>
        <meta name="description" content="Felixstudio's compliance framework: B2B-only commercial policy, 256-bit encryption, SOC2 infrastructure, KYC/KYB verification, and regulated banking partners." />
        <meta property="og:title" content="Compliance — Felixstudio" />
        <meta property="og:description" content="Enterprise-grade security and regulatory compliance for B2B virtual card infrastructure." />
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
            Risk, Legal &amp; Security
          </p>
          <h1 className="font-bebas text-5xl sm:text-6xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
            Compliance
          </h1>
          <p className="mt-5 font-inter text-sm text-zinc-300 max-w-lg leading-relaxed">
            Trust is our core infrastructure. We adhere to the strictest regulatory standards to ensure our financial network remains secure, compliant, and reliable.
          </p>
        </div>

        {/* Pillars / Cards */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {COMPLIANCE_PILLARS.map(({ Icon, title, desc, bullets }, i) => (
            <div
              key={title}
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
                {title}
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

        {/* Footer info */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg border border-red-900/40 bg-red-950/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-red-500/60" />
            </div>
            <div>
              <span className="font-inter text-[10px] tracking-[0.35em] uppercase text-red-500/80">
                Ready for Underwriting
              </span>
              <p className="font-inter text-xs text-white/30 mt-1 max-w-sm leading-relaxed">
                Our infrastructure meets the prerequisites for modern FinTech and corporate card networks.
              </p>
            </div>
          </div>
          <div className="shrink-0 sm:text-right">
            <div className="font-inter text-[10px] tracking-wider uppercase text-white/30">© 2026 Felixstudio, LLC</div>
            <div className="font-inter text-[10px] tracking-wider uppercase text-white/20 mt-1">Delaware, United States</div>
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
