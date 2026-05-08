import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const IntroAnimation = ({ onComplete, onOpenDoors }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoContainerRef = useRef(null); // Ahora animamos el contenedor completo

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    // Estado inicial: La tarjeta blanca entra desde un tamaño menor y transparente
    gsap.set(logoContainerRef.current, { opacity: 0, scale: 0.8, y: 20 });

    tl.to(logoContainerRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.2)", // Efecto rebote muy sutil y elegante
    })
    .to(logoContainerRef.current, {
      opacity: 0,
      scale: 1.05,
      y: -20, // Se desvanece subiendo ligeramente
      duration: 0.5,
      ease: "power2.inOut",
    }, "+=1.2") 
    .addLabel("doorsStart", "-=0.2")
    .add(onOpenDoors, "doorsStart") 
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
    >
      <div ref={leftDoorRef} className="absolute left-0 top-0 h-full w-1/2 bg-blue-600 will-change-transform" />
      <div ref={rightDoorRef} className="absolute right-0 top-0 h-full w-1/2 bg-blue-600 will-change-transform" />
      
      {/* LA PLACA PREMIUM: Un contenedor blanco, redondeado, con sombra profunda */}
      <div 
        ref={logoContainerRef} 
        className="relative z-10 flex items-center justify-center bg-white/95 backdrop-blur-md px-10 py-10 md:px-16 md:py-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/50"
      >
        <img 
          src="/logoEntero.png" 
          alt="SmartLot" 
          // Ajustamos un poco el tamaño porque ahora tiene un padding alrededor
          className="w-64 md:w-[28rem] h-auto object-contain" 
        />
      </div>
    </div>
  );
};

export default IntroAnimation;