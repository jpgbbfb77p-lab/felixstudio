export function SocialProof() {
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
