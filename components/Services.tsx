
import React from 'react';
import { Translation } from '../types';
import { Smartphone, Code, Database } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    { 
      icon: Smartphone, 
      title: t.services.mobile.title, 
      desc: t.services.mobile.desc,
      color: 'from-fuchsia-500 to-purple-500' 
    },
    { 
      icon: Code, 
      title: t.services.web.title, 
      desc: t.services.web.desc,
      color: 'from-blue-500 to-indigo-500' 
    },
    { 
      icon: Database, 
      title: t.services.database.title, 
      desc: t.services.database.desc,
      color: 'from-emerald-500 to-teal-500' 
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0a051a]/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass p-8 rounded-[2.5rem] hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient background hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform`}>
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center text-fuchsia-500 font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Learn more</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
