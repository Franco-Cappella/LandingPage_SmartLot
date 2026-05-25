import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(navRef.current, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(navRef.current, { autoAlpha: 1 });
    });
  });

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src="/logo.png"
            alt="SmartLot Logo"
            className="h-12 md:h-14 w-auto drop-shadow-sm transition-all duration-300 group-hover:brightness-110"
          />
          <span className="text-2xl md:text-3xl font-extrabold text-brand-warm tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            SmartLot
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center font-medium text-brand-muted">
          <a href="#solucion" className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full hover:text-brand-warm focus-visible:text-brand-warm transition-colors duration-300">
            Solución
          </a>
          <a href="#demo" className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full hover:text-brand-warm focus-visible:text-brand-warm transition-colors duration-300">
            Prototipo
          </a>
          <button className="px-6 py-2.5 bg-brand-navy text-white rounded-lg hover:bg-brand-blue focus-visible:bg-brand-blue transition-all duration-300 font-semibold shadow-md hover:shadow-lg active:scale-[0.97]">
            Solicitar Demo
          </button>
        </nav>

      </div>
    </header>
  );
}
