import excodeSentinelImg from '../assets/EXCODE-Discord-Management-System.png';

/**
 * EXCODE Portfolio V3 — Engineering Data Engine
 * Structured metadata for high-authority engineering storytelling.
 */

export const projects = [
  {
    id: 1,
    title: "Shop Management System",
    slug: "shop-management",
    tier: "core",
    visibility: "public",
    completion: 95,
    impact: "Full retail ERP system — POS, inventory, credit ledger, distribution tracking, and AI-driven analytics.",
    summary: "A comprehensive retail enterprise resource planning (ERP) solution designed for modern shop management.",
    fullDesc: "A comprehensive retail enterprise resource planning (ERP) solution designed for modern shop management. Features include a high-speed Point of Sale (POS) system, real-time inventory management with automated low-stock alerts, a robust credit ledger for customer accounts, and detailed distribution tracking. The system utilizes AI-driven analytics to provide insights into sales trends and stock optimization.",
    
    architecture: ["Flask Backend", "SQLite Database", "React Frontend", "RESTful API"],
    features: [
      "High-speed POS interface",
      "Real-time inventory synchronization",
      "AI-driven sales forecasting",
      "Automated credit ledger management"
    ],
    engineeringNotes: [
      "Optimized SQLite queries for sub-100ms response times on large datasets",
      "Implemented JWT-based secure authentication flow",
      "Modular frontend architecture for scalable UI components"
    ],
    challenges: [
      "Synchronizing inventory across multiple terminal points",
      "Managing complex credit relationship data structures"
    ],
    solutions: [
      "Implemented a central event-driven sync engine",
      "Normalized database schema for high integrity ledger tracking"
    ],
    
    metrics: {
      modules: 12,
      realtime: "Enabled",
      architecture: "Client-Server",
      auth: "JWT/Session",
      database: "SQLite"
    },
    
    timeline: {
      started: "Jan 2024",
      updated: "March 2024"
    },

    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    tech: ["Python", "Flask", "SQLite", "React"],
    category: "Backend",
    status: "production",
    featured: true,
    github: "https://github.com/qarizafar12-max/shop-management",
    demo: "#",
    color: "#ff6b35",
  },
  {
    id: 2,
    title: "MIZ FPS Optimizer",
    slug: "miz-fps-optimizer",
    tier: "specialized",
    visibility: "public",
    completion: 100,
    impact: "Performance optimization toolkit for low-end gaming systems with DLL injection and HWID security.",
    summary: "High-performance systems toolkit for competitive gaming optimization.",
    fullDesc: "A high-performance optimization toolkit engineered for competitive gaming on low-end hardware. The system utilizes advanced DLL injection techniques to modify game engine parameters for maximum FPS gains. It includes a secure HWID-based authentication system to prevent unauthorized distribution and a clean, lightweight dashboard for real-time performance monitoring.",
    
    architecture: ["C++ Core Engine", "C# Dashboard", "Python Hook Scripts"],
    features: [
      "Direct Memory Access (DMA) hooks",
      "DLL Injection engine",
      "HWID Hardware Fingerprinting",
      "Process Priority Management"
    ],
    engineeringNotes: [
      "Utilized manual mapping for stealthy DLL injection",
      "Optimized memory footprint to <20MB during operation",
      "Implemented kernel-level process monitoring hooks"
    ],
    challenges: [
      "Bypassing aggressive process protection mechanisms",
      "Maintaining stability across different OS versions"
    ],
    solutions: [
      "Developed custom shellcode for injection routines",
      "Implemented dynamic offset scanning for version compatibility"
    ],

    metrics: {
      modules: 8,
      realtime: "Live Monitoring",
      architecture: "Systems/Native",
      auth: "HWID-Locked",
      database: "Local/Encrypted"
    },
    
    timeline: {
      started: "Feb 2024",
      updated: "April 2024"
    },

    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    tech: ["C++", "CMake", "Python", "Windows API"],
    category: "Systems",
    status: "production",
    featured: true,
    github: "https://github.com/qarizafar12-max/fps-optimizer",
    demo: "#",
    color: "#00ffe7",
  },
  {
    id: 7,
    title: "EXCODE Sentinel",
    slug: "excode-discord-management-system",
    tier: "flagship",
    visibility: "public",
    completion: 87,
    impact: "Async event-driven Discord moderation platform with AI-assisted threat detection and Flask telemetry.",
    summary: "Enterprise-grade Discord security and management ecosystem.",
    fullDesc: "EXCODE Sentinel is a state-of-the-art Discord management system engineered for high-security environments. It features an asynchronous, event-driven architecture that handles massive message throughput. Integrated AI capabilities include VADER-based sentiment analysis and OpenRouter-assisted threat detection. The system is managed via a professional Flask admin dashboard that provides real-time telemetry, audit logs, and modular command control.",
    
    architecture: ["Async Discord Gateway", "Flask Telemetry API", "SQLite Persistence", "AI Inference Layer"],
    features: [
      "Async event-driven moderation engine",
      "VADER Sentiment analysis integration",
      "Real-time telemetry dashboard",
      "Automated threat escalation pipelines"
    ],
    engineeringNotes: [
      "Optimized async moderation handlers for high throughput",
      "Reduced redundant database writes via write-ahead logging",
      "Modularized command architecture for dynamic loading",
      "Isolated telemetry processing layer from core bot logic"
    ],
    challenges: [
      "Managing concurrent moderation events without race conditions",
      "Preventing webhook abuse loops in automated responses",
      "Maintaining low-latency event handling during peak load"
    ],
    solutions: [
      "Implemented a robust event queue abstraction",
      "Developed a cooldown-based moderation throttling system",
      "Utilized async task isolation for non-critical logging"
    ],

    metrics: {
      modules: 14,
      realtime: "WebSocket/Async",
      architecture: "Event-Driven",
      auth: "OAuth2/HWID",
      database: "SQLite (WAL Mode)"
    },
    
    timeline: {
      started: "March 2024",
      updated: "Current"
    },

    image: excodeSentinelImg,
    tech: ["Python", "discord.py", "Flask", "SQLite", "OpenRouter"],
    category: "Security",
    status: "production",
    featured: true,
    github: "https://github.com/qarizafar12-max/EXCODE-Discord-Management-System",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#5865f2",
  }
];

export const categories = ["All", "Systems", "Backend", "Automation", "Security", "AI", "Tools"];

export const skillGroups = [
  {
    label: "⚙ Backend & Systems",
    color: "#00ffe7",
    domains: [
      { name: "Async Python Systems", details: "High-concurrency bot & API architectures" },
      { name: "Automation Pipelines", details: "CI/CD & automated security workflows" },
      { name: "SQLite Architectures", details: "High-integrity, local-first data storage" },
      { name: "Windows API / Native", details: "System-level hooks & process optimization" }
    ],
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 88 },
      { name: "Flask", level: 78 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    label: "📱 Infrastructure & UI",
    color: "#39ff14",
    domains: [
      { name: "React Ecosystem", details: "Modular component-driven architecture" },
      { name: "State Orchestration", details: "Centralized complex application flows" },
      { name: "REST API Design", details: "Clean, documented endpoint systems" },
      { name: "Design Systems", details: "Consistent engineering-focused aesthetics" }
    ],
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 82 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
];

export const skills = skillGroups.flatMap(g =>
  g.skills.map(s => ({ ...s, category: g.label }))
);
