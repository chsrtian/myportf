export const portfolio = {
  owner: {
    name: "Christian Roble",
    role: "Aspiring Web Developer | BS Information Technology Student",
    tagline:
      "I turn ideas into code. Passionate about building clean, efficient web experiences. Currently studying at Caraga State University Cabadbaran Campus, eager to learn and grow in web development.",
    about:
      "I am a BS Information Technology student at Caraga State University Cabadbaran Campus with an interest in web development, system design, and AI-assisted applications. I enjoy building practical systems that solve real problems, especially management systems, validation platforms, rental platforms, and user-friendly web applications. I am continuously improving my skills in Laravel, React, JavaScript, PHP, Python, databases, and modern development tools.",
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
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Python", "FastAPI", "Node.js"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "Supabase"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Vercel", "XAMPP"],
    },
    {
      category: "Special Topics",
      items: ["OCR", "Blockchain", "Ganache", "AI-assisted development", "Web System Development"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Nestora — Intelligent Rental Discovery Platform",
      category: "Web Application",
      description:
        "A smart rental discovery platform that helps renters find boarding houses, rooms, and rental properties through map-based discovery, smart filtering, AI rental assistance, saved listings, inquiries, authentication, and personalized rental recommendations.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenRouter API", "MapLibre", "Vercel"],
      links: {
        github: "https://github.com/chsrtian/nestora",
        live: null,
      },
      gradient: "linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)",
    },
    {
      id: 2,
      title: "Smart Contract Document Validation System",
      category: "Capstone Project",
      description:
        "A local web-based document validation system developed for civil registry document processing. It supports document scanning, OCR extraction, role-based access, correction workflows, audit trails, and blockchain-based document hash verification using Ganache and smart contracts.",
      techStack: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "PaddleOCR", "Python/FastAPI", "Ganache", "Solidity"],
      links: {
        github: "https://github.com/chsrtian/smart-contract-document-validation-system",
        live: null,
      },
      gradient: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
    },
    {
      id: 3,
      title: "Smart Door Lock IoT System",
      category: "IoT System",
      description:
        "An ESP32-based smart door lock system with a PHP/MySQL backend and web dashboard for monitoring access logs, device status, and remote lock/unlock commands.",
      techStack: ["ESP32", "Arduino/C++", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      links: {
        github: "https://github.com/chsrtian/smart-door-security-lock-system",
        live: null,
      },
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      id: 4,
      title: "Delivery System with Security Implementations",
      category: "Security-Focused Web System",
      description:
        "A PHP-based food ordering and delivery management system with customer ordering, role-based dashboards, OTP login, audit logging, branch management, and security workflows for sensitive admin actions.",
      techStack: ["PHP", "MySQL", "JavaScript", "CSS", "XAMPP", "Brevo Email API"],
      links: {
        github: "https://github.com/chsrtian/delivery-system-with-security-implementations",
        live: null,
      },
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    },
    {
      id: 5,
      title: "Plant Species Image Classification",
      category: "Machine Learning Project",
      description:
        "A machine learning image classification project that identifies plant species using a trained model and documented evaluation assets. It includes dataset preparation, model documentation, testing outputs, and improvement analysis.",
      techStack: ["Google Teachable Machine", "TensorFlow", "Machine Learning", "Image Classification"],
      links: {
        github: "https://github.com/chsrtian/plant_speices_classification",
        live: null,
      },
      gradient: "linear-gradient(135deg, #16a34a 0%, #84cc16 100%)",
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
    title: "Christian Roble — Web Developer",
    description:
      "Aspiring web developer passionate about building clean, efficient web experiences.",
    author: "Christian Roble",
    year: new Date().getFullYear(),
  },
};
