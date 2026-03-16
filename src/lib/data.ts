export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Bailey Henderson",
  title: "Software Engineer",
  tagline: "I build things that work in the dark.",
  location: "Phoenix, AZ",
  email: "hen.baileyk@gmail.com",
  phone: "+1 (201) 787-8863",
  linkedin: "https://linkedin.com/in/baileykh",
  github: "https://github.com/baileykh",
  website: "https://www.baileykh.dev",
  bio: "Phoenix-based software engineer who has shipped production code at every scale — from calibrating autonomous vehicle sensors at Cruise, to running a multiplayer gaming server for 200+ players, to architecting startup frontends from scratch. I thrive in the dark corners of complex systems, finding elegant solutions where others find chaos.",
  pullQuote: "\"From autonomous vehicles to living game worlds — I build systems that don't break when it matters most.\"",
};

export const experiences: Experience[] = [
  {
    company: "Protecly",
    role: "Software Engineer",
    location: "Phoenix, AZ",
    period: "January 2025 – Present",
    bullets: [
      "Architected and deployed the front-end codebase using React and Tailwind CSS, establishing the foundational repository that became the production framework.",
      "Designed and implemented multiple high-visibility pages including Terms & Conditions, Privacy Policy, Report a Phish feature, and a dynamic RSS-powered Articles page.",
      "Engineered performance optimizations reducing page load time by 35% and implemented animations for the landing page, resulting in enhanced user engagement and visual appeal.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    location: "Phoenix, AZ",
    period: "February 2024 – February 2025",
    bullets: [
      "Developed 8+ custom web applications using React, JavaScript, and Tailwind CSS, delivering complex features including real-time data synchronization and achieving 95% client satisfaction rate.",
      "Engineered and implemented performance optimization strategies including advanced code splitting and resource prioritization, yielding 40% improvement in core web vitals.",
      "Integrated third-party APIs and managed secure authentication workflows for client applications.",
    ],
  },
  {
    company: "Cruise",
    role: "Vehicle Software Integration Engineer",
    location: "Phoenix, AZ",
    period: "September 2023 – February 2024",
    bullets: [
      "Implemented Python scripts that automated vehicle sensor calibration, reducing setup time by 50%.",
      "Collaborated with cross-functional teams to optimize production processes, contributing to 100% increase in output.",
      "Developed comprehensive automated testing procedures, resulting in 60% reduction in software debugging time.",
      "Maintained 99.9% uptime for vehicle software systems through proactive monitoring and rapid issue resolution.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Dust to Dreams",
    description:
      "Production multiplayer gaming server scaling to 223 registered players with 50+ daily active users. Configured 200+ Lua-based server resources including economy systems, housing mechanics, job frameworks, and law enforcement systems. Monetization through tiered subscriptions; 62+ new player registrations weekly.",
    tech: ["Lua", "MariaDB", "Server Infra", "Economy Systems"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "RAVN",
    description:
      "Mobile-first food discovery app in React Native using the Google Places API to help users find dining spots along routes or nearby. Features interactive map clustering, dynamic filters, animated modals, and real-time location services with one-tap navigation.",
    tech: ["React Native", "Google Places API", "Maps", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Nature Shot",
    description:
      "Fully responsive photography portfolio built with React and Tailwind CSS. Translated Figma designs into pixel-perfect, accessible UI components. Optimized with responsive images, lazy loading, and code-splitting — cutting page load times by over 40% and improving Lighthouse scores.",
    tech: ["React", "Tailwind CSS", "Figma", "Performance Optimization"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Lua", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MariaDB", "REST APIs"],
  },
  {
    category: "Tools & Ops",
    skills: ["Git", "Jest", "Vitest", "CI/CD"],
  },
];
