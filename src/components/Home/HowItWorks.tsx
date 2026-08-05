import { Wallet, CreditCard, Globe } from 'lucide-react';

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

export function HowItWorks() {
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
