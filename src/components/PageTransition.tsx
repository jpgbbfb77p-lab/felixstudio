import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────
   Page Transition Wrapper
───────────────────────────────────────────────────────── */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      
      // Short delay for exit, then swap content and animate in
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 150); // Matches the fade out duration

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      className="flex-1 flex flex-col w-full"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 150ms ease-in-out, transform 150ms ease-in-out'
      }}
    >
      {/* We use a key based on pathname so React fully remounts the children, ensuring 
          any internal initial animations (like animate-fade-up on Hero) re-run perfectly. */}
      <div key={displayLocation.pathname} className="flex-1 flex flex-col w-full">
        {children}
      </div>
    </div>
  );
}
