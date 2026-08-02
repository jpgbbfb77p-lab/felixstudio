import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Check, CreditCard, Zap, Building2, Sparkles,
  ShieldCheck, Users, Globe, Headphones, BarChart3, Lock
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Pricing tiers
───────────────────────────────────────────────────────── */
const TIERS = [
  {
    name: 'Starter',
    tagline: 'For early-stage startups and small teams',
    price: '$49',
    period: '/mo',
    highlight: false,
    icon: CreditCard,
    features: [
      'Up to 25 virtual cards',
      '$25,000 monthly spend limit',
      'Basic spend controls',
      'Real-time transaction feed',
      'Email support (48h SLA)',
      '1 team member',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'border border-white/20 hover:border-red-500/50 text-white hover:bg-red-950/20',
  },
  {
    name: 'Growth',
    tagline: 'For scaling businesses and agencies',
    price: '$149',
    period: '/mo',
    highlight: true,
    icon: Zap,
    badge: 'Most Popular',
    features: [
      'Up to 250 virtual cards',
      '$250,000 monthly spend limit',
      'Advanced MCC controls',
      'REST API + Webhooks',
      'Team roles & permissions',
      'Auto budget enforcement',
      'Priority support (12h SLA)',
      'Up to 10 team members',
    ],
    cta: 'Apply for Early Access',
    ctaStyle: 'bg-red-700 hover:bg-red-600 text-white shadow-lg shadow-red-900/40',
  },
  {
    name: 'Enterprise',
    tagline: 'For established companies at scale',
    price: 'Custom',
    period: '',
    highlight: false,
    icon: Building2,
    features: [
      'Unlimited virtual cards',
      'Custom spend limits',
      'Dedicated account manager',
      'Custom API integrations',
      'SSO & advanced security',
      'SLA-backed uptime guarantee',
      'White-label options',
      'Unlimited team members',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-white/20 hover:border-red-500/50 text-white hover:bg-red-950/20',
  },
] as const;

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'SOC2 Ready Infrastructure' },
  { icon: Lock, label: '256-bit Encryption' },
  { icon: Globe, label: 'Global Card Network' },
  { icon: Users, label: 'KYC/KYB Verified' },
  { icon: BarChart3, label: 'Real-time Analytics' },
  { icon: Headphones, label: 'Dedicated Support' },
];

/* ─────────────────────────────────────────────────────────
   Pricing Page
───────────────────────────────────────────────────────── */
export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (base: string) => {
    if (base === 'Custom') return 'Custom';
    const num = parseInt(base.replace('$', ''));
    const discounted = annual ? Math.round(num * 0.8) : num;
    return `$${discounted}`;
  };

  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      <Helmet>
        <title>Pricing — Felixstudio | Virtual Card Plans for Every Business</title>
        <meta name="description" content="Transparent pricing for Felixstudio's virtual card platform. Choose from Starter, Growth, or Enterprise plans built for B2B businesses of every size." />
        <meta property="og:title" content="Pricing — Felixstudio" />
        <meta property="og:description" content="Transparent pricing for virtual card infrastructure. Plans for every business size." />
      </Helmet>

      {/* Subtle top glow border */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:1, zIndex:30, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.5) 40%,rgba(239,68,68,0.6) 50%,rgba(220,38,38,0.5) 60%,transparent)' }} />

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      {/* Ambient orbs */}
      <div className="fixed pointer-events-none" style={{ zIndex:0, borderRadius:'50%', width:800, height:800, top:-300, left:'50%', transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(185,28,28,0.14) 0%,transparent 70%)' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.35em] uppercase text-red-400 hover:text-red-300 transition-colors duration-200 mb-6"
          >
            <span className="w-4 h-px bg-current" />
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 mb-4 justify-center w-full">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="font-inter text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-red-400">
              Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-tight">
            Choose Your Plan
          </h1>
          <p className="mt-5 font-inter text-sm text-zinc-300 leading-relaxed">
            Scale your virtual card infrastructure from startup to enterprise. All plans include core security features, real-time transaction monitoring, and US-based support.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`font-inter text-xs tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 ${
                !annual ? 'bg-red-700 text-white shadow-lg shadow-red-900/40' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-inter text-xs tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 ${
                annual ? 'bg-red-700 text-white shadow-lg shadow-red-900/40' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-[10px] text-red-300 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`group relative flex flex-col p-8 lg:p-10 border transition-all duration-500 ${
                tier.highlight
                  ? 'border-red-500/40 bg-red-950/10 hover:border-red-500/60 scale-[1.02] shadow-2xl shadow-red-900/20'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {/* Popular badge */}
              {'badge' in tier && tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-red-600 text-white font-inter text-[10px] tracking-widest uppercase px-4 py-1.5 shadow-lg shadow-red-900/50">
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${
                tier.highlight ? 'from-red-500/10' : 'from-white/5'
              } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className={`absolute top-0 left-0 w-8 h-[1px] ${
                tier.highlight ? 'bg-red-500' : 'bg-red-500/30'
              } group-hover:w-full group-hover:bg-red-500 transition-all duration-700 ease-out`} />

              {/* Header */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded flex items-center justify-center mb-6 border transition-all duration-300 ${
                  tier.highlight
                    ? 'border-red-500/40 bg-red-900/30'
                    : 'border-white/10 bg-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20'
                }`}>
                  <tier.icon className={`w-5 h-5 ${tier.highlight ? 'text-red-400' : 'text-white/60 group-hover:text-red-400'} transition-colors`} />
                </div>

                <h2 className="font-bebas text-2xl uppercase text-white tracking-wide mb-1">
                  {tier.name}
                </h2>
                <p className="font-inter text-xs text-zinc-400 mb-6">
                  {tier.tagline}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8 relative">
                  <span className="font-bebas text-5xl lg:text-6xl text-white tracking-tight">
                    {getPrice(tier.price)}
                  </span>
                  {tier.period && (
                    <div className="flex flex-col">
                      <span className="font-inter text-sm text-zinc-500">
                        {tier.period}
                      </span>
                      {annual && (tier.price as string) !== 'Custom' && (
                        <span className="absolute -bottom-4 left-0 font-inter text-[9px] tracking-widest uppercase text-red-400/80">
                          Billed Annually
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="relative z-10 space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-red-400' : 'text-zinc-500'}`} />
                    <span className="font-inter text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className={`relative z-10 w-full flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-widest uppercase font-inter transition-all duration-300 ${tier.ctaStyle}`}
              >
                {tier.cta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-20 lg:mt-28">
          <div className="h-px w-full mb-12" style={{ background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.25) 30%,rgba(239,68,68,0.35) 50%,rgba(220,38,38,0.25) 70%,transparent)' }} />
          
          <div className="text-center mb-10">
            <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-zinc-500">
              Included with every plan
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition-colors" />
                </div>
                <span className="font-inter text-[10px] tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ-style bottom section */}
        <div className="mt-20 lg:mt-28 text-center">
          <div className="h-px w-full mb-12" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.06) 50%,transparent)' }} />
          <h3 className="font-bebas text-2xl uppercase text-white tracking-wide mb-3">
            Need a custom solution?
          </h3>
          <p className="font-inter text-sm text-zinc-400 leading-relaxed max-w-md mx-auto mb-8">
            Enterprise clients with high-volume card issuance or custom integration needs — let's build something tailored for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500/50 hover:bg-red-950/20 px-8 py-4 text-xs tracking-widest uppercase text-white transition-all duration-300 font-inter"
          >
            Talk to Our Team <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
