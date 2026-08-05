import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Award, Crown } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { WaitlistCounter } from '../components/Home/WaitlistCounter';
import { AnimatedBackground } from '../components/Home/AnimatedBackground';
import { SocialProof } from '../components/Home/SocialProof';
import { HowItWorks } from '../components/Home/HowItWorks';
import { UseCases } from '../components/Home/UseCases';
import { FeaturesBento } from '../components/Home/FeaturesBento';

const STATS = [
  { value: '0.1s',  label: 'Instant Card Issuance' },
  { value: '99.9%', label: 'Uptime SLA'       },
  { value: '100%',  label: 'Secure & Compliant'      },
] as const;

export default function Home({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <>
      <Helmet>
        <title>Felixstudio — Next-Gen Virtual Card Platform for Businesses</title>
        <meta name="description" content="Issue, control, and scale virtual cards instantly. Felixstudio provides smart B2B virtual card infrastructure for businesses that dominate their spend management." />
        <meta property="og:title" content="Felixstudio — Next-Gen Virtual Card Platform for Businesses" />
        <meta property="og:description" content="Issue, control, and scale virtual cards instantly. Smart B2B virtual card infrastructure for modern businesses." />
        <meta property="og:url" content="https://getfelixstudio.com/" />
      </Helmet>
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col pb-20">
        <AnimatedBackground />

        {/* Readability gradient */}
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background:'linear-gradient(to right,rgba(13,3,5,0.90) 0%,rgba(13,3,5,0.58) 45%,rgba(13,3,5,0.1) 70%,transparent 100%)' }} />

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">

          {/* Tagline */}
          <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-3">
            <Crown className="w-4 h-4 text-red-400" />
            <span className="font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60">
              Next-Gen Virtual Card Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-delay-1 font-bebas uppercase leading-[0.92] tracking-tight">
            {(['Issue.', 'Control.', 'Scale.'] as const).map(word => (
              <span key={word} className="block" style={{ fontSize: 'clamp(2.8rem,8vw,7rem)', color: '#2175C0' }}>{word}</span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 max-w-md font-inter text-sm sm:text-base leading-relaxed text-white/65">
            We build smart virtual card infrastructure for businesses that don't just manage spend —{' '}
            <strong className="text-white font-semibold">they dominate it.</strong>
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={(e) => { e.preventDefault(); onOpenWaitlist(); }}
              className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter shadow-lg shadow-red-900/60"
            >
              Apply for Early Access
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 border border-white/25 hover:border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white/75 hover:text-white hover:bg-white/5 transition-all duration-200 font-inter"
            >
              Contact Us
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="hidden sm:flex items-center gap-3 ml-2">
              <Award className="w-8 h-8 text-red-400/60" />
              <div>
                <div className="text-xs tracking-wider uppercase text-white/50 font-inter">Delaware Registered</div>
                <div className="text-xs tracking-wider uppercase text-white/50 font-inter">US Registered LLC · Enterprise Infrastructure</div>
              </div>
            </div>
          </div>
          
          <WaitlistCounter />

          {/* Stats */}
          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: '#2175C0' }}>{value}</div>
                <div className="mt-1 text-[9px] sm:text-xs tracking-widest uppercase font-inter" style={{ color: 'rgba(33,117,192,0.6)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SocialProof />
      <HowItWorks />
      <UseCases />
      <FeaturesBento />
      <FAQ />
    </>
  );
}
