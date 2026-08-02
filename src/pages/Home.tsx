
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowUpRight, Award, Crown, Wallet, CreditCard, Globe,
  Megaphone, MonitorPlay, Globe2, ShieldAlert, Sliders, Activity
} from 'lucide-react';
import { FAQ } from '../components/FAQ';

/* ─────────────────────────────────────────────────────────
   Waitlist Counter
───────────────────────────────────────────────────────── */
function WaitlistCounter() {
  return (
    <div className="flex items-center gap-3 mt-8 bg-white/5 border border-white/10 rounded-full py-2.5 px-5 w-fit animate-fade-up-delay-3">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <div className="font-inter text-xs text-zinc-300 uppercase tracking-widest">
        Waitlist is now open
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Home page
───────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────── */
const STATS = [
  { value: '0.1s',  label: 'Instant Card Issuance' },
  { value: '99.9%', label: 'Uptime SLA'       },
  { value: '100%',  label: 'Secure & Compliant'      },
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

const STEPS = [
  {
    num: '01',
    title: 'Fund Your Account',
    desc: 'Instant top-up via bank transfer, ACH, or credit card.',
    icon: Wallet
  },
  {
    num: '02',
    title: 'Issue Unlimited Cards',
    desc: 'Generate active virtual cards in 0.1 seconds with custom limits.',
    icon: CreditCard
  },
  {
    num: '03',
    title: 'Spend Everywhere',
    desc: 'Use for Meta/Google Ads, SaaS bills, or connect to Apple/Google Pay.',
    icon: Globe
  }
];

const USE_CASES = [
  {
    title: 'Media & Ad Buyers',
    desc: 'Isolate ad accounts with dedicated virtual cards. Prevent a single flagged card from taking down your entire Meta or Google Ads operation.',
    icon: Megaphone,
  },
  {
    title: 'SaaS Subscriptions',
    desc: 'Create vendor-specific cards for AWS, OpenAI, and internal tools. Set strict monthly limits to eliminate unused subscription drain.',
    icon: MonitorPlay,
  },
  {
    title: 'Global Founders',
    desc: 'Pay international contractors, agencies, and vendors seamlessly. Secure your global supply chain with encrypted virtual payments.',
    icon: Globe2,
  }
];

/* ─────────────────────────────────────────────────────────
   VirtualCard
───────────────────────────────────────────────────────── */
function VirtualCard({ style = {}, showContent = false, opacity = 1 }: {
  style?: React.CSSProperties; showContent?: boolean; opacity?: number;
}) {
  return (
    <div 
      className="absolute backdrop-blur-md overflow-hidden"
      style={{
        borderRadius: 20,
        border: '1px solid rgba(220, 38, 38, 0.25)',
        background: 'linear-gradient(135deg, rgba(220,20,20,0.35) 0%, rgba(40,5,5,0.8) 100%)',
        boxShadow: '0 0 40px rgba(220,20,20,0.3), inset 0 0 20px rgba(220,20,20,0.15), 0 20px 40px rgba(0,0,0,0.8)',
        opacity,
        transition: 'transform 500ms ease-out, box-shadow 500ms ease-out, border 500ms ease-out',
        ...style,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.animationPlayState = 'paused';
        el.style.transform = 'translateY(-10px)';
        el.style.border = '1px solid rgba(33, 117, 192, 0.7)';
        el.style.boxShadow = '0 0 30px rgba(33,117,192,0.5), 0 0 70px rgba(33,117,192,0.2), inset 0 0 25px rgba(33,117,192,0.15), 0 30px 60px rgba(0,0,0,0.9)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.animationPlayState = 'running';
        el.style.transform = '';
        el.style.border = '1px solid rgba(220, 38, 38, 0.25)';
        el.style.boxShadow = '0 0 40px rgba(220,20,20,0.3), inset 0 0 20px rgba(220,20,20,0.15), 0 20px 40px rgba(0,0,0,0.8)';
      }}
    >
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,50,50,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,50,50,0.15) 1px,transparent 1px)', backgroundSize:'24px 24px' }} />
      <div style={{ position:'absolute', top:0, left:0, width:'40%', height:'100%', background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', animation:'shineSweep 4s ease-in-out 2s infinite' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:200, height:200, top:-80, right:-60, background:'radial-gradient(circle, rgba(220,30,30,0.15) 0%, transparent 70%)', border:'1px solid rgba(255,100,100,0.1)' }} />
      <div style={{ position:'absolute', borderRadius:'50%', width:140, height:140, top:-20, right:-40, background:'radial-gradient(circle, rgba(255,50,50,0.1) 0%, transparent 70%)' }} />
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
   How It Works
───────────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section style={{ background: 'linear-gradient(160deg,#0D0205 0%,#110307 100%)' }} className="w-full py-20 lg:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">How It Works</span>
          </div>
          <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Built for <span className="text-red-500">Speed.</span><br />
            Ready in Seconds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-0" />

          {STEPS.map((step) => (
            <div key={step.num} className="group relative z-10">
              <div 
                className="h-full relative p-8 lg:p-10 border border-white/10 hover:border-red-500/40 transition-all duration-500 flex flex-col items-start"
                style={{ background: 'rgba(20,5,10,0.4)', backdropFilter: 'blur(12px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-red-500/50 group-hover:w-full group-hover:bg-red-500 transition-all duration-700 ease-out" />
                
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-14 h-14 rounded bg-red-950/40 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <step.icon className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
                  </div>
                  <span className="font-bebas text-4xl lg:text-5xl text-white/10 group-hover:text-red-500/20 transition-colors duration-500 select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-bebas uppercase text-xl lg:text-2xl text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Use Cases (Target Audience)
───────────────────────────────────────────────────────── */
function UseCases() {
  return (
    <section className="w-full py-24 lg:py-32 border-t border-white/5 relative bg-[#0a0204]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">Use Cases</span>
          </div>
          <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl">
            Engineered for <br/>
            <span className="text-red-500">High Velocity</span> Spend
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => (
            <div key={idx} className="group relative p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 bg-black/40 backdrop-blur-sm">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-red-500/30 group-hover:w-full group-hover:bg-red-500 transition-all duration-700 ease-out" />
              
              <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red-900/20 group-hover:border-red-500/30 transition-all">
                <uc.icon className="w-5 h-5 text-white/70 group-hover:text-red-400" />
              </div>
              <h3 className="font-inter text-lg font-semibold text-white mb-3 tracking-wide">{uc.title}</h3>
              <p className="font-inter text-sm text-white/50 leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Features Bento Grid
───────────────────────────────────────────────────────── */
function FeaturesBento() {
  return (
    <section className="w-full py-24 lg:py-32 border-t border-white/5 relative bg-gradient-to-b from-[#0a0204] to-[#050102]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-red-400/80">Features</span>
          </div>
          <h2 className="font-bebas uppercase text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Granular Control.<br/>
            <span className="text-white/40">Total Visibility.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 relative p-8 lg:p-12 border border-white/10 overflow-hidden bg-black/20 group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[100px] rounded-full group-hover:bg-red-600/10 transition-colors duration-700" />
            <div className="relative z-10 max-w-xl">
              <Sliders className="w-8 h-8 text-red-500 mb-6" />
              <h3 className="font-bebas text-2xl text-white uppercase tracking-wide mb-4">Dynamic Spend Limits</h3>
              <p className="font-inter text-white/50 leading-relaxed">
                Take absolute control of your cash flow. Configure daily, weekly, or monthly spend caps per card. Prevent overcharges automatically without manual intervention.
              </p>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="relative p-8 border border-white/10 bg-black/20 hover:border-white/20 transition-all group overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/5 blur-[50px] rounded-full group-hover:bg-red-600/15 transition-colors duration-700" />
            <div className="relative z-10">
              <ShieldAlert className="w-6 h-6 text-red-500 mb-6" />
              <h3 className="font-bebas text-xl text-white uppercase tracking-wide mb-3">1 Click Freeze</h3>
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                Compromised card? Suspicious activity? Freeze or terminate any virtual card instantly from your dashboard.
              </p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="relative p-8 border border-white/10 bg-black/20 hover:border-white/20 transition-all group overflow-hidden">
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/5 blur-[50px] rounded-full group-hover:bg-red-600/15 transition-colors duration-700" />
             <div className="relative z-10">
               <Activity className="w-6 h-6 text-red-500 mb-6" />
               <h3 className="font-bebas text-xl text-white uppercase tracking-wide mb-3">Real Time Ledger</h3>
               <p className="font-inter text-sm text-white/50 leading-relaxed">
                 Monitor every transaction globally in real-time. No more waiting for end-of-month statements to see where your capital went.
               </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Mission Statement / Traction
───────────────────────────────────────────────────────── */
function SocialProof() {
  return (
    <section className="w-full py-24 lg:py-32 border-t border-white/5 relative bg-[#060102] overflow-hidden flex justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-red-600/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-green-400">Early Access Waitlist</span>
        </div>
        <div className="font-bebas text-5xl lg:text-6xl text-white tracking-tight mb-6">
          Building the <span className="text-red-500">financial engine</span> for modern businesses
        </div>
        <p className="font-inter text-base text-zinc-400 leading-relaxed">
          Join our exclusive early-access waitlist of founders, agencies, and financial operators preparing for the Felixstudio beta launch. Be among the first to experience total control over your corporate spend.
        </p>
      </div>
    </section>
  );
}


