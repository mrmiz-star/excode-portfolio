import excodeSentinelImg from '../assets/EXCODE-Discord-Management-System.png';

/**
 * MIZ Portfolio — Clean Engineering Data
 * Refined for a personal, high-aura indie developer showcase.
 */

export const projects = [
  {
    id: 1,
    title: "Shop Management System",
    slug: "shop-management",
    impact: "A full retail management platform featuring point-of-sale, inventory tracking, and stock forecasting.",
    fullDesc: "I built this comprehensive retail solution to solve the fragmentation issues in small business inventory. It features a high-speed POS, real-time data synchronization, and a custom ledger tracking engine to manage credit relationships efficiently.",
    tech: ["Python", "Flask", "SQLite", "React"],
    category: "Backend",
    status: "production",
    github: "https://github.com/qarizafar12-max/shop-management",
    demo: "#",
    color: "#ff6b35",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    id: 2,
    title: "MIZ FPS Optimizer",
    slug: "miz-fps-optimizer",
    impact: "Performance toolkit for optimization in gaming systems with custom memory management.",
    fullDesc: "This is a high-performance toolkit designed to maximize frame rates on legacy hardware. I engineered it using C++ and Windows APIs to modify system parameters and optimize memory footprints for smoother gameplay.",
    tech: ["C++", "C#", "Windows API", "Python"],
    category: "Systems",
    status: "production",
    github: "https://github.com/qarizafar12-max/fps-optimizer",
    demo: "#",
    color: "#00ffe7",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    id: 7,
    title: "EXCODE Sentinel",
    slug: "excode-discord-management-system",
    impact: "Event-driven Discord platform with AI-assisted moderation and realtime activity tracking.",
    fullDesc: "EXCODE Sentinel is a flagship Discord security platform. I developed it to handle high message volumes using an asynchronous core, integrated with AI for intelligent threat analysis and a clean web dashboard for activity monitoring.",
    tech: ["Python", "discord.py", "Flask", "AI", "SQLite"],
    category: "Security",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE-Discord-Management-System",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#5865f2",
    image: excodeSentinelImg,
    screenshots: [
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop"
    ],
  }
];

export const categories = ["All", "Systems", "Backend", "Automation", "Security", "AI", "Tools"];

export const skillGroups = [
  {
    label: "Backend & Systems",
    color: "var(--color-primary)",
    skills: ["Python", "C++", "Flask", "SQLite", "Node.js", "REST APIs"]
  },
  {
    label: "Frontend",
    color: "var(--color-secondary)",
    skills: ["React", "JavaScript", "Tailwind", "Vite"]
  },
  {
    label: "Automation & Tools",
    color: "var(--color-accent)",
    skills: ["Discord Bots", "CI/CD", "System Automation", "AI Tools"]
  }
];

export const skills = skillGroups.flatMap(g => g.skills);
