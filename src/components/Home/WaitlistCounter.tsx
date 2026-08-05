export function WaitlistCounter() {
  return (
    <div className="flex items-center gap-3 mt-8 bg-white/5 border border-white/10 rounded-full py-2.5 px-5 w-fit animate-fade-up-delay-3">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <div className="font-inter text-xs text-zinc-300 uppercase tracking-widest">
        Waitlist is now open
      </div>
    </div>
  );
}
