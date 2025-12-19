
import React, { useState } from 'react';
import { Translation, Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  t: Translation;
  isScrolled: boolean;
  toggleLang: () => void;
  lang: Language;
}

const Navbar: React.FC<NavbarProps> = ({ t, isScrolled, toggleLang, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.menu.home, href: "#home" },
    { name: t.menu.about, href: "#about" },
    { name: t.menu.services, href: "#services" },
    { name: t.menu.portfolio, href: "#portfolio" },
    { name: t.menu.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          MBH
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-fuchsia-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 hover:bg-white/5 transition-all"
          >
            <Globe size={16} />
            <span className="text-xs font-bold uppercase">{lang}</span>
          </button>
          <a 
            href="#contact" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-sm font-bold transition-all transform hover:scale-105"
          >
            {t.menu.hireMe}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <button onClick={toggleLang} className="flex items-center space-x-2">
              <Globe size={20} />
              <span className="uppercase font-bold">{lang}</span>
            </button>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full bg-fuchsia-600 font-bold"
            >
              {t.menu.hireMe}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
