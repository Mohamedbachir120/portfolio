
import React from 'react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <p className="text-slate-500 text-sm">
            © {currentYear} Mohamed Bachir HADJADJI. {t.footer.rights}.
          </p>
        
        </div>

        <div className="flex space-x-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <a href="#home" className="hover:text-fuchsia-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-fuchsia-500 transition-colors">About</a>
          <a href="#services" className="hover:text-fuchsia-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-fuchsia-500 transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
