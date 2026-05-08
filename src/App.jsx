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
  // Estado 1: Para destruir el componente de la intro al final (limpieza de DOM)
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  
  // Estado 2: La "chispa" que arranca el Hero (se dispara antes que el anterior)
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

      <div className="min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative">
        <InteractiveBackground count={70} interactionRadius={150} repelForce={80} />
        
        <Navbar />
        <main>
          {/* Sincronizado con la señal temprana de apertura */}
          <Hero startAnimation={startHero} />
          <StatsTicker /> 
          <BentoGrid />
          <Demo />
        </main>
        <Contact />
      </div>
    </>
  );
}