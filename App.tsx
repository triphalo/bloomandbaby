
import React, { useEffect, useState } from 'react';
import BloomCard from './components/BloomCard';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isFaqPage = pathname === '/faq';
  const isAboutPage = pathname === '/about';

  useEffect(() => {
    if (pathname === '/') {
      setShowWelcomePopup(true);
    } else {
      setShowWelcomePopup(false);
    }
  }, [pathname]);

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
        {isFaqPage ? <FAQPage /> : isAboutPage ? <AboutPage /> : <BloomCard />}
      </main>

      {showWelcomePopup && !isFaqPage && !isAboutPage && (
        <div
          className="fixed inset-0 z-[60] bg-black/55 flex items-center justify-center px-6"
          onClick={() => setShowWelcomePopup(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-xl border-4 border-[#2f4a38] bg-[#7d886d] text-[#f7f4ec] shadow-2xl p-8 md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <svg aria-hidden="true" viewBox="0 0 64 64" className="absolute left-2 top-2 h-8 w-8 text-[#2f4a38]">
              <path d="M10 52c20-2 36-18 42-42C32 12 12 32 10 52Z" fill="currentColor" />
              <path d="M16 47c13-2 23-12 25-25-13 2-23 12-25 25Z" fill="#7d886d" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 64 64" className="absolute right-2 top-2 h-8 w-8 rotate-90 text-[#2f4a38]">
              <path d="M10 52c20-2 36-18 42-42C32 12 12 32 10 52Z" fill="currentColor" />
              <path d="M16 47c13-2 23-12 25-25-13 2-23 12-25 25Z" fill="#7d886d" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 64 64" className="absolute bottom-2 left-2 h-8 w-8 -rotate-90 text-[#2f4a38]">
              <path d="M10 52c20-2 36-18 42-42C32 12 12 32 10 52Z" fill="currentColor" />
              <path d="M16 47c13-2 23-12 25-25-13 2-23 12-25 25Z" fill="#7d886d" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 64 64" className="absolute bottom-2 right-2 h-8 w-8 rotate-180 text-[#2f4a38]">
              <path d="M10 52c20-2 36-18 42-42C32 12 12 32 10 52Z" fill="currentColor" />
              <path d="M16 47c13-2 23-12 25-25-13 2-23 12-25 25Z" fill="#7d886d" />
            </svg>
            <p className="font-editorial text-4xl md:text-5xl italic">Welcome to Bloom & Baby</p>
            <p className="mt-4 text-center text-lg leading-relaxed">
              To celebrate the Spring Equinox, join us for a
              <span className="mt-2 block text-center font-editorial text-4xl leading-tight text-[#2f4a38] md:text-5xl">
                <span className="block">Wild Garlic Walk <span className="italic">&</span></span>
                <span className="block">Free Taster Session</span>
              </span>
              <span className="mt-2 block text-center font-editorial text-2xl italic md:text-3xl">March 23rd</span>
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://BloomandBabyWildGarlicWalk.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#1f3527]/90 bg-[#2f4a38] px-5 py-2 font-editorial text-2xl italic text-[#f7f4ec] transition hover:bg-[#254031]"
              >
                Reserve your place here.
              </a>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowWelcomePopup(false)}
                className="inline-flex items-center justify-center border border-stone-200/70 px-3 py-1.5 font-editorial text-lg italic text-[#f7f4ec] transition hover:bg-white/10"
              >
                Continue to site
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
