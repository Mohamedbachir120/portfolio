
import React from 'react';
import { Translation } from '../types';
import { Download, ChevronRight } from 'lucide-react';
import Me from "./../assets/Mohamed.webp";
import CV from "./../assets/cv.pdf";
interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <p className="text-fuchsia-500 font-bold tracking-[0.3em] uppercase animate-pulse">{t.hero.hello}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {t.hero.name.split(" ").slice(0, 2).join(" ")} <br />
            <span className="text-fuchsia-500">{t.hero.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            {t.hero.title} • {t.hero.experience}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition-all font-bold group" href={CV} download>
              <span>{t.hero.downloadCv}</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-fuchsia-500/30 hover:bg-fuchsia-500/10 transition-all font-bold group" href="#portfolio">
              <span>{t.hero.viewProjects}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Animated Circles */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full animate-spin-slow blur-3xl opacity-20"></div>
            <div className="absolute inset-[-20px] border border-fuchsia-500/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-[-40px] border border-purple-500/10 rounded-full"></div>
            
            {/* Profile Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-500/20 glass shadow-2xl">
              <img 
                src={Me} 
                alt="Mohamed Bachir HADJADJI"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-10 -left-10 glass px-4 py-2 rounded-xl flex items-center space-x-2 animate-bounce">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-bold">FLUTTER</span>
            </div>
            <div className="absolute bottom-10 -right-10 glass px-4 py-2 rounded-xl flex items-center space-x-2 animate-bounce" style={{ animationDelay: '1s' }}>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-xs font-bold">REACT</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
