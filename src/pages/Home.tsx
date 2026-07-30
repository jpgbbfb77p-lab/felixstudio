import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Crown } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────── */
const STATS = [
  { value: '0.1s',  label: 'Instant Card Issuance' },
  { value: '99.9%', label: 'Uptime Guarantee'       },
  { value: '100%',  label: 'B2B Compliant'           },
] as const;

const DOTS = [
  { top: '18%', left: '44%', size: 4, delay: 0   },
  { top: '72%', left: '54%', size: 3, delay: 1   },
  { top: '38%', left: '68%', size: 5, delay: 2   },
  { top: '22%', left: '78%', size: 3, delay: 0.5 },
  { top: '58%', left: '38%', size: 4, delay: 1.5 },
  { top: '82%', left: '72%', size: 3, delay: 2.5 },
  { top: '10%', left: '60%', size: 2, delay: 0.8 },
];

/* ─────────────────────────────────────────────────────────
   VirtualCard
───────────────────────────────────────────────────────── */
function VirtualCard({ style = {}, showContent = false, opacity = 1 }: {
  style?: React.CSSProperties; showContent?: boolean; opacity?: number;
}) {
  return (
    <div style={{
      position: 'absolute', borderRadius: 20,
      background: 'linear-gradient(135deg,rgba(220,38,38,0.30) 0%,rgba(185,28,28,0.18) 60%,rgba(153,27,27,0.25) 100%)',
      border: '1px solid rgba(255,255,255,0.13)',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 30px 80px rgba(220,38,38,0.35),0 8px 30px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.12)',
      overflow: 'hidden', opacity, ...style,
    }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize:'24px 24px' }} />
      <div style={{ position:'absolute', top:0, left:0, width:'40%', height:'100%', background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)', animation:'shineSweep 4s ease-in-out 2s infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:180, height:180, top:-60, right:-60, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:120, height:120, top:-30, right:-30, background:'rgba(255,255,255,0.03)' }} />
      {showContent && (
        <div style={{ position:'relative', padding:28, height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div style={{ width:40, height:40, borderRadius:10, background:'rgba(255,255,255,0.16)', border:'1px solid rgba(255,255,255,0.22)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:18, color:'white', fontFamily:'Inter,sans-serif' }}>F</div>
            <div style={{ textAlign:'right' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.2em', fontFamily:'Inter,sans-serif' }}>Virtual Card</div>
              <div style={{ color:'white', fontSize:13, fontWeight:600, marginTop:3, fontFamily:'Inter,sans-serif' }}>Felixstudio</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:46, height:32, borderRadius:7, background:'linear-gradient(135deg,#FCD34D,#F59E0B)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(245,158,11,0.4)' }}>
              <div style={{ width:32, height:24, borderRadius:4, border:'1px solid rgba(180,100,0,0.4)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, padding:3 }}>
                {[0,1,2,3].map(i => <div key={i} style={{ background:'rgba(180,100,0,0.3)', borderRadius:2 }} />)}
              </div>
            </div>
            <span style={{ color:'rgba(255,255,255,0.55)', fontSize:13, fontFamily:'monospace', letterSpacing:'0.22em' }}>•••• •••• •••• 4291</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
            <div>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:3, fontFamily:'Inter,sans-serif' }}>Card Holder</div>
              <div style={{ color:'white', fontSize:13, fontWeight:500, fontFamily:'Inter,sans-serif' }}>Felix Studio LLC</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:9, textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:3, fontFamily:'Inter,sans-serif' }}>Expires</div>
              <div style={{ color:'white', fontSize:13, fontWeight:500, fontFamily:'Inter,sans-serif' }}>12/28</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   AnimatedBackground
───────────────────────────────────────────────────────── */
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ background:'linear-gradient(145deg,#130508 0%,#1A0610 50%,#0F0308 100%)' }}>
      <div style={{ position:'absolute', borderRadius:'50%', width:1000, height:1000, top:-250, right:-180, background:'radial-gradient(circle,rgba(220,38,38,0.28) 0%,transparent 70%)', animation:'orbDrift1 14s ease-in-out infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:750,  height:750,  bottom:-250, left:'20%', background:'radial-gradient(circle,rgba(185,28,28,0.22) 0%,transparent 70%)', animation:'orbDrift2 11s ease-in-out 3s infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:550,  height:550,  top:'25%', left:-120, background:'radial-gradient(circle,rgba(153,27,27,0.18) 0%,transparent 70%)', animation:'orbDrift3 16s ease-in-out 6s infinite' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)', backgroundSize:'64px 64px', animation:'gridShimmer 6s ease-in-out infinite' }} />
      <VirtualCard showContent style={{ width:420, height:264, top:'50%', right:'5%', animation:'cardFloat1 8s ease-in-out infinite' }} />
      <VirtualCard style={{ width:310, height:196, top:'10%', right:'16%', animation:'cardFloat2 10s ease-in-out 2s infinite', transform:'rotate(24deg)' }} opacity={0.55} />
      <VirtualCard style={{ width:360, height:226, bottom:'4%', right:'1%', animation:'cardFloat3 9s ease-in-out 4s infinite', transform:'rotate(-6deg)' }} opacity={0.4} />
      {DOTS.map((d, i) => (
        <div key={i} style={{ position:'absolute', width:d.size, height:d.size, borderRadius:'50%', top:d.top, left:d.left, background:'rgba(239,68,68,0.8)', animation:`dotPulse 3s ease-in-out ${d.delay}s infinite` }} />
      ))}
      <div style={{ position:'absolute', left:0, right:0, top:'48%', height:1, background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.25) 30%,rgba(239,68,68,0.35) 50%,rgba(220,38,38,0.25) 70%,transparent)' }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Home page
───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
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
            B2B Corporate Expense Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
          {(['Issue.', 'Control.', 'Scale.'] as const).map(word => (
            <span key={word} className="block" style={{ fontSize: 'clamp(2.8rem,8vw,7rem)' }}>{word}</span>
          ))}
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 max-w-md font-inter text-sm sm:text-base leading-relaxed text-white/65">
          We build smart virtual card infrastructure for businesses that don't just manage spend —{' '}
          <strong className="text-white font-semibold">they dominate it.</strong>
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            to="/features"
            className="group inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white transition-all duration-200 font-inter shadow-lg shadow-red-900/60"
          >
            See How It Works
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 border border-white/25 hover:border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white/75 hover:text-white hover:bg-white/5 transition-all duration-200 font-inter"
          >
            Contact Us
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="hidden sm:flex items-center gap-3 ml-2">
            <Award className="w-8 h-8 text-red-400/60" />
            <div>
              <div className="text-xs tracking-wider uppercase text-white/50 font-inter">Delaware Registered</div>
              <div className="text-xs tracking-wider uppercase text-white/50 font-inter">US C-Corp · Stripe Partner</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">{value}</div>
              <div className="mt-1 text-[9px] sm:text-xs tracking-widest uppercase text-white/45 font-inter">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
