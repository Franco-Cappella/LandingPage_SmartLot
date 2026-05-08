import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const container = useRef();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%", // Arranca un poco más abajo porque redujimos el espacio
      }
    });

    tl.fromTo(".demo-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    )
    .fromTo(".demo-wrapper", 
      { y: 80, scale: 0.9, rotationX: 10, opacity: 0 },
      { 
        y: 0, scale: 1, rotationX: 0, opacity: 1, 
        duration: 1.4, ease: "expo.out", 
        transformPerspective: 1000 
      }, 
      "-=0.6"
    );

  }, { scope: container });

  return (
    // Ajuste de padding: pt-12 (arriba) para pegarlo más al BentoGrid y pb-32 (abajo) para el final
    <section id="demo" ref={container} className="relative z-10 pt-12 pb-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="mb-16">
          <h2 className="demo-header text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Experimentá el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">futuro hoy</span>
          </h2>
          <p className="demo-header text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Interactuá con nuestro prototipo funcional y descubrí lo fácil que es gestionar espacios con SmartLot.
          </p>
        </div>

        <div className="perspective-[1000px]">
          <div className="demo-wrapper bg-white/40 backdrop-blur-2xl p-3 md:p-4 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60">
            <div className="bg-white rounded-[1.8rem] overflow-hidden shadow-inner border border-slate-100">
              
              <div className="h-12 bg-[#F8F9FA] border-b border-slate-200 flex items-center px-5 gap-2 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white border border-slate-200 text-slate-400 text-xs font-medium py-1 px-4 rounded-md flex items-center gap-2 shadow-sm">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.smartlot.com
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 relative h-[600px] md:h-[750px] overflow-hidden">
                
                <div 
                  className={`absolute inset-0 z-20 bg-white p-6 md:p-10 flex flex-col gap-6 transition-opacity duration-700 ease-in-out ${
                    iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-center w-full mb-4">
                    <div className="h-10 w-48 bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 bg-slate-200 rounded-full animate-pulse"></div>
                      <div className="h-10 w-10 bg-slate-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 h-full w-full">
                    <div className="hidden md:flex flex-col gap-4 w-1/4 h-full border-r border-slate-100 pr-6">
                      <div className="h-12 w-full bg-slate-100 rounded-lg animate-pulse"></div>
                      <div className="h-12 w-full bg-slate-100 rounded-lg animate-pulse"></div>
                      <div className="h-12 w-full bg-slate-100 rounded-lg animate-pulse"></div>
                      <div className="h-12 w-full bg-slate-100 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="flex flex-col gap-6 w-full md:w-3/4 h-full">
                      <div className="flex gap-4 w-full h-32">
                        <div className="flex-1 bg-slate-100 rounded-xl animate-pulse"></div>
                        <div className="flex-1 bg-slate-100 rounded-xl animate-pulse"></div>
                        <div className="flex-1 bg-slate-100 rounded-xl animate-pulse hidden md:block"></div>
                      </div>
                      <div className="w-full flex-1 bg-slate-100 rounded-xl animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <iframe
                  title="SmartLot Demo"
                  onLoad={() => setIframeLoaded(true)} 
                  className={`w-full h-full relative z-10 bg-transparent transition-opacity duration-1000 ${
                    iframeLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UpGFc4YLqAynUEyO13Yvxt/SmartLot?node-id=0-1&t=ZAvxKfo2yr6mtDhY-1"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}