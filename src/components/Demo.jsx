import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".demo-wrapper", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", 
      },
      y: 50,
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
      <section id="demo" ref={container} className="relative z-10 py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Experimentá el futuro hoy
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Interactuá con nuestro prototipo funcional y descubrí lo fácil que es gestionar espacios con SmartLot.
        </p>

        {/* Contenedor tipo "Ventana de navegador" */}
        <div className="demo-wrapper bg-white/60 backdrop-blur-xl p-2 rounded-[2rem] shadow-2xl border border-white/50">
          <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-inner">
            {/* Cabecera del mockup */}
            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* Figma Embed */}
            <iframe
              title="SmartLot Demo"
              className="w-full h-[650px]"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UpGFc4YLqAynUEyO13Yvxt/SmartLot?node-id=0-1&t=ZAvxKfo2yr6mtDhY-1"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}