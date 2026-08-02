import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Features from './pages/Features';
import Compliance from './pages/Compliance';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import WaitlistModal from './components/WaitlistModal';

import { Navbar, GetInTouchButton, MobileMenu } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

/* ─────────────────────────────────────────────────────────
   ScrollToTop — scrolls window to top on route change
───────────────────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* ─────────────────────────────────────────────────────────
   App — Router + Layout
───────────────────────────────────────────────────────── */
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <GetInTouchButton onOpenWaitlist={() => setWaitlistOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onOpenWaitlist={() => setWaitlistOpen(true)} />
      <PageTransition>
        <main className="flex-1 flex flex-col w-full h-full">
          <Routes>
            <Route path="/"           element={<Home onOpenWaitlist={() => setWaitlistOpen(true)} />} />
            <Route path="/features"   element={<Features />} />
            <Route path="/pricing"    element={<Pricing />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about"      element={<About />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="/terms"      element={<Terms />} />
            <Route path="/privacy"    element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/404"        element={<NotFound />} />
            <Route path="*"           element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </PageTransition>
      <Footer />
      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
