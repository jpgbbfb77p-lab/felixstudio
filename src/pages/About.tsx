import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Target, Building2, Users, ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   About Data
───────────────────────────────────────────────────────── */
const ABOUT_PILLARS = [
  {
    Icon: Target,
    title: 'Our Mission',
    desc: 'We are committed to building financial infrastructure for modern organizations, eliminating the complexity of budget management and corporate spending.',
    bullets: [
      'Eliminate Financial Complexity',
      'Empower Modern Organizations',
      'Automate Budget Management',
    ],
  },
  {
    Icon: Building2,
    title: 'Company Structure',
    desc: 'Felixstudio, LLC is a legally registered corporate entity in the State of Delaware, United States, ensuring robust governance and investor confidence.',
    bullets: [
      'Delaware Registered LLC',
      'US-Based Operations',
      'Transparent Governance',
    ],
  },
  {
    Icon: Users,
    title: 'Target Market',
    desc: 'Our infrastructure is purpose-built for the needs of Small & Medium Businesses (SMBs), rapidly scaling Startups, and modern Digital Agencies requiring B2B cards.',
    bullets: [
      'SMBs & Startups',
      'Digital & Creative Agencies',
      'B2B Virtual Card Users',
    ],
  },
] as const;

/* ─────────────────────────────────────────────────────────
   About Us Page
───────────────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      <Helmet>
        <title>About Us — Felixstudio | Our Mission & Team</title>
        <meta name="description" content="Felixstudio, LLC is a Delaware-registered fintech company building financial infrastructure for modern organizations. Meet our team and learn about our mission." />
        <meta property="og:title" content="About Us — Felixstudio" />
        <meta property="og:description" content="Building the future of B2B corporate expense management, engineered for scale and speed." />
      </Helmet>

      {/* Subtle top glow border */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:1, zIndex:30, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.5) 40%,rgba(239,68,68,0.6) 50%,rgba(220,38,38,0.5) 60%,transparent)' }} />

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      {/* Ambient orb — top left this time */}
      <div className="fixed pointer-events-none" style={{ zIndex:0, borderRadius:'50%', width:800, height:800, top:-300, left:-200, background:'radial-gradient(circle,rgba(185,28,28,0.12) 0%,transparent 70%)' }} />

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
            Company &amp; Mission
          </p>
          <h1 className="font-bebas text-5xl sm:text-6xl lg:text-8xl uppercase text-white leading-[0.9] tracking-tight">
            About Us
          </h1>
          <p className="mt-5 font-inter text-sm text-zinc-300 max-w-lg leading-relaxed">
            Investors back people and vision. We are building the future of B2B corporate expense management, engineered for scale and speed from day one.
          </p>
        </div>

        {/* Pillars / Cards */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {ABOUT_PILLARS.map(({ Icon, title, desc, bullets }, i) => (
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

        {/* ── Team / Leadership ── */}
        <div className="mt-24 lg:mt-32">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">Leadership</span>
            </div>
            <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Meet the <span className="text-red-500">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Founder card */}
            <div className="group relative p-8 lg:p-10 border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-red-500/30 group-hover:w-full group-hover:bg-red-500 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                {/* Headshot placeholder */}
                <div className="shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg border border-white/15 bg-gradient-to-br from-red-950/40 to-zinc-900/40 flex items-center justify-center overflow-hidden group-hover:border-red-500/30 transition-colors duration-300">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                        <span className="font-bebas text-lg text-white/70">SN</span>
                      </div>
                      <span className="font-inter text-[8px] tracking-widest uppercase text-zinc-500">Photo</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="font-inter text-[10px] tracking-[0.3em] uppercase text-red-500/60 mb-2">Founder</div>
                  <h3 className="font-bebas text-2xl uppercase text-white tracking-wide mb-1">
                    Sakullapong Nuntayanont
                  </h3>
                  <p className="font-inter text-xs tracking-widest uppercase text-zinc-400 mb-4">
                    Founder &amp; Chief Executive Officer
                  </p>
                  <p className="font-inter text-sm text-zinc-300 leading-relaxed mb-6">
                    A hands-on founder bootstrapping at the intersection of AI and fintech. Sakullapong is building Felixstudio from the ground up — designing the product vision, engineering the core platform, and leading go-to-market strategy. He is focused on leveraging AI-driven automation to simplify B2B financial infrastructure and deliver enterprise-grade virtual card solutions to modern businesses worldwide.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                    <a
                      href="mailto:sakullapong@getfelixstudio.com"
                      className="inline-flex items-center gap-2 font-inter text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Open positions card */}
            <div className="group relative p-8 lg:p-10 border border-dashed border-white/10 hover:border-red-500/20 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all duration-300">
                <Users className="w-6 h-6 text-zinc-500 group-hover:text-red-400 transition-colors" />
              </div>
              <h3 className="font-bebas text-xl uppercase text-white tracking-wide mb-2">
                We're Hiring
              </h3>
              <p className="font-inter text-sm text-zinc-400 leading-relaxed mb-6 max-w-xs">
                Interested in joining an early-stage fintech startup? We're looking for exceptional engineers and operators.
              </p>
              <a
                href="mailto:careers@getfelixstudio.com"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-red-500/40 px-6 py-3 text-[10px] tracking-widest uppercase text-zinc-400 hover:text-white hover:bg-red-950/20 transition-all duration-300 font-inter"
              >
                Get in Touch <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 lg:mt-28 h-px w-full" style={{ background:'linear-gradient(90deg,rgba(220,38,38,0.3),rgba(255,255,255,0.06) 50%,transparent)' }} />

        {/* Footer info */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg border border-red-900/40 bg-red-950/20 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-red-500/60" />
            </div>
            <div>
              <span className="font-inter text-[10px] tracking-[0.35em] uppercase text-red-500/80">
                Felixstudio, LLC
              </span>
              <p className="font-inter text-xs text-white/30 mt-1 max-w-sm leading-relaxed">
                Registered in the State of Delaware. Committed to providing premium B2B expense management tools.
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
