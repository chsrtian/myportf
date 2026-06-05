export const portfolio = {
  owner: {
    name: "Christian Roble",
    role: "BS Information Technology Student",
    heroStatement: "I engineer intelligent systems that bridge ideas and reality.",
    roles: [
      "Full-Stack Developer",
      "AI Systems Builder",
      "Blockchain Developer",
      "IoT Builder",
      "Problem Solver",
    ],
    about:
      "I'm a BS Information Technology student at Caraga State University Cabadbaran Campus, drawn to the intersection of web development, system design, and AI-assisted applications. I care about building things that actually work — clean, reliable, and useful. My recent work spans rental platforms, document validation systems, IoT devices, and machine learning experiments.",
    terminal: {
      passion: "Building systems that solve real problems",
      focus: ["Web Development", "AI-Assisted Systems", "Blockchain", "IoT"],
      currentGoal: "Creating practical and reliable digital solutions",
    },
    location: "Ampayon, Butuan City, Philippines",
    email: "roblechristian12@gmail.com",
    profileImage: "/images/christian-profile.webp",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/chsrtian",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christian-roble-ab9519407/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:roblechristian12@gmail.com",
      icon: "mail",
    },
  ],

  skills: [
    {
      category: "Frontend",
      icon: "frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: "backend",
      items: ["PHP", "Laravel", "Python", "FastAPI", "Node.js"],
    },
    {
      category: "Database",
      icon: "database",
      items: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      category: "Tools & Platforms",
      icon: "tools",
      items: ["Git", "GitHub", "VS Code", "Vercel", "XAMPP"],
    },
    {
      category: "Special Topics",
      icon: "spark",
      items: ["OCR", "Blockchain", "Ganache", "AI-assisted development", "Web System Development"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Nestora — Intelligent Rental Discovery Platform",
      category: "Web Application",
      label: "Repository",
      description:
        "A smart rental discovery platform that helps renters find boarding houses, rooms, and rental properties through map-based discovery, smart filtering, AI rental assistance, saved listings, inquiries, authentication, and personalized rental recommendations.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenRouter API", "MapLibre", "Vercel"],
      links: {
        github: "https://github.com/chsrtian/nestora",
        live: null,
      },
      accent: "linear-gradient(90deg, #00f5c4, #7b61ff)",
    },
    {
      id: 2,
      title: "Smart Contract Document Validation System",
      category: "Capstone Project",
      label: "Local Project",
      description:
        "A local web-based document validation system developed for civil registry document processing. It supports document scanning, OCR extraction, role-based access, correction workflows, audit trails, and blockchain-based document hash verification using Ganache and smart contracts.",
      techStack: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "PaddleOCR", "Python/FastAPI", "Ganache", "Solidity"],
      links: {
        github: "https://github.com/chsrtian/smart-contract-document-validation-system",
        live: null,
      },
      accent: "linear-gradient(90deg, #7b61ff, #00f5c4)",
    },
    {
      id: 3,
      title: "Smart Door Lock IoT System",
      category: "IoT System",
      label: "Local Project",
      description:
        "An ESP32-based smart door lock system with a PHP/MySQL backend and web dashboard for monitoring access logs, device status, and remote lock/unlock commands.",
      techStack: ["ESP32", "Arduino/C++", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      links: {
        github: "https://github.com/chsrtian/smart-door-security-lock-system",
        live: null,
      },
      accent: "linear-gradient(90deg, #00f5c4, #7b61ff)",
    },
    {
      id: 4,
      title: "Delivery System with Security Implementations",
      category: "Security-Focused Web System",
      label: "Local Project",
      description:
        "A PHP-based food ordering and delivery management system with customer ordering, role-based dashboards, OTP login, audit logging, branch management, and security workflows for sensitive admin actions.",
      techStack: ["PHP", "MySQL", "JavaScript", "CSS", "XAMPP", "Brevo Email API"],
      links: {
        github: "https://github.com/chsrtian/delivery-system-with-security-implementations",
        live: null,
      },
      accent: "linear-gradient(90deg, #ff6b6b, #7b61ff)",
    },
    {
      id: 5,
      title: "Plant Species Image Classification",
      category: "Machine Learning Project",
      label: "Repository",
      description:
        "A machine learning image classification project that identifies plant species using a trained model and documented evaluation assets. It includes dataset preparation, model documentation, testing outputs, and improvement analysis.",
      techStack: ["Google Teachable Machine", "TensorFlow", "Machine Learning", "Image Classification"],
      links: {
        github: "https://github.com/chsrtian/plant_speices_classification",
        live: null,
      },
      accent: "linear-gradient(90deg, #00f5c4, #ff6b6b)",
    },
  ],

  certificates: {
    title: "Certificates & Training",
    description:
      "I am currently organizing my certificates and training records. This section will include completed certifications related to web development, programming, cybersecurity, AI, and information technology.",
    items: [
      {
        id: 1,
        name: "AI Ready ASEAN — Certificate of Completion",
        issuer: "AI Ready ASEAN",
        file: "/certificates/ai-ready-asean-certificate-christian-roble.pdf",
        link: null,
      },
    ],
  },

  education: [
    {
      institution: "Caraga State University Cabadbaran Campus",
      degree: "BS Information Technology",
      field: "Information Technology",
      startYear: 2021,
      endYear: null,
      isCurrent: true,
    },
  ],

  experience: [],

  siteConfig: {
    title: "Christian Roble — Full-Stack Developer & AI Systems Builder",
    description:
      "Full-stack developer and AI systems builder crafting intelligent, reliable digital solutions — from web applications to IoT and blockchain.",
    author: "Christian Roble",
    year: new Date().getFullYear(),
  },
};
