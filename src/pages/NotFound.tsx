import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: 'linear-gradient(160deg,#110307 0%,#0C0306 60%,#0F0308 100%)' }}>
      <Helmet>
        <title>404 — Page Not Found | Felixstudio</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'64px 64px', zIndex:0 }} />

      {/* Ambient orb */}
      <div className="fixed pointer-events-none" style={{ zIndex:0, borderRadius:'50%', width:600, height:600, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(circle,rgba(185,28,28,0.12) 0%,transparent 70%)' }} />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 rounded-full border border-red-800/40 bg-red-950/20 flex items-center justify-center mb-8 animate-fade-up">
          <AlertTriangle className="w-10 h-10 text-red-500/70" />
        </div>

        <h1 className="font-bebas text-7xl sm:text-8xl lg:text-9xl uppercase text-white leading-none tracking-tight animate-fade-up-delay-1">
          404
        </h1>

        <p className="mt-4 font-inter text-lg text-white/50 animate-fade-up-delay-2">
          This page doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-10 group inline-flex items-center gap-3 border border-white/20 hover:border-red-500/50 hover:bg-red-950/20 px-8 py-4 text-xs tracking-widest uppercase text-white/70 hover:text-white transition-all duration-300 font-inter animate-fade-up-delay-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
