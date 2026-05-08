import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { LayoutGrid, Cpu, Users, Smartphone, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    title: "Tecnología de Asignación", 
    icon: <Cpu className="w-6 h-6" />, 
    desc: "Optimización dinámica que aprende de los flujos de tu empresa para maximizar la ocupación.", 
    size: "md:col-span-2 md:row-span-2",
    iconBg: "bg-blue-100 text-blue-600",
    badge: "Core"
  },
  { 
    title: "Dashboard Analítico", 
    icon: <LayoutGrid className="w-6 h-6" />, 
    desc: "Métricas en tiempo real, reportes de uso y gestión de usuarios en un solo lugar.", 
    size: "md:col-span-2 md:row-span-1",
    iconBg: "bg-indigo-100 text-indigo-600",
    badge: "Admin"
  },
  { 
    title: "Acceso Móvil", 
    icon: <Smartphone className="w-6 h-6" />, 
    desc: "Entrada ágil y sin contacto desde el celular.", 
    size: "md:col-span-1 md:row-span-1",
    iconBg: "bg-emerald-100 text-emerald-600",
    badge: null
  },
  { 
    title: "Seguridad", 
    icon: <ShieldCheck className="w-6 h-6" />, 
    desc: "Control estricto de patentes y permisos.", 
    size: "md:col-span-1 md:row-span-1",
    iconBg: "bg-slate-200 text-slate-700",
    badge: null
  }
];

export default function BentoGrid() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%", 
      }
    });

    tl.fromTo(".bento-header-text", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
    )
    .fromTo(".bento-card", 
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 1.2, ease: "expo.out" }, 
      "-=0.6"
    );
  }, { scope: container });

  return (
    // Ajuste de padding: pt-32 (arriba) y pb-12 (abajo) para acercarlo a la demo
    <section ref={container} className="relative z-10 pt-32 pb-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="mb-20 text-center relative z-20 flex flex-col items-center">
          {/* CAMBIO: Se eliminó el fondo, bordes y backdrop-blur. Vuelve al texto flotante minimalista */}
          <span className="bento-header-text text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 block">
            Ecosistema Integral
          </span>
          <h2 className="bento-header-text text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Todo el control en un <br className="hidden md:block" /> solo lugar.
          </h2>
          <p className="bento-header-text text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Una plataforma diseñada para eliminar el caos y modernizar la gestión de tus espacios, sin complicaciones de hardware.
          </p>
        </div>

        {/* Grilla Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`
                bento-card group relative ${f.size} 
                overflow-hidden bg-white/60 backdrop-blur-2xl
                p-8 rounded-[2rem] flex flex-col justify-between 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] 
                border border-white/80 border-b-white/40 border-r-white/40
                transition-all duration-500 hover:-translate-y-2
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start relative z-10">
                <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  {f.icon}
                </div>
                {f.badge && (
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/90 text-slate-700 border border-slate-200/50 shadow-sm">
                    {f.badge}
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}