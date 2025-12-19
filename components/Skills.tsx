
import React from 'react';
import { Translation } from '../types';

interface SkillsProps {
  t: Translation;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const skillSets = [
    {
      category: t.skills.frameworks,
      skills: ["Flutter", "React", "Node.js", "Express",   "Tailwind CSS"]
    },
    {
      category: t.skills.languages,
      skills: ["Dart", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"]
    },
    {
      category: t.skills.databases,
      skills: ["PostgreSQL","SQL Server", "MongoDB", "Firebase", "SQLite", "Redis"]
    },
    {
      category: t.skills.tools,
      skills: ["Git", "Docker", "Postman", "Figma", "VS Code", "Android Studio"]
    },
    {
      category: t.skills.os,
      skills: ["Linux", "macOS", "Windows", "Android", "iOS"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSets.map((set, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border-t-2 border-fuchsia-500/20 hover:border-fuchsia-500 transition-all group">
              <h3 className="text-xl font-bold mb-6 text-fuchsia-400 group-hover:translate-x-1 transition-transform">{set.category}</h3>
              <div className="flex flex-wrap gap-2">
                {set.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium hover:bg-fuchsia-500 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
