import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   Shared nav config
───────────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: 'Home',       to: '/'          },
  { label: 'Features',   to: '/features'  },
  { label: 'Pricing',    to: '/pricing'   },
  { label: 'Compliance', to: '/compliance'},
  { label: 'About Us',   to: '/about'     },
  { label: 'Contact',    to: '/contact'   },
] as const;

/* ─────────────────────────────────────────────────────────
   Navbar — shared across all pages
───────────────────────────────────────────────────────── */
export function Navbar({ setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const { pathname } = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
      <Link to="/" className="font-bebas text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white hover:opacity-80 transition-opacity">
        FELIXSTUDIO
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        {NAV_ITEMS.map(({ label, to }) => {
          const isActive = to === pathname || (to === '/' && pathname === '/');
          return (
            <Link
              key={label}
              to={to}
              className={`font-inter text-sm tracking-widest uppercase transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(true)} className="md:hidden flex flex-col space-y-1.5" aria-label="Open menu">
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-4 h-0.5 bg-white" />
      </button>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────
   Fixed 'Get In Touch' Button — always visible in top-right
───────────────────────────────────────────────────────── */
export function GetInTouchButton({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onOpenWaitlist();
      }}
      className="fixed top-14 right-6 z-50 hidden md:inline-flex items-center gap-2 border border-white/25 hover:border-red-500/60 px-5 py-2.5 text-xs tracking-widest uppercase text-white/80 hover:text-white hover:bg-red-900/20 transition-all duration-200 font-inter backdrop-blur-sm bg-black/20"
    >
      Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   Mobile menu — shared
───────────────────────────────────────────────────────── */
export function MobileMenu({ open, onClose, onOpenWaitlist }: { open: boolean; onClose: () => void; onOpenWaitlist: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{ background: 'rgba(13,3,6,0.97)', backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-bebas text-2xl font-bold uppercase tracking-wider text-white">FELIXSTUDIO</span>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors" aria-label="Close menu">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-4">
        {NAV_ITEMS.map(({ label, to }, i) => (
          <Link
            key={label}
            to={to}
            onClick={onClose}
            className="font-bebas text-4xl sm:text-5xl uppercase text-white hover:text-red-400 transition-all duration-300"
            style={{
              transitionDelay: `${i * 80 + 100}ms`,
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            onClose();
            onOpenWaitlist();
          }}
          className="mt-6 inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-xs tracking-widest uppercase text-white hover:border-red-400 hover:text-red-400 transition-all duration-300 font-inter"
          style={{
            transitionDelay: `${NAV_ITEMS.length * 80 + 100}ms`,
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Apply Now <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
