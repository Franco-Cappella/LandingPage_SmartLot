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
  // Estado 1: Destruye el componente de la intro para liberar memoria
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  
  // Estado 2: Avisa al Hero que las puertas ya se están abriendo
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
          onOpenDoors={() => setStartHero(true)} // <-- Nueva señal de arranque temprano
        />
      )}

      <div className="min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative">
        <InteractiveBackground count={70} interactionRadius={150} repelForce={80} />
        
        <Navbar />
        <main>
          {/* El Hero ahora escucha la señal temprana, no la final */}
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