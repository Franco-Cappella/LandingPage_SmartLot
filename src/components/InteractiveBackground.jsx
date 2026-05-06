import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function InteractiveBackground({ 
  count = 45, // Densidad de partículas
  interactionRadius = 120, // Distancia en px para que el mouse las afecte
  repelForce = 60 // Qué tan lejos saltan al acercarse el cursor
}) {
  const containerRef = useRef();
  const particlesRef = useRef([]);

  useGSAP((context, contextSafe) => {
    // 1. Accesibilidad: Detectar preferencias del usuario[cite: 6]
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 2. Animación de Flotación Base (Aplicada al Wrapper)
      const wrappers = gsap.utils.toArray('.particle-wrapper');
      wrappers.forEach((wrapper) => {
        gsap.to(wrapper, {
          y: `-=${gsap.utils.random(100, 200)}`,
          x: `+=${gsap.utils.random(-40, 40)}`,
          duration: gsap.utils.random(15, 30),
          ease: "none",
          repeat: -1,
          yoyo: true
        });
      });

      // 3. Animación Reactiva al Mouse usando quickTo (Aplicada a la Partícula Interna)[cite: 5]
      const xTos = particlesRef.current.map(el => gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" }));
      const yTos = particlesRef.current.map(el => gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" }));

      const onMouseMove = contextSafe((e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        particlesRef.current.forEach((el, index) => {
          if (!el) return;
          // Leemos la posición del elemento. GSAP encola las escrituras, evitando el Layout Thrashing[cite: 5]
          const rect = el.getBoundingClientRect();
          const elX = rect.left + rect.width / 2;
          const elY = rect.top + rect.height / 2;

          const distX = elX - mouseX;
          const distY = elY - mouseY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          // Lógica de repulsión
          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const moveX = (distX / distance) * force * repelForce;
            const moveY = (distY / distance) * force * repelForce;

            xTos[index](moveX);
            yTos[index](moveY);
          } else {
            // Si el mouse se aleja, la partícula vuelve a su centro natural
            xTos[index](0);
            yTos[index](0);
          }
        });
      });

      window.addEventListener('mousemove', onMouseMove);
      
      // Limpieza de eventos al desmontar[cite: 4]
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    });

    // Fallback estático para usuarios sensibles al movimiento
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set('.particle', { opacity: 0.2 });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      {/* Malla de gradiente sutil para profundidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="particle-wrapper absolute"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        >
          <div
            ref={el => particlesRef.current[i] = el}
            // Usamos will-change para advertir al navegador de la aceleración por hardware[cite: 5]
            className="particle w-1.5 h-1.5 bg-blue-500 rounded-full opacity-30 will-change-transform"
            style={{ transform: `scale(${Math.random() * 1.5 + 0.5})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}