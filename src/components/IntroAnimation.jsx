import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const IntroAnimation = ({ onComplete, onOpenDoors }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    gsap.set(logoRef.current, { opacity: 0, scale: 0.8, filter: "blur(10px)" });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "expo.out",
    })
    .to(logoRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.inOut",
    }, "+=1.2") 
    // Creamos una etiqueta de tiempo ("doorsStart") para sincronizar la señal y la animación
    .addLabel("doorsStart", "-=0.2")
    // Disparamos la función que avisa al Hero en este milisegundo exacto
    .add(onOpenDoors, "doorsStart") 
    // Las puertas se abren sincronizadas con la señal
    .to([leftDoorRef.current, rightDoorRef.current], {
      xPercent: (i) => (i === 0 ? -100 : 100),
      duration: 1.4,
      ease: "expo.inOut",
    }, "doorsStart");

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none"
      role="presentation"
      aria-hidden="true"
    >
      <div ref={leftDoorRef} className="absolute left-0 top-0 h-full w-1/2 bg-blue-600 will-change-transform" />
      <div ref={rightDoorRef} className="absolute right-0 top-0 h-full w-1/2 bg-blue-600 will-change-transform" />
      
      <div ref={logoRef} className="relative z-10">
        <img 
          src="/logoEntero.png" 
          alt="SmartLot" 
          className="w-80 md:w-[32rem] h-auto object-contain drop-shadow-2xl" 
        />
      </div>
    </div>
  );
};

export default IntroAnimation;