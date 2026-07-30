import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import Home from './pages/Home';
import Features from './pages/Features';
import Compliance from './pages/Compliance';
import About from './pages/About';
import Contact from './pages/Contact';

/* ─────────────────────────────────────────────────────────
   Shared nav config
───────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Home',       to: '/'          },
  { label: 'Features',   to: '/features'  },
  { label: 'Compliance', to: '/compliance'},
  { label: 'About Us',   to: '/about'     },
  { label: 'Contact',    to: '/contact'   },
] as const;

/* ─────────────────────────────────────────────────────────
   Navbar — shared across all pages
───────────────────────────────────────────────────────── */
function Navbar({ setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== '/contact') {
      navigate('/contact');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
      <Link to="/" className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white hover:opacity-80 transition-opacity">
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

      <button
        onClick={handleGetInTouch}
        className="hidden md:inline-flex items-center gap-2 border border-white/25 hover:border-red-500/60 px-6 py-3 text-xs tracking-widest uppercase text-white/80 hover:text-white hover:bg-red-900/20 transition-all duration-200 font-inter"
      >
        Get In Touch <ArrowUpRight className="w-3.5 h-3.5" />
      </button>

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
   Mobile menu — shared
───────────────────────────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    if (pathname !== '/contact') {
      navigate('/contact');
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{ background: 'rgba(13,3,6,0.97)', backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">FELIXSTUDIO</span>
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
            className="font-podium text-4xl sm:text-5xl uppercase text-white hover:text-red-400 transition-all duration-300"
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
          onClick={handleGetInTouch}
          className="mt-6 inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-xs tracking-widest uppercase text-white hover:border-red-400 hover:text-red-400 transition-all duration-300 font-inter"
          style={{
            transitionDelay: `${NAV_ITEMS.length * 80 + 100}ms`,
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Get In Touch <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   App — Router + Layout
───────────────────────────────────────────────────────── */
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/features"   element={<Features />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/about"      element={<About />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
