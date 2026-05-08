import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Demo from './components/Demo';
import Contact from './components/Contact';
import StatsTicker from './components/StatsTicker';
import InteractiveBackground from './components/InteractiveBackground';
import IntroAnimation from './components/IntroAnimation';

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [startHero, setStartHero] = useState(false);

  useEffect(() => {
    if (!isIntroComplete) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isIntroComplete]);

  return (
    <>
      {!isIntroComplete && (
        <IntroAnimation 
          onComplete={() => setIsIntroComplete(true)} 
          onOpenDoors={() => setStartHero(true)} 
        />
      )}

      {/* overflow-x-hidden es CLAVE aquí para evitar scrolls horizontales accidentales */}
      <div className="min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative overflow-x-hidden">
        
        {/* Fondo interactivo */}
        <InteractiveBackground count={70} interactionRadius={150} repelForce={80} />
        
        <Navbar />
        
        {/* Contenido Principal */}
        <main className="relative z-10">
          <Hero startAnimation={startHero} />
          
          {/* StatsTicker se mantiene estático, anclando la vista */}
          <StatsTicker /> 
          
          <BentoGrid />
          <Demo />
        </main>
        
        <Contact />
      </div>
    </>
  );
}