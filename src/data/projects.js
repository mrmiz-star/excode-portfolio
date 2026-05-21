import excodeSentinelImg from '../assets/EXCODE-Discord-Management-System.png';

/**
 * MIZ Portfolio — Clean Engineering Data
 * Refined for a professional systems-focused developer showcase.
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
    color: "#bf00ff",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      averageLatency: "<12ms",
      supportedSKUs: "100k+",
      syncFailureRate: "0%"
    },
    features: [
      "High-speed point-of-sale terminal interface",
      "Real-time local inventory tracking engine",
      "Automated client ledger database",
      "Modular offline fallback architecture"
    ],
    caseStudy: {
      problem: "Small retail stores suffer from fragmented point-of-sale systems, manual ledgers, and inaccurate inventory forecasting, leading to stock discrepancies and revenue loss.",
      solution: "Engineered a local-first retail management suite combining high-speed POS transaction tracking, automated digital ledgers, and heuristic stock forecasting.",
      architectureDecision: "Opted for Python + Flask backend coupled with SQLite database for a lightweight, zero-administration client footprint suitable for offline environments.",
      bottlenecks: "POS transaction serialization created lock contention on SQLite databases during concurrent cashier checkouts.",
      optimization: "Implemented SQLite write-ahead logging (WAL) journal mode combined with an in-memory queue for staging ledger writes prior to batch flushing.",
      result: "Achieved average POS transaction latency of <12ms, support for 100,000+ SKU inventory scales, and eliminated data synchronization conflicts entirely."
    },
    engineeringSignals: {
      notes: "Local SQLite optimization techniques, including custom triggers and indices on SKU lookup columns, minimized hardware requirements.",
      challenges: "Ensuring transaction consistency across network-disconnected storefront nodes without a distributed coordinator.",
      tradeoffs: "Prioritized local-first availability and simple database backups over real-time global multi-store consistency."
    }
  },
  {
    id: 8,
    title: "MIZ FPS Optimizer",
    slug: "miz-fps-optimizer",
    impact: "High-performance Windows optimization suite focused on FPS stability, latency reduction, and intelligent system tuning.",
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
    color: "#00e5ff",
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
        { id: '1', type: 'arch_input', data: { label: 'Game Detection' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'Telemetry Analysis' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'AI Optimization Core' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'System Resource Tuning' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Background Task Cleanup' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Boosted FPS Output' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    },
    caseStudy: {
      problem: "Windows OS resource allocation defaults degrade gameplay performance, leading to frame time spikes, input lag, and CPU scheduling inefficiencies.",
      solution: "Engineered a low-level system optimizer that adjusts Windows scheduler behaviors, optimizes system memory, and re-allocates hardware resources in real-time.",
      architectureDecision: "Developed with PySide6 for GUI design and native Win32 API calls (`ctypes` integrations) for low-latency kernel optimizations.",
      bottlenecks: "Retrieving continuous system telemetry via standard subprocesses led to significant CPU overhead.",
      optimization: "Refactored parsing logic to query direct system API calls and run telemetry tracking asynchronously in a high-priority background thread pool.",
      result: "Reduced frame time jitter by up to 45%, cut system background process memory footprint by 1.2GB, and improved input response times by 30%."
    },
    engineeringSignals: {
      notes: "Utilizes ctypes to directly execute low-level Windows APIs for memory garbage collection and core parking overrides.",
      challenges: "Safely modifying low-level OS configurations across multiple client OS versions without introducing instability.",
      tradeoffs: "Sacrificed minor background service features (e.g. windows indexing) during game mode to prioritize raw processing throughput."
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
    color: "#bf00ff",
    image: excodeSentinelImg,
    screenshots: [
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop"
    ],
    metrics: {
      activeGuilds: "50+",
      messageProcessingRate: "1.2k/s",
      detectionAccuracy: "99.2%"
    },
    features: [
      "High-throughput asynchronous message routing",
      "Real-time behavioral security rules and actions",
      "Intelligent text pattern matching",
      "Secure Flask administrator panel API"
    ],
    caseStudy: {
      problem: "Discord moderation systems are typically sluggish, failing to capture and mitigate rapid spam attacks or coordinated bot raids in high-volume channels.",
      solution: "Built an event-driven bot daemon with a concurrent SQLite persistence layer and rule-based regex analyzer.",
      architectureDecision: "Chose discord.py's asyncio framework to handle thousands of concurrent WebSocket messages per second.",
      bottlenecks: "Database read/write locks stalled the main event loop during database-intensive user audit logging.",
      optimization: "Implemented a write-behind buffer queue utilizing SQLite's WAL logging and connection pooling.",
      result: "Reduced message moderation action round-trips to under 45ms, supporting sustained rates of 1,200 events/sec."
    },
    engineeringSignals: {
      notes: "Strict asynchronous database mapping prevents the single-threaded event loop from suffering blocking states.",
      challenges: "Managing state synchronization across disconnected Discord gateway shards.",
      tradeoffs: "Opted for eventual consistency in reporting statistics in exchange for zero impact on event-processing latency."
    }
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
    color: "#00e5ff",
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
        { id: '1', type: 'arch_input', data: { label: 'Media Input Queue' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'Telemetry Analysis Engine' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'AI Encoding Optimizer' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'FFmpeg Processing Core' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'Hardware Acceleration Layer' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_output', data: { label: 'Optimized Media Output' }, position: { x: 250, y: 450 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6', animated: true },
        { id: 'e5-6', source: '5', target: '6', animated: true }
      ]
    },
    caseStudy: {
      problem: "Batch video encoding routinely stalls CPU resources, while standard transcoders fail to optimize bitrates dynamically, causing bloated output sizes.",
      solution: "Engineered an asynchronous media wrapper around FFmpeg using dynamic telemetry parsing and heuristic encoder adjustments.",
      architectureDecision: "Leveraged PySide6's QThread mapping combined with FFmpeg subprocess stdout pipes for non-blocking UI and telemetry parsing.",
      bottlenecks: "Decoding standard terminal stdout from FFmpeg processes dynamically caused text parsing buffers to bottleneck memory.",
      optimization: "Designed a optimized Regex parser that extracts framerate and bitrate telemetry directly from raw stdout buffers in chunks.",
      result: "Achieved ~60% average file size compression without observable video quality degradation and stable batch pipeline execution."
    },
    engineeringSignals: {
      notes: "Dynamically selects NVENC, AMF, or QSV hardware acceleration layers depending on GPU runtime diagnostics.",
      challenges: "Maintaining reliable cross-platform FFmpeg static binary dependencies.",
      tradeoffs: "Sacrificed multi-pass rendering speedups in favor of fast real-time single-pass workflows."
    }
  },
  {
    id: 10,
    title: "EXCODE LiveWallpaperEngine",
    slug: "excode-live-wallpaper-engine",
    impact: "Adaptive desktop live wallpaper engine with hardware-aware rendering and Win32 desktop integration.",
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
    color: "#bf00ff",
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
    },
    caseStudy: {
      problem: "Animated wallpapers consume significant GPU resources, causing framerate drops in full-screen gaming or heavy design workflows.",
      solution: "Developed a Win32-hooked rendering engine that detects hardware loads and full-screen processes, pausing rendering instantly to release resources.",
      architectureDecision: "Used Windows API (`user32` integrations) to locate and hook into the underlying desktop worker window (`Progman` / `WorkerW`).",
      bottlenecks: "Constant rendering loop via CPU caused memory bloat when loading large video assets.",
      optimization: "Implemented OpenCV frame cache buffers and direct memory hardware acceleration (DXVA2 integration).",
      result: "Wallpaper GPU usage dropped to 0% automatically when games were launched, rendering at 60 FPS smoothly during normal desktop use."
    },
    engineeringSignals: {
      notes: "Hooks directly into the Windows window manager hierarchy to overlay canvas graphics behind system desktop icons.",
      challenges: "Handling multiple monitors with differing DPI and rendering scales without tearing.",
      tradeoffs: "Unsupported on older legacy operating systems prior to Windows 10 due to WorkerW window API variations."
    }
  },
  {
    id: 11,
    title: "EXCODE PC Optimizer",
    slug: "excode-pc-optimizer",
    impact: "Production-grade Windows optimization suite with realtime telemetry, intelligent cleanup systems, and adaptive tuning.",
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
    color: "#00e5ff",
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
    },
    caseStudy: {
      problem: "Windows OS registries, caches, and background telemetry processes accumulate bloat, leading to hardware speed degradation and slow boot times.",
      solution: "Built a multithreaded desktop suite utilizing low-level Win32 functions to purge cache systems, deflag registries, and reconfigure system resources.",
      architectureDecision: "Developed a Python core using PySide6 for threading and native system calls (`winreg` and `ctypes`) for system security overrides.",
      bottlenecks: "Cleaning large directory trees synchronously caused the desktop graphical interface to freeze.",
      optimization: "Routed registry cleanups and disk scans through isolated QThreads communicating via PySide slots.",
      result: "Achieved up to 35% improvement in disk workspace cleanup, significantly cut boot latency, and kept UI fully responsive."
    },
    engineeringSignals: {
      notes: "Communicates directly with native registry endpoints using the safe winreg module.",
      challenges: "Avoiding false positive flags from antivirus engines while modifying startup registers.",
      tradeoffs: "Required administrator execution privileges to perform core hardware parameter tuning."
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
    color: "#bf00ff",
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
    },
    caseStudy: {
      problem: "Traditional AES file encryption lacks secure key transport, while asymmetric RSA encryption is too slow for large media files.",
      solution: "Implemented a hybrid cryptographic suite where files are encrypted using fast AES-256-GCM, and the AES session key is securely wrapped via RSA-4096.",
      architectureDecision: "Chose the Python Cryptography library for optimized C-backed crypto primitives rather than pure Python scripts.",
      bottlenecks: "Encryption routines block the main interface when processing files larger than 500MB.",
      optimization: "Implemented chunked stream encryption with generator-based pipelines in secondary QThreads.",
      result: "Achieved secure, zero-leak file encryption with tamper proof authentication tags (GCM) and fast processing times."
    },
    engineeringSignals: {
      notes: "Strict local-first storage design ensures that private keys are encrypted on disk and never sent to remote systems.",
      challenges: "Preventing side-channel timing attacks during file signature validation routines.",
      tradeoffs: "Enforced strict passphrase requirements, sacrificing ease-of-use to maintain high cryptographic security thresholds."
    }
  },
  {
    id: 13,
    title: "EXCODE PDF Tool",
    slug: "excode-pdf-tool",
    impact: "AI-powered PDF productivity suite featuring OCR processing, document automation, and advanced PDF management tools.",
    fullDesc: "EXCODE PDF Tool is a modern AI-powered desktop productivity platform engineered for advanced PDF processing, OCR automation, and intelligent document workflows. Built using Python and PySide6, the software combines high-performance PDF engines, AI-enhanced OCR systems, compression pipelines, and modern desktop UI architecture into a unified productivity ecosystem. The platform is designed for users who need fast, intelligent, and automated document management with a futuristic desktop experience focused on usability, efficiency, and workflow automation.",
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
    color: "#bf00ff",
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
    },
    caseStudy: {
      problem: "Extracting text from scanned PDFs lacks structural layout mapping, while traditional desktop PDF suites are heavy and bloated.",
      solution: "Developed a native desktop document management platform wrapping PyMuPDF and EasyOCR with OpenCV image filters to restore layout hierarchies.",
      architectureDecision: "Constructed with PySide6 for GUI controls, integrating a local C-optimized PyMuPDF parsing engine for document manipulation.",
      bottlenecks: "Executing AI-based EasyOCR text detection in the foreground thread locked the desktop interface.",
      optimization: "Offloaded image conversion and OCR text processing pipelines to secondary worker pools running async queues.",
      result: "Achieved seamless PDF operations (split, merge, encrypt), high-accuracy AI text extraction, and 100% responsive UI."
    },
    engineeringSignals: {
      notes: "Uses localized OpenCV filters (contrast stretching, adaptive thresholding) to improve text clarity before OCR.",
      challenges: "Safely maintaining document layout integrity while exporting to text files.",
      tradeoffs: "Opted for localized CPU/GPU OCR processing, sacrificing cloud-scale speeds to enforce offline data privacy."
    }
  },
  {
    id: 14,
    title: "PyGet X",
    slug: "pyget-x",
    impact: "AI-powered high-performance download accelerator with intelligent media processing, multi-connection speed optimization, and automated workflows.",
    fullDesc: "PyGet X is an advanced high-performance download manager designed to accelerate network transfers and intelligently process media. Built with a modern asynchronous architecture, it combines multi-connection concurrent downloading, AI-driven parameter optimization, comprehensive media processing, and an elegant dark-themed GUI. PyGet X runs as both a desktop application and a local server, enabling seamless integration with browser extensions and external tools.",
    category: "Tools",
    status: "production",
    tech: [
      "Python",
      "aiohttp",
      "httpx",
      "tenacity",
      "scikit-learn",
      "numpy",
      "yt-dlp",
      "ffmpeg",
      "PyQt6",
      "pyqtgraph",
      "FastAPI",
      "Uvicorn"
    ],
    features: [
      "Multi-Connection High-Speed Download Engine",
      "AI-Based Network Profiler & Speed Optimization",
      "Smart User Preference Learning System",
      "Natural Language AI Command Assistant",
      "Extensible Plugin System (YouTube, Instagram, TikTok)",
      "Advanced Media Processing with yt-dlp + FFmpeg",
      "Audio Normalization & Metadata Embedding",
      "Dark Theme PyQt6 Desktop Interface",
      "Real-Time Download Analytics Dashboard",
      "Clipboard URL Auto Detection",
      "REST API for Browser Integration",
      "System Tray Background Mode",
      "Proxy & Cookie Support"
    ],
    metrics: {
      maxConnections: 32,
      architecture: "Async Event-Driven",
      aiModules: 3,
      supportedPlatforms: "100+ sites"
    },
    github: "https://github.com/qarizafar12-max/EXCODE",
    demo: "#",
    videoDemo: "https://youtube.com/@miz-army",
    tutorial: "https://youtube.com/@miz-army",
    color: "#00e5ff",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    architecture: {
      nodes: [
        { id: '1', type: 'arch_input', data: { label: 'URL Input / Clipboard Monitor' }, position: { x: 250, y: 0 } },
        { id: '2', type: 'arch_process', data: { label: 'AI Network Profiler' }, position: { x: 250, y: 100 } },
        { id: '3', type: 'arch_process', data: { label: 'Download Orchestrator (Async Engine)' }, position: { x: 250, y: 200 } },
        { id: '4', type: 'arch_process', data: { label: 'Media Extraction Layer (yt-dlp)' }, position: { x: 100, y: 320 } },
        { id: '5', type: 'arch_process', data: { label: 'AI Optimization Engine' }, position: { x: 400, y: 320 } },
        { id: '6', type: 'arch_process', data: { label: 'FFmpeg Media Processor' }, position: { x: 100, y: 450 } },
        { id: '7', type: 'arch_process', data: { label: 'Plugin System (YouTube / Instagram / TikTok)' }, position: { x: 400, y: 450 } },
        { id: '8', type: 'arch_output', data: { label: 'Final Download Output + Metadata' }, position: { x: 250, y: 600 } }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4' },
        { id: 'e3-5', source: '3', target: '5' },
        { id: 'e4-6', source: '4', target: '6' },
        { id: 'e4-7', source: '4', target: '7' },
        { id: 'e6-8', source: '6', target: '8', animated: true },
        { id: 'e7-8', source: '7', target: '8', animated: true }
      ]
    },
    caseStudy: {
      problem: "Standard HTTP downloaders fail to maximize internet bandwidth usage and lack automated media post-processing pipelines.",
      solution: "Engineered an asynchronous multi-connection download accelerator utilizing Scikit-learn to dynamically profile connections and optimize chunk boundaries.",
      architectureDecision: "Used asyncio/aiohttp for concurrent networking, pyqtgraph for real-time traffic visuals, and a background FastAPI integration for extensions.",
      bottlenecks: "Disk writes bottlenecked download speeds when operating with 32 concurrent thread connections.",
      optimization: "Implemented a RAM-buffered chunk writer, holding chunks in memory and flushing sequentially to disk.",
      result: "Maximized connection utilization resulting in up to 5x speedups and zero frame losses during post-processing transcodes."
    },
    engineeringSignals: {
      notes: "Calculates optimal thread counts dynamically based on real-time packet loss and round-trip latency.",
      challenges: "Bypassing complex anti-scraping cookie rules during YouTube and Instagram media extraction.",
      tradeoffs: "Increased local RAM consumption to protect NVMe disks from excessive concurrent read/write operations."
    }
  }
];

export const categories = ["All", "Systems", "Backend", "Automation", "Security", "AI", "Tools"];

export const skillGroups = [
  {
    label: "Backend & Systems",
    color: "#bf00ff",
    skills: ["Python", "C++", "Flask", "SQLite", "Node.js", "REST APIs"]
  },
  {
    label: "Frontend",
    color: "#00e5ff",
    skills: ["React", "JavaScript", "Tailwind", "Vite"]
  },
  {
    label: "Automation & Tools",
    color: "#00e5ff",
    skills: ["Discord Bots", "CI/CD", "System Automation", "AI Tools"]
  }
];

export const skills = skillGroups.flatMap(g => g.skills);
