import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Register() {
  const container = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".register-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.15
      });
      gsap.from(".register-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.4
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([".register-card", ".register-fade"], { opacity: 1, y: 0 });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-[#F7F4EF] relative overflow-hidden flex items-center justify-center px-4 py-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0C1E3F] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />

      <div className="register-card w-full max-w-md glass-card p-10 md:p-12 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="flex items-center gap-2.5 mb-6 group">
            <img
              src="/logo.png"
              alt="SmartLot"
              className="h-10 w-auto transition-all duration-300 group-hover:brightness-110"
            />
            <span className="text-2xl font-extrabold text-[#0E121B] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              SmartLot
            </span>
          </Link>
          <h1 className="register-fade text-3xl md:text-4xl font-extrabold text-[#0E121B] text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Crear Cuenta
          </h1>
          <p className="register-fade text-[#5A6B8A] mt-2 text-center">
            Gestioná tu estacionamiento con IA
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="register-fade flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5A6B8A]" style={{ fontFamily: 'var(--font-body)' }}>
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="w-full px-5 py-3.5 bg-white/70 border border-[#0C1E3F]/10 rounded-[16px] text-[#0E121B] text-base placeholder:text-[#5A6B8A]/50 focus:outline-none focus:border-[#2A5CBF] focus:ring-2 focus:ring-[#2A5CBF]/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>

          <div className="register-fade flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5A6B8A]" style={{ fontFamily: 'var(--font-body)' }}>
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="w-full px-5 py-3.5 bg-white/70 border border-[#0C1E3F]/10 rounded-[16px] text-[#0E121B] text-base placeholder:text-[#5A6B8A]/50 focus:outline-none focus:border-[#2A5CBF] focus:ring-2 focus:ring-[#2A5CBF]/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>

          <div className="register-fade flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5A6B8A]" style={{ fontFamily: 'var(--font-body)' }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3.5 bg-white/70 border border-[#0C1E3F]/10 rounded-[16px] text-[#0E121B] text-base placeholder:text-[#5A6B8A]/50 focus:outline-none focus:border-[#2A5CBF] focus:ring-2 focus:ring-[#2A5CBF]/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>

          <div className="register-fade flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5A6B8A]" style={{ fontFamily: 'var(--font-body)' }}>
              Confirmar contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3.5 bg-white/70 border border-[#0C1E3F]/10 rounded-[16px] text-[#0E121B] text-base placeholder:text-[#5A6B8A]/50 focus:outline-none focus:border-[#2A5CBF] focus:ring-2 focus:ring-[#2A5CBF]/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            />
          </div>

          <button
            type="submit"
            className="register-fade w-full mt-2 px-8 py-4 bg-[#2A5CBF] text-white rounded-[16px] font-bold text-lg hover:bg-[#0C1E3F] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#2A5CBF]/20 hover:shadow-[#0C1E3F]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFCF9]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Crear Cuenta
          </button>
        </form>

        <p className="register-fade mt-8 text-center text-sm text-[#5A6B8A]">
          ¿Ya tenés cuenta?{' '}
          <Link to="/login" className="text-[#2A5CBF] font-semibold hover:text-[#0C1E3F] transition-colors duration-300 focus-visible:outline-none focus-visible:underline">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
