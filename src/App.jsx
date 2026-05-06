import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Demo from './components/Demo';
import Contact from './components/Contact';
import StatsTicker from './components/StatsTicker';
import InteractiveBackground from './components/InteractiveBackground';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative">
      <InteractiveBackground count={70} interactionRadius={150} repelForce={80} />
      
      <Navbar />
      <main>
        <Hero />
        <StatsTicker /> 
        <BentoGrid />
        <Demo />
      </main>
      <Contact />
    </div>
  );
}