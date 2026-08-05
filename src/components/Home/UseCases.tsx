import { Megaphone, MonitorPlay, Globe2 } from 'lucide-react';

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

export function UseCases() {
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
