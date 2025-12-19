
import React from 'react';
import { Translation } from '../types';
import { User, Calendar, Flag, Mail, Phone, Briefcase } from 'lucide-react';

interface AboutProps {
  t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const details = [
    { icon: User, label: t.about.age, value: new Date().getFullYear() - 1999 },
    { icon: Flag, label: t.about.nationality, value: "Algerian" },
    { icon: Mail, label: t.about.email, value: "mohamedbhadjadji@gmail.com" },
    { icon: Phone, label: t.about.phone, value: "+213 540 796 061" },
    { icon: Briefcase, label: t.about.freelance, value: t.about.available },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0a051a]/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-fuchsia-400">Software Engineer & Flutter Developer</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {t.about.bio}
            </p>
            <div className="p-6 glass rounded-2xl border-l-4 border-fuchsia-500 italic">
              "Building modern solutions for tomorrow's problems today."
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((item, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl flex items-center space-x-4 hover:border-fuchsia-500/30 transition-all">
                <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold ">{item.label}</p>
                  <p className="font-semibold break-all">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
