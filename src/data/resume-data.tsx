import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vasu Sadariya",
  initials: "VS",
  location: "Sardar Vallabhbhai National Institute of Technology,Surat",
  locationLink: "https://maps.app.goo.gl/aZ6EGgXwbsDGN2Wh8",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail in crafting creative solutions with $Next...",
  summary:
    "As a Full Stack Engineer, I have successfully lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Javascript, Next.js, Node.js, Prisma ORM and Postgresql. I have built various projects and i am opem to work immediately",
  avatarUrl: "/vasu.png",
  contact: {
    email: "sadariyavasu5@gmail.com",
    tel: "+916354544156",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vasusadariya",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vasu-sadariya-701630232/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Vasu__30705",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sardar Vallabhbhai National Institute of Technology,Surat",
      degree: "Btech in Electronics and Communication Engineering",
      start: "2023",
      end: "2027(ongoing)",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React.js",
    "Node.js",
    "Prisma ORM",
    "Websockets",
    "Postgresql",
    "AWS",
    "Docker",
    "Kubernetes",
    "Cloudflare Workers and Pages",
  ],
  projects: [
    {
      title: "Real-Time-Chat App",
      techStack: [
        "Main-Project",
        "TypeScript",
        "Next.js",
        "Socket.io",
        "JWT",
        "PostgreSQL",
        "Prima-ORM",
        "Tailwind-CSS",
        "Express.js",

      ],
      description: "A platform to have chat with you loveones and strangers by creating room chat",
      logo: ConsultlyLogo,
      link: {
        label: "timepass.com",
        href: "https://github.com/vasusadariya/real-time-chat",
      },
    },
    {
      title: "MindMesh",
      techStack: [
        "Project", 
        "TypeScript", 
        "React.js", 
        "JWT",
        "PostgreSQL",
        "Prima-ORM",
        "Tailwind-CSS",
        "Express.js",
        "Cloudflare-Workers/Pages",
      ],
      description:
        "A full-stack blog posting platform where user come and post their mind's mesh",
      logo: MonitoLogo,
      link: {
        label: "mindmesh.com",
        href: "https://github.com/vasusadariya/MindMesh",
      },
    },
    {
      title: "Price-Converter",
      techStack: [
        "Web3-Project", 
        "RemixEthereum-IDE", 
        "Solidity",
        "Blockchain",
      ],
      description:
        "A tool to convert the price or any cryptocurrency.Convert any currency to curyptocurrency",
      logo: JarockiMeLogo,
      link: {
        label: "Price-converter.com",
        href: "https://github.com/vasusadariya/price-converter-smart-contract",
      },
    },
    {
      title: "To-Do App",
      techStack: [
        "Project", 
        "Javascript", 
        "React.js",
        "Tailwind-CSS",
        "Express.js",
        "MongoDB",
        "Cloudflare-Workers/Pages",
      ],
      description:
        "Minimalist To-do, habit trackers, planners and list of all the things to do",
      logo: Minimal,
      link: {
        label: "todo-app.com",
        href: "https://github.com/vasusadariya/To-do-app",
      },
    },
    {
      title: "4 wheel Omni-Drive Bot",
      techStack: [
        "Robotics-Project", 
        "HTML", 
        "CSS",
        "JavaScript",
        "WebSocket",
        "Arduino-IDE",
        "C-code-PS4",
        "ESP32-microcontroller",
        "PS4",
      ],
      description:
        "Developed PS4 and web-GUI controlled 4-wheel Omni drive robot using ESP32",
      logo: BarepapersLogo,
      link: {
        label: "omnidrive.com",
        href: "https://github.com/vasusadariya/Omni-drive",
      },
    },
    {
      title: "Memories",
      techStack: [
        "Side-Hustle", 
        "TypeScript", 
        "Next.js"
      ],
      description: "Memories dump platflorm for my personal use for my siblings.",
      logo: YearProgressLogo,
      link: {
        label: "memories.com",
        href: "#",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "TypeScript",
        "Next.js",
      ],
      description:
        "Platform to portrait my love and passion for the work i do",
      logo: ParabolLogo,
      link: {
        label: "portfolio.com",
        href: "#",
      },
    },
  ],
} as const;
