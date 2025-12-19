
import React, { useState, useEffect, useMemo } from 'react';
import { en, fr } from './translations';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useMemo(() => (lang === 'en' ? en : fr), [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#0a051a] text-white selection:bg-fuchsia-500 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar t={t} isScrolled={isScrolled} toggleLang={toggleLang} lang={lang} />
        
        <main>
          <Hero t={t} />
          <About t={t} />
          <Timeline t={t} />
          <Services t={t} />
          <Skills t={t} />
          <Portfolio t={t} />
          <Contact t={t} />
        </main>

        <Footer t={t} />
      </div>
    </div>
  );
};

export default App;
