export const portfolio = {
  owner: {
    name: "Christian Roble",
    role: "Aspiring Web Developer | BS Information Technology Student",
    tagline:
      "I turn ideas into code. Passionate about building clean, efficient web experiences. Currently studying at Caraga State University Cabadbaran Campus, eager to learn and grow in web development.",
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
      items: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["PHP", "Python"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Project 1",
      description: "Coming Soon — GitHub push pending",
      image: "/images/placeholder-project.webp",
      tags: ["Soon"],
      links: {
        github: null,
        live: null,
      },
      status: "coming-soon",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Coming Soon — GitHub push pending",
      image: "/images/placeholder-project.webp",
      tags: ["Soon"],
      links: {
        github: null,
        live: null,
      },
      status: "coming-soon",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Coming Soon — GitHub push pending",
      image: "/images/placeholder-project.webp",
      tags: ["Soon"],
      links: {
        github: null,
        live: null,
      },
      status: "coming-soon",
    },
  ],

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
