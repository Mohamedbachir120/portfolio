import { Translation } from './types';

const currentYear = new Date().getFullYear();
const expYears = currentYear - 2019;

export const en: Translation = {
  menu: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    hireMe: "Hire Me"
  },
  hero: {
    hello: "HELLO",
    name: "I'm Mohamed Bachir HADJADJI",
    title: "Software Engineer",
    experience: `${expYears} Years of Experience`,
    downloadCv: "Download CV",
    viewProjects: "View Projects"
  },
  about: {
    title: "About Me",
    bio: "I am a dedicated Software Engineer with a passion for building high-quality mobile and web applications. My expertise lies in Flutter for cross-platform mobile apps and modern web frameworks. I focus on clean code, performance, and user-centric design.",
    age: "Age",
    nationality: "Nationality",
    email: "Email",
    phone: "Phone",
    freelance: "Freelance",
    available: "Available"
  },
  experience: {
    title: "Experience & Education",
    education: "Education",
    professional: "Professional Experience",
    master: "Master Degree in Computer Science",
    licence: "Licence Degree in Information Systems",
    itManager: "IT Manager at Global Solutions",
    freelance: "Freelance Software Developer",
    softwareEngineer: "Senior Software Engineer",
    internship: "Software Development Internship"
  },
  services: {
    title: "What I Do",
    mobile: { title: "Mobile Development", desc: "Crafting beautiful, high-performance native experiences for iOS and Android using Flutter." },
    web: { title: "Web Development", desc: "Building scalable and responsive web applications with React, Tailwind, and Node.js." },
    database: { title: "Database Administration", desc: "Optimizing data storage and retrieval using PostgreSQL, MongoDB, and Firebase." }
  },
  skills: {
    title: "Technical Skills",
    frameworks: "Frameworks",
    languages: "Programming Languages",
    databases: "Databases",
    os: "Operating Systems",
    tools: "Tools"
  },
  portfolio: {
    title: "My Portfolio",
    mobileProjects: "Mobile Projects",
    webProjects: "Web Projects",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    filters: {
      all: "All",
      web: "Web",
      mobile: "Mobile"
    },
    projects: {
      doctym: "Medical appointment booking platform for patients and doctors.",
      khdemna: "Comprehensive platform for job seekers and recruiters.",
      inventory: "Internal system for tracking and managing company inventory.",
      rekba: "Real-time ride-hailing application for seamless transportation.",
      influence: "Advanced data management experience with real-time charts and analytics.",
      khdemnaDash: "Dashboard for khdemna platform to manage job postings and applications.",
      raniKhadam: "Dashboard for Rani Khadam platform to freelance job postings and applications.",
      doctymWeb: "Application created to manage doctor appointments and patient records efficiently.",
      zimail: "CRM platform designed to help user obtain mailing services with efficient contact management.",
      zoumi: "Visio Conférence platform designed to help user conduct online meetings powered by Zoom.",
      dbMonitor: "Application created to monitor and manage database performance with real-time insights.",
      usthb: "Portal designed to manage doctoral student information and research progress.",
      koudami: "E-commerce platform with integrated map features for enhanced user experience.",
      bbc: "E-learning management system for course delivery and student tracking."
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Feel free to join me on social media or send a message",
    name: "Full Name",
    email: "Email Address",
    message: "Your Message",
    send: "Send Message",
    social: "Find me on"
  },
  footer: {
    rights: "All Rights Reserved",
    inspiredBy: "Inspired by Patrick James"
  }
};

export const fr: Translation = {
  menu: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    hireMe: "Recrutez-moi"
  },
  hero: {
    hello: "BONJOUR",
    name: "Je suis Mohamed Bachir HADJADJI",
    title: "Ingénieur Logiciel",
    experience: `${expYears} ans d'expérience`,
    downloadCv: "Télécharger CV",
    viewProjects: "Voir Projets"
  },
  about: {
    title: "À Propos de Moi",
    bio: "Je suis un ingénieur logiciel passionné par la création d'applications mobiles et web de haute qualité. Mon expertise réside dans Flutter pour les applications mobiles multiplateformes et les frameworks web modernes. Je me concentre sur le code propre, la performance et le design centré sur l'utilisateur.",
    age: "Âge",
    nationality: "Nationalité",
    email: "Email",
    phone: "Téléphone",
    freelance: "Freelance",
    available: "Disponible"
  },
  experience: {
    title: "Expérience et Éducation",
    education: "Éducation",
    professional: "Expérience Professionnelle",
    master: "Master en Informatique",
    licence: "Licence en Systèmes d'Information",
    itManager: "Responsable IT chez Global Solutions",
    freelance: "Développeur Logiciel Freelance",
    softwareEngineer: "Ingénieur Logiciel Senior",
    internship: "Stage de Développement Logiciel"
  },
  services: {
    title: "Ce Que Je Fais",
    mobile: { title: "Développement Mobile", desc: "Conception d'expériences natives performantes pour iOS et Android avec Flutter." },
    web: { title: "Développement Web", desc: "Construction d'applications web scalables et réactives avec React, Tailwind et Node.js." },
    database: { title: "Administration BD", desc: "Optimisation du stockage et de l'extraction des données avec PostgreSQL, MongoDB et Firebase." }
  },
  skills: {
    title: "Compétences Techniques",
    frameworks: "Frameworks",
    languages: "Langages de Programmation",
    databases: "Bases de Données",
    os: "Systèmes d'Exploitation",
    tools: "Outils"
  },
  portfolio: {
    title: "Mon Portfolio",
    mobileProjects: "Projets Mobiles",
    webProjects: "Projets Web",
    viewCode: "Voir le Code",
    liveDemo: "Démo en Direct",
    filters: {
      all: "Tout",
      web: "Web",
      mobile: "Mobile"
    },
    projects: {
      doctym: "Plateforme de prise de rendez-vous médicaux pour patients et médecins.",
      khdemna: "Plateforme complète pour les demandeurs d'emploi et les recruteurs.",
      inventory: "Système interne de suivi et de gestion des stocks de l'entreprise.",
      rekba: "Application de réservation de chauffeur en temps réel.",
      influence: "Gestion de données avancée avec graphiques et analyses en temps réel.",
      khdemnaDash: "Tableau de bord pour la plateforme Khdemna (offres d'emploi).",
      raniKhadam: "Tableau de bord pour la plateforme de freelance Rani Khadam.",
      doctymWeb: "Application de gestion des rendez-vous et des dossiers patients.",
      zimail: "Plateforme CRM pour services de mailing et gestion de contacts.",
      zoumi: "Plateforme de visioconférence pour réunions en ligne (via Zoom).",
      dbMonitor: "Outil de surveillance des performances de base de données en temps réel.",
      usthb: "Portail pour la gestion des doctorants et de leurs recherches.",
      koudami: "Plateforme e-commerce avec intégration de cartes interactives.",
      bbc: "Système de gestion d'apprentissage (LMS) et suivi des étudiants."
    }
  },
  contact: {
    title: "Contactez-moi",
    subtitle: "N'hésitez pas à me rejoindre sur les réseaux sociaux ou à envoyer un message",
    name: "Nom Complet",
    email: "Adresse Email",
    message: "Votre Message",
    send: "Envoyer le Message",
    social: "Suivez-moi sur"
  },
  footer: {
    rights: "Tous droits réservés",
    inspiredBy: "Inspiré par Patrick James"
  }
};