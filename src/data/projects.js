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
    id: 8,
    title: "MIZ FPS Optimizer",
    slug: "miz-fps-optimizer",
    impact: "High-performance Windows optimization suite focused on FPS stability, latency reduction, and intelligent system tuning for gamers.",
    fullDesc: "MIZ FPS Optimizer is a production-grade Windows optimization engine built for gamers and power users. The application combines realtime hardware telemetry, adaptive optimization heuristics, and automated background tuning to improve FPS consistency, reduce latency, and enhance overall system responsiveness. Built with a PySide6 desktop architecture and asynchronous processing pipeline, the software delivers fast and intelligent optimization without requiring advanced technical knowledge.",
    tech: [
      "Python",
      "PySide6",
      "Windows APIs",
      "System Optimization",
      "Async Processing",
      "AI Heuristics"
    ],
    category: "Systems",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@MIZ-GAMING-FF",
    tutorial: "https://youtube.com/@MIZ-GAMING-FF",
    color: "#00ffae",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      fpsBoost: "20-45%",
      latencyReduction: "~30%",
      optimizationTime: "<60s"
    },
    features: [
      "AI Smart Optimization Engine",
      "Realtime Hardware Telemetry",
      "Low Latency Gaming Mode",
      "Background Process Optimization",
      "Adaptive Resource Allocation",
      "Modern PySide6 Desktop UI"
    ],
    architecture: {
      nodes: [
        {
          id: '1',
          type: 'arch_input',
          data: { label: 'Game Detection' },
          position: { x: 250, y: 0 }
        },
        {
          id: '2',
          type: 'arch_process',
          data: { label: 'Telemetry Analysis' },
          position: { x: 250, y: 100 }
        },
        {
          id: '3',
          type: 'arch_process',
          data: { label: 'AI Optimization Core' },
          position: { x: 250, y: 200 }
        },
        {
          id: '4',
          type: 'arch_process',
          data: { label: 'System Resource Tuning' },
          position: { x: 100, y: 320 }
        },
        {
          id: '5',
          type: 'arch_process',
          data: { label: 'Background Task Cleanup' },
          position: { x: 400, y: 320 }
        },
        {
          id: '6',
          type: 'arch_output',
          data: { label: 'Boosted FPS Output' },
          position: { x: 250, y: 450 }
        }
      ],
      edges: [
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true
        },
        {
          id: 'e2-3',
          source: '2',
          target: '3',
          animated: true
        },
        {
          id: 'e3-4',
          source: '3',
          target: '4'
        },
        {
          id: 'e3-5',
          source: '3',
          target: '5'
        },
        {
          id: 'e4-6',
          source: '4',
          target: '6',
          animated: true
        },
        {
          id: 'e5-6',
          source: '5',
          target: '6',
          animated: true
        }
      ]
    }
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
  },
  {
    id: 9,
    title: "Video Converter Pro",
    slug: "video-converter-pro",
    impact: "Studio-grade FFmpeg-powered video processing suite with AI-assisted encoding optimization and realtime telemetry parsing.",
    fullDesc: "Video Converter Pro is a high-performance desktop video processing application engineered for creators, developers, and power users. Built with PySide6 and FFmpeg, the software combines asynchronous processing, intelligent encoding heuristics, and realtime telemetry parsing to automate professional-grade media conversion workflows. The application focuses on performance, automation, and usability while providing advanced codec optimization without requiring deep FFmpeg expertise.",
    tech: [
      "Python",
      "PySide6",
      "FFmpeg",
      "FFprobe",
      "Async Processing",
      "Regex Parsing"
    ],
    category: "Tools",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#ff7b00",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      compressionRate: "~60%",
      processingMode: "Realtime",
      supportedFormats: "20+"
    },
    features: [
      "AI Smart Encoding Optimization",
      "Realtime FFmpeg Telemetry Parsing",
      "Batch Video Processing",
      "Hardware Accelerated Encoding",
      "Studio Video Adjustment Tools",
      "Universal Media Format Support"
    ],
    architecture: {
      nodes: [
        {
          id: '1',
          type: 'arch_input',
          data: { label: 'Media Input Queue' },
          position: { x: 250, y: 0 }
        },
        {
          id: '2',
          type: 'arch_process',
          data: { label: 'Telemetry Analysis Engine' },
          position: { x: 250, y: 100 }
        },
        {
          id: '3',
          type: 'arch_process',
          data: { label: 'AI Encoding Optimizer' },
          position: { x: 250, y: 200 }
        },
        {
          id: '4',
          type: 'arch_process',
          data: { label: 'FFmpeg Processing Core' },
          position: { x: 100, y: 320 }
        },
        {
          id: '5',
          type: 'arch_process',
          data: { label: 'Hardware Acceleration Layer' },
          position: { x: 400, y: 320 }
        },
        {
          id: '6',
          type: 'arch_output',
          data: { label: 'Optimized Media Output' },
          position: { x: 250, y: 450 }
        }
      ],
      edges: [
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true
        },
        {
          id: 'e2-3',
          source: '2',
          target: '3',
          animated: true
        },
        {
          id: 'e3-4',
          source: '3',
          target: '4'
        },
        {
          id: 'e3-5',
          source: '3',
          target: '5'
        },
        {
          id: 'e4-6',
          source: '4',
          target: '6',
          animated: true
        },
        {
          id: 'e5-6',
          source: '5',
          target: '6',
          animated: true
        }
      ]
    }
  },
  {
    id: 10,
    title: "EXCODE LiveWallpaperEngine",
    slug: "excode-live-wallpaper-engine",
    impact: "Adaptive desktop live wallpaper engine with hardware-aware rendering, realtime optimization, and Win32 desktop integration.",
    fullDesc: "EXCODE LiveWallpaperEngine is a Python-powered desktop wallpaper rendering engine designed for immersive animated desktop experiences across multiple hardware tiers. The project combines OpenCV rendering, Win32 desktop integration, adaptive performance scaling, and intelligent hardware detection to dynamically optimize wallpaper performance for low-end, mid-range, and high-end systems. Built with a modular architecture, the engine focuses on smooth rendering, low resource usage, and scalable desktop animation technologies.",
    tech: [
      "Python",
      "OpenCV",
      "Win32API",
      "System Optimization",
      "Hardware Detection",
      "Desktop Rendering"
    ],
    category: "Systems",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE-LiveWallpaperEngine",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#4f8cff",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      maxFPS: "60+",
      hardwareModes: "3 Tiers",
      resourceUsage: "Adaptive"
    },
    features: [
      "Adaptive Hardware Tier Detection",
      "Realtime OpenCV Wallpaper Rendering",
      "Smart Auto-Launcher System",
      "Win32 Desktop Integration",
      "Low Latency Rendering Pipeline",
      "Multi-Tier Performance Optimization"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'Hardware Detection Engine' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'Performance Tier Analyzer' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'Adaptive Rendering Core' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'OpenCV Frame Processing' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Win32 Wallpaper Injection' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Realtime Animated Desktop' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    }
  },
  {
    id: 11,
    title: "EXCODE PC Optimizer",
    slug: "excode-pc-optimizer",
    impact: "Production-grade Windows optimization suite with realtime telemetry, intelligent cleanup systems, and adaptive performance tuning.",
    fullDesc: "EXCODE PC Optimizer is a high-performance Windows optimization platform engineered for gamers, creators, and performance enthusiasts. Built with Python and PySide6, the software combines realtime system telemetry, adaptive optimization logic, and low-level Windows API integration to improve system responsiveness, reduce resource overhead, and streamline maintenance workflows. The project focuses on modular architecture, multi-threaded processing, and intelligent automation to deliver production-grade optimization capabilities in a modern desktop environment.",
    tech: [
      "Python",
      "PySide6",
      "Windows APIs",
      "psutil",
      "ctypes",
      "winreg"
    ],
    category: "Systems",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#00c2ff",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      storageCleanup: "~35%",
      bootOptimization: "Improved",
      monitoringMode: "Realtime"
    },
    features: [
      "Intelligent Optimization Engine",
      "Realtime System Telemetry",
      "Advanced Junk File Cleaner",
      "Game Boost & Resource Tuning",
      "Network Optimization Toolkit",
      "Modern PySide6 Dashboard"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'System Telemetry Engine' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'Health Analysis Core' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'Adaptive Optimization Engine' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'Cleanup & Registry Layer' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Game & Network Booster' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Optimized Windows Environment' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    }
  },
  {
    id: 12,
    title: "EXCODE Secure Encoder Pro",
    slug: "excode-secure-encoder-pro",
    impact: "Advanced hybrid cryptography suite implementing RSA-4096 and AES-256-GCM for secure local-first encryption workflows.",
    fullDesc: "EXCODE Secure Encoder Pro is a production-grade cryptographic platform engineered for secure file protection and encrypted communication. Built with Python and PySide6, the application combines RSA-4096 asymmetric encryption with AES-256-GCM authenticated symmetric encryption to deliver high-security hybrid cryptography workflows. The platform focuses on zero-trust architecture, local-first security, tamper-resistant encryption, and professional-grade key management while maintaining a modern desktop experience.",
    tech: [
      "Python",
      "PySide6",
      "Cryptography",
      "RSA-4096",
      "AES-256-GCM",
      "Hybrid Encryption"
    ],
    category: "Security",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#7c4dff",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      encryptionLevel: "RSA-4096",
      symmetricCipher: "AES-256-GCM",
      architectureType: "Hybrid"
    },
    features: [
      "Hybrid RSA + AES Encryption Engine",
      "Secure File Vault System",
      "Local-First Zero Trust Security",
      "Professional RSA Key Management",
      "Authenticated AES-GCM Encryption",
      "Modern Glassmorphic PySide6 UI"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'Secure Data Input' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'AES Session Key Generator' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'Hybrid Encryption Core' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'AES-256-GCM Engine' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'RSA-4096 Key Exchange' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Encrypted Secure Package' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    }
  },
  {
    id: 13,
    title: "EXCODE PDF Tool",
    slug: "excode-pdf-tool",
    impact: "AI-powered PDF productivity suite featuring OCR processing, document automation, and advanced PDF management tools.",
    fullDesc: "EXCODE PDF Tool is a modern desktop productivity platform engineered for intelligent PDF processing and document management workflows. Built with Python and PySide6, the application integrates OCR analysis, PDF transformation utilities, compression systems, and file automation into a unified desktop experience. The software combines high-performance PDF engines with AI-assisted text extraction and a futuristic UI architecture focused on productivity, usability, and automation.",
    tech: [
      "Python",
      "PySide6",
      "PyMuPDF",
      "EasyOCR",
      "OpenCV",
      "pikepdf"
    ],
    category: "Tools",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#ff3b7f",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      supportedTools: "10+",
      OCRMode: "AI Enhanced",
      exportFormats: "Multiple"
    },
    features: [
      "AI-Enhanced OCR Extraction",
      "PDF Merge & Split Engine",
      "Image to PDF Conversion",
      "Document Compression Tools",
      "Integrated File Management",
      "Modern Futuristic Desktop UI"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'Document Input System' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'PDF Analysis Engine' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'AI OCR Processing Core' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'PDF Transformation Layer' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Compression & Export Engine' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Optimized PDF Output' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    }
  },
  {
    id: 14,
    title: "USER PASS DETECTOR",
    slug: "user-pass-detector",
    impact: "AI-assisted OCR analysis platform designed for realtime credential pattern detection and sensitive data discovery in video streams.",
    fullDesc: "USER PASS DETECTOR is a computer vision and OCR-driven analysis platform engineered for detecting credential-related patterns inside recorded video content. Built with Python, FastAPI, OpenCV, and EasyOCR, the system combines multi-pass image preprocessing, spatial relationship analysis, and realtime frame processing to identify sensitive information patterns such as usernames and password fields. The platform focuses on high-speed media analysis, intelligent OCR workflows, and interactive reporting through a modern web-based interface.",
    tech: [
      "Python",
      "FastAPI",
      "OpenCV",
      "EasyOCR",
      "FFmpeg",
      "JavaScript"
    ],
    category: "AI",
    status: "production",
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      processingMode: "Realtime",
      OCRPipeline: "Multi-Pass",
      backendType: "FastAPI"
    },
    features: [
      "AI-Enhanced OCR Detection",
      "Spatial Relationship Analysis",
      "Realtime Video Frame Processing",
      "Interactive Web Dashboard",
      "Scene Change Detection Engine",
      "FFmpeg Media Processing Pipeline"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'Video Input Stream' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'Frame Extraction Engine' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'OCR Analysis Core' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'Spatial Detection Layer' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Realtime Reporting Engine' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Detection Results Dashboard' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    }
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
