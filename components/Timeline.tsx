import React from 'react';
import { Translation } from '../types';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineProps {
  t: Translation;
}

interface TimelineItemProps {
  item: {
    title: string;
    period: string;
    points: string[];
    companyOrSchool?: string; // Optional helper for styling if needed
  };
  isEdu: boolean;
}

// 1. DATA: Experience (Mapped from your input)
const experienceList = [
  {
    company: 'NAFTAL SPA',
    role: 'PROJECT MANAGER',
    date: 'Since 2025',
    tasks: [
      'Leading technical teams and managing project lifecycles',
      'Defining project scope, goals, and deliverables',
      'Supervising the development of internal digital solutions'
    ]
  },
  {
    company: 'NAFTAL SPA',
    role: 'SOFTWARE ENGINEER',
    date: 'Sep 2022 - 2024',
    tasks: [
      'Develop Web applications using Laravel / React',
      'Develop Mobile applications using Flutter',
      'Database Monitoring using Zabbix'
    ]
  },
  {
    company: 'ADEX TECHNOLOGY',
    role: 'SOFTWARE ENGINEER',
    date: 'May 2022 - Sep 2022',
    tasks: [
      'Develop Web applications using Laravel / React',
      'Develop Mobile applications using React-Native'
    ]
  },
  {
    company: 'NAFTAL',
    role: 'INTERNSHIP',
    date: 'Feb 2022 - Jun 2022',
    tasks: [
      'Develop Web services using Spring Boot',
      'Creating a web application using Angular',
      'Creation of two mobile applications using Flutter'
    ]
  },
  {
    company: 'FB TECHNOLOGIES',
    role: 'INTERNSHIP',
    date: 'Aug 2021 - May 2022',
    tasks: [
      'Develop Mobile applications'
    ]
  },
  {
    company: 'BBC SCHOOL',
    role: 'IT MANAGER',
    date: '2018 - 2022',
    tasks: [
      'Develop and update company website pages',
      'Plan and organize projects',
      'Coordinate with team members',
      'Participate in meetings and write reports'
    ]
  },
  {
    company: 'BBC SCHOOL',
    role: 'WEB DEVELOPMENT TEACHER',
    date: '2020 - 2021',
    tasks: [
      'Teach HTML / CSS / JS lessons'
    ]
  },
  {
    company: 'FREELANCE',
    role: 'WEB / MOBILE DEVELOPMENT',
    date: 'Since 2019',
    tasks: [
      'Collaborate with the client to set up a commercial register',
      'Develop mobile and web applications according to customer requests'
    ]
  },
];

// 2. DATA: Education (Mapped from your input)
const educationList = [
  {
    school: 'LEARNEO',
    subHeader: 'FORTINET',
    title: 'NSE 6 FortiAuthenticator in 2023',
  },
  {
    school: 'LEARNEO',
    subHeader: 'FORTINET',
    title: 'NSE 7 SD-WAN in 2022',
  },
  {
    school: 'LEARNEO',
    subHeader: 'FORTINET',
    title: 'NSE 6 FortiSwitch in 2022',
  },
  {
    school: 'USTHB',
    subHeader: 'MASTER DEGREE',
    title: 'Master in Software Engineering (2022)',
  },
  {
    school: 'USTHB',
    subHeader: 'LICENCE DEGREE',
    title: 'LICENCE in Academic Computing (2020)',
  },
  {
    school: 'CEIL BENI MESSOUS',
    subHeader: 'ENGLISH COURSES B2',
    title: 'Obtained in 2019',
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isEdu }) => (
  <div className="relative pl-8 pb-12 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bottom-full"></div>
    {/* Dot */}
    <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full border-2 border-[#0a051a] shadow-lg ${isEdu ? 'bg-purple-500' : 'bg-fuchsia-500'}`}></div>
    
    <div className="glass p-6 rounded-2xl group-hover:bg-white/5 transition-colors border-l-2 border-transparent group-hover:border-fuchsia-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="text-xl font-bold">{item.title}</h4>
        <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mt-1 sm:mt-0 bg-white/5 px-2 py-1 rounded">
          {item.period}
        </span>
      </div>
      
      {/* Show Company/School Name if mapped */}
      {item.companyOrSchool && (
         <div className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
            {isEdu ? 'At' : '@'} {item.companyOrSchool}
         </div>
      )}

      <ul className="space-y-2">
        {item.points.map((p: string, i: number) => (
          <li key={i} className="text-slate-400 text-sm flex items-start">
            <span className={`mr-2 ${isEdu ? 'text-purple-500' : 'text-fuchsia-500'}`}>•</span> 
            {p}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Timeline: React.FC<TimelineProps> = ({ t }) => {
  
  // Transform Data for Component
  const mappedExperience = experienceList.map(item => ({
    title: item.role,
    companyOrSchool: item.company,
    period: item.date,
    points: item.tasks
  }));

  const mappedEducation = educationList.map(item => ({
    title: item.subHeader, // e.g., MASTER DEGREE
    companyOrSchool: item.school, // e.g., USTHB
    // Since education data doesn't have a distinct date field, we display the school in the period slot 
    // or we can leave period empty and rely on the text in 'points'. 
    // Here I will use the School as the "Period/Tag" visually, or keep it distinct.
    period: item.school, 
    points: [item.title] // e.g., "Master in..."
  }));

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Column (Left or Right - swapped order usually implies priority, but standard is left-to-right) */}
          {/* Based on the data density, Experience is longer. Let's put Experience on the left or keep the original layout? 
              Original layout had Education Left, Experience Right. 
              Given Experience is the "main" focus usually, I will place Experience on the Right as per original code, 
              or we can swap to make it prominent. Let's keep original layout structure.
          */}

          {/* Education */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t.experience.education}</h3>
            </div>
            <div className="space-y-2">
              {mappedEducation.map((item, idx) => (
                <TimelineItem key={idx} item={item} isEdu={true} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-fuchsia-500/10 text-fuchsia-400 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t.experience.professional}</h3>
            </div>
            <div className="space-y-2">
              {mappedExperience.map((item, idx) => (
                <TimelineItem key={idx} item={item} isEdu={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;