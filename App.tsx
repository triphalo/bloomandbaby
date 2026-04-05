
import React, { useEffect, useState } from 'react';
import BloomCard from './components/BloomCard';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';
import OrderCompletePage from './components/OrderCompletePage';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isFaqPage = pathname === '/faq';
  const isAboutPage = pathname === '/about';
  const isOrderCompletePage = pathname === '/order-complete';

  useEffect(() => {
    if (!menuOpen) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [menuOpen]);

  const backgroundImageUrl = isFaqPage
    ? '/faq-background.jpeg'
    : isAboutPage
      ? '/Bouquets.jpeg'
      : '/Gentle%20Gardening%20Image%20Jan%2019%202026.jpeg';

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Full-Bleed Background Overlaying the whole viewport */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {/* Lighter warm overlay for less visual heaviness */}
        <div className="absolute inset-0 bg-[#4b3f2e] opacity-[0.34] mix-blend-multiply"></div>
        
        {/* Organic Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.14] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23000000'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Softer vignette plus vertical reading lane */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, rgba(252, 248, 239, 0.12) 0%, rgba(29, 23, 16, 0.22) 45%, rgba(26, 20, 14, 0.30) 100%),
              radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.20) 78%, rgba(0, 0, 0, 0.38) 100%),
              radial-gradient(ellipse at top, rgba(0, 0, 0, 0.24) 0%, transparent 56%),
              radial-gradient(ellipse at bottom, rgba(0, 0, 0, 0.30) 0%, transparent 56%)
            `
          }}
        ></div>
      </div>

      {!isFaqPage && !isAboutPage && (
        <>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/70 bg-[#f2e8d8]/25 text-[#f8f1e6] transition hover:bg-[#f2e8d8]/35"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-[#f8f1e6]"></span>
              <span className="block h-0.5 w-6 bg-[#f8f1e6]"></span>
              <span className="block h-0.5 w-6 bg-[#f8f1e6]"></span>
            </div>
          </button>

          {menuOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/35"
              onClick={() => setMenuOpen(false)}
              role="presentation"
            >
              <nav
                className="absolute top-0 right-0 h-full w-[88%] max-w-sm border-l border-[#b39b79]/40 bg-[#f5ecde] p-8 text-[#2f271f] shadow-2xl"
                onClick={(event) => event.stopPropagation()}
                aria-label="Main navigation"
              >
                <div className="mb-10 flex items-center justify-between">
                  <p className="font-editorial text-3xl italic">Menu</p>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-[#9f8663]/40 px-3 py-1 text-sm hover:bg-[#e7d8bf]/45"
                  >
                    Close
                  </button>
                </div>
                <div className="space-y-6 text-2xl font-editorial">
                  <a href="/" className="block border-b border-[#b39b79]/30 pb-2 hover:text-[#1e1812]">
                    Home
                  </a>
                  <a href="/faq" className="block border-b border-[#b39b79]/30 pb-2 hover:text-[#1e1812]">
                    FAQ
                  </a>
                  <a href="/about" className="block border-b border-[#b39b79]/30 pb-2 hover:text-[#1e1812]">
                    About
                  </a>
                </div>
              </nav>
            </div>
          )}
        </>
      )}

      <main className="w-full relative z-10">
        {isFaqPage ? <FAQPage /> : isAboutPage ? <AboutPage /> : isOrderCompletePage ? <OrderCompletePage /> : <BloomCard />}
      </main>

    </div>
  );
};

export default App;
