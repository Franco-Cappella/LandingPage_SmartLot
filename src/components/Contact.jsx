import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef();
  const pathRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    // Entrada suave y elegante
    tl.fromTo(".cta-box", 
      { y: 40, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(".cta-content", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.8"
    );

    // Animación del Rayo de Luz (Border Beam)
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 5, // Un poco más lento para que sea elegante en blanco
      ease: "none",
      repeat: -1,
    });

  }, { scope: container });

  return (
    // Footer clarito y coherente con el fondo interactivo
    <footer ref={container} className="bg-transparent pt-24 pb-12 relative overflow-hidden">
      
      {/* Resplandor azul muy tenue para dar profundidad al blanco */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* CAJA CTA - GLASSMORPHISM CLARO */}
        <div className="cta-box relative rounded-[2.5rem] p-[1px] mb-24 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
          
          {/* SVG del Borde Animado */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect
              ref={pathRef}
              x="0" y="0" width="100" height="100"
              rx="8"
              fill="none"
              stroke="url(#blue-gradient-light)"
              strokeWidth="0.6" // Un poquito más grueso para resaltar en blanco
              strokeDasharray="25 100"
              strokeDashoffset="125"
            />
            
            <defs>
              <linearGradient id="blue-gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Interior de la tarjeta en Blanco Cristal */}
          <div className="relative z-10 w-full h-full bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-20 text-center border border-white/80">
            
            {/* Decoración de fondo sutil */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="cta-content text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
                ¿Listo para modernizar <br className="hidden md:block"/> tu estacionamiento?
              </h2>
              
              <p className="cta-content text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Dejá de perder tiempo gestionando planillas. Implementá SmartLot hoy mismo y mejorá la experiencia de tu equipo.
              </p>
              
              <button className="cta-content group flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 active:scale-95 shadow-xl shadow-blue-500/20">
                <span>Contactar a Ventas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Base con Logo e Info */}
        <div className="footer-base flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-12 gap-8">
          
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              <img
                src="/logo.png"
                alt="SmartLot Logo"
                className="relative h-10 md:h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
              SmartLot
            </span>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} SmartLot. El estacionamiento del futuro.
            </p>
            <p className="text-slate-400 text-xs">
              Digitalización de espacios B2B sin hardware.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}