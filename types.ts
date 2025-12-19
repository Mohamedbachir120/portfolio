
export type Language = 'en' | 'fr';

export interface Translation {
  menu: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    hello: string;
    name: string;
    title: string;
    experience: string;
    downloadCv: string;
    viewProjects: string;
  };
  about: {
    title: string;
    bio: string;
    age: string;
    nationality: string;
    email: string;
    phone: string;
    freelance: string;
    available: string;
  };
  experience: {
    title: string;
    education: string;
    professional: string;
    master: string;
    licence: string;
    itManager: string;
    freelance: string;
    softwareEngineer: string;
    internship: string;
  };
  services: {
    title: string;
    mobile: { title: string; desc: string };
    web: { title: string; desc: string };
    database: { title: string; desc: string };
  };
  skills: {
    title: string;
    frameworks: string;
    languages: string;
    databases: string;
    os: string;
    tools: string;
  };
  portfolio: {
    title: string;
    mobileProjects: string;
    webProjects: string;
    viewCode: string;
    liveDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    social: string;
  };
  footer: {
    rights: string;
    inspiredBy: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
}
