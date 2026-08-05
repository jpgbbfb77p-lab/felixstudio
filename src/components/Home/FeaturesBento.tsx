import { Sliders, ShieldAlert, Activity } from 'lucide-react';

export function FeaturesBento() {
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
