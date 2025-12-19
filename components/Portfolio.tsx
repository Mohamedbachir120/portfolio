import React, { useState } from 'react';
import { Translation } from '../types';
import { Layout, Smartphone } from 'lucide-react';

// Assets
import DoctymMobile from "./../assets/doctymMobile.webp";
import KhdemnaMobile from "./../assets/Khdemna.webp";
import Inventaire from "./../assets/inv_mob.webp";
import Rekba from "./../assets/rekba.webp";
import influenceContact from "./../assets/influenceContact2.webp";
import KhdemnaDash from "./../assets/khdemna_landing.webp";
import RaniKhadamDash from "./../assets/ranikhadam_landing.webp";
import Doctym from "./../assets/Doctym.webp";
import Zimail from "./../assets/zimail.webp";
import Zoumi from "./../assets/zoumi.webp";
import usthbElite from "./../assets/doc-2.webp";
import DbManagement from "./../assets/DB Mgmt.webp";
import BBC from "./../assets/BBC.webp";
import Koudami from "./../assets/Koudami2.webp";

interface PortfolioProps {
  t: Translation;
}

const Portfolio: React.FC<PortfolioProps> = ({ t }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const mobileProjects = [
    { id: 1, title: "Doctym", desc: t.portfolio.projects.doctym, img: DoctymMobile, tech: ["Flutter", "Laravel", "React", "Mysql"] },
    { id: 2, title: "Khdemna", desc: t.portfolio.projects.khdemna, img: KhdemnaMobile, tech: ["Flutter", "BLoC"] },
    { id: 3, title: "Inventaire", desc: t.portfolio.projects.inventory, img: Inventaire, tech: ["Flutter", "Riverpod"] },
    { id: 4, title: "Rekba", desc: t.portfolio.projects.rekba, img: Rekba, tech: ["Flutter", "Node.js"] },
  ];

  const webProjects = [
    { id: 5, title: "Influence Contact", desc: t.portfolio.projects.influence, img: influenceContact, tech: ["React", "TypeScript", "Tailwind", "Express", "PostgreSQL"] },
    { id: 6, title: "Khdemna Dashboard", desc: t.portfolio.projects.khdemnaDash, img: KhdemnaDash, tech: ["React", "ExpressJS", "MySQL", "Google Maps"] },
    { id: 7, title: "Rani Khadam", desc: t.portfolio.projects.raniKhadam, img: RaniKhadamDash, tech: ["React", "ExpressJS", "MySQL", "Google Maps"] },
    { id: 8, title: "Doctym Web", desc: t.portfolio.projects.doctymWeb, img: Doctym, tech: ["React", "Redux", "Laravel", "MySQL", "Google Maps"] },
    { id: 9, title: "CRM Zimail", desc: t.portfolio.projects.zimail, img: Zimail, tech: ["Laravel", "MySQL"] },
    { id: 10, title: "Zoumi Visio", desc: t.portfolio.projects.zoumi, img: Zoumi, tech: ["React", "Laravel", "MySQL"] },
    { id: 11, title: "DB Manager", desc: t.portfolio.projects.dbMonitor, img: DbManagement, tech: ["React", "Laravel", "MySQL"] },
    { id: 12, title: "USTHB Portal", desc: t.portfolio.projects.usthb, img: usthbElite, tech: ["Django", "PostgreSQL"] },
    { id: 13, title: "Koudami", desc: t.portfolio.projects.koudami, img: Koudami, tech: ["Laravel", "MySQL", "Google Maps"] },
    { id: 14, title: "BBC E-Learning", desc: t.portfolio.projects.bbc, img: BBC, tech: ["Laravel", "PostgreSQL", "Google Maps"] },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a051a]/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.portfolio.title}</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full mb-8"></div>
          
          {/* Filters */}
          <div className="flex justify-center space-x-4">
            {(['all', 'web', 'mobile'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === f 
                    ? 'bg-fuchsia-600 text-white' 
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {t.portfolio.filters[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Section */}
        {(filter === 'all' || filter === 'mobile') && (
          <div className="mb-20">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-fuchsia-500/10 text-fuchsia-400 rounded-xl">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t.portfolio.mobileProjects}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mobileProjects.map((project) => (
                <div key={project.id} className="group relative rounded-3xl overflow-hidden aspect-[10/21] shadow-xl">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="text-xs text-slate-300 line-clamp-3 mt-1">{project.desc}</p>
                    <span className="text-xs font-bold text-fuchsia-400 mt-2 bg-fuchsia-400/10 px-2 py-1 rounded inline-block w-fit uppercase">Flutter</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Web Section */}
        {(filter === 'all' || filter === 'web') && (
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Layout size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t.portfolio.webProjects}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {webProjects.map((project) => (
                <div key={project.id} className="group glass rounded-3xl overflow-hidden hover:border-fuchsia-500/50 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                    <p className="text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((techItem, i) => (
                        <span key={i} className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 uppercase">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;