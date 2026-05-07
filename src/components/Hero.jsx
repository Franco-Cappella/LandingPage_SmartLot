import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero({ startAnimation }) { 
  const container = useRef();

  useGSAP(() => {
    if (!startAnimation) return;

    // Agregamos un delay de 0.4s. Como las puertas tardan 1.4s en abrirse, 
    // esto asegura que haya un "hueco" visual en el medio antes de que los textos suban.
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" },
      delay: 0.4 
    });
    
    // Aumenté las duraciones en ~0.4s cada una para que la animación sea más "lenta" y dramática
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 1.2 })
      .from(".word", { 
        y: 100, 
        rotateX: -45, 
        opacity: 0, 
        duration: 1.4, // Era 1
        stagger: 0.25 // Ligeramente más pausado entre palabras
      }, "-=0.6")
      .from(".hero-p", { opacity: 0, x: -20, duration: 1.2 }, "-=0.8")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=1")
      .from(".hero-logo-container", { x: 100, opacity: 0, duration: 1.6 }, "-=1.2");

    gsap.to(".floating-logo", {
      y: "-=14",
      duration: 1.66,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

  }, { 
    scope: container,
    dependencies: [startAnimation] 
  });

  return (
    <section ref={container} className="relative pt-32 pb-12 overflow-hidden bg-transparent min-h-[75vh] flex items-center z-10">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left relative z-20">
            <span className="hero-badge inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-blue-100">
              SmartLot Prototype
            </span>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-none mb-8">
              <div className="overflow-hidden py-1"><span className="word inline-block">Gestioná.</span></div>
              <div className="overflow-hidden py-1"><span className="word inline-block">Optimizá.</span></div>
              <div className="overflow-hidden py-1"><span className="word inline-block text-blue-600">Escalá.</span></div>
            </h1>
            
            <p className="hero-p text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
              La plataforma SaaS que redefine el control de accesos y estacionamientos corporativos con IA.
            </p>
            
            <button className="hero-btn px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl active:scale-95">
              Solicitar Demo Gratis
            </button>
          </div>

          <div className="hero-logo-container relative flex justify-center lg:justify-end z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-[80px] opacity-40 -z-10"></div>
            <img src="/logoEntero.png" alt="SmartLot Dashboard" className="floating-logo w-full max-w-[500px] h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
}