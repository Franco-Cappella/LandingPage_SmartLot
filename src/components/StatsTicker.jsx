import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
  { label: "Usuarios activos", value: "+500" },
  { label: "Empresas", value: "+20" },
  { label: "Espacios gestionados", value: "+1000" },
  { label: "Sesiones mensuales", value: "+10k" },
  { label: "Uptime del sistema", value: "99.9%" },
  { label: "Soporte técnico", value: "24/7" },
];

export default function StatsTicker() {
  const tickerRef = useRef();

  useGSAP(() => {
    // Animación de loop infinito
    gsap.to(".ticker-track", {
      xPercent: -50, // Se mueve hasta la mitad (donde empieza la copia)
      duration: 20,  // Ajusta este número para que vaya más rápido o lento
      ease: "none",
      repeat: -1,
    });
  }, { scope: tickerRef });

  return (
    <div ref={tickerRef} className="w-full bg-slate-900 py-8 overflow-hidden border-y border-slate-800">
      <div className="ticker-track flex whitespace-nowrap w-fit">
        
        {/* Renderizamos la lista dos veces para el loop infinito */}
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-12 px-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex items-center gap-6 min-w-[250px] group"
              >
                <span className="text-4xl md:text-5xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-slate-400 uppercase tracking-widest font-semibold leading-tight">
                  {stat.label.split(' ').join('\n')}
                </span>
                {/* Divisor visual entre stats */}
                <div className="h-10 w-[1px] bg-slate-700 ml-12 hidden md:block"></div>
              </div>
            ))}
          </div>
        ))}
        
      </div>
    </div>
  );
}