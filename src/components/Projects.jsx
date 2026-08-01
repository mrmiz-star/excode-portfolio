import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const pygetXData = {
    id: 'pyget-x',
    name: 'PyGet X',
    tagline: 'Modern Windows Download Manager',
    category: 'Windows Desktop Software',
    brand: 'EXCODE Corporation Flagship Software',
    explanation: 'A modern Windows download manager built with a multi-threaded download engine, download queues, resume support, browser integration, real-time statistics, and HWID-based licensing.',
    tags: ['Python', 'PySide6', 'FFmpeg'],
    image: '/images/pyget_x.png',
    productUrl: 'https://pygetx.com',
    features: [
      'Multi-threaded download engine',
      'Download queue management',
      'Resume support',
      'Browser extension integration',
      'Real-time download statistics',
      'HWID-based licensing',
      'Modern Windows interface',
    ],
  };

  const moreProjects = [
    {
      id: 'excode-pdf',
      name: 'EXCODE PDF Tool',
      category: 'Windows Desktop Software',
      explanation: 'Professional PDF management software designed to simplify common PDF workflows.',
      tags: ['Python', 'PySide6', 'PDF Processing'],
      image: '/images/excode_pdf.png',
      features: [
        'Instant page split, merge, & rotate',
        'Visual page thumbnail grid reordering',
        'Lossless file compression engine',
        'Encrypted PDF batch processing',
        'Clean native Windows UI',
      ],
    },
    {
      id: 'shop-management',
      name: 'Shop Management System',
      category: 'Business Management Software',
      explanation: 'A business management system designed to help manage daily shop operations, records, inventory, and workflows.',
      tags: ['Python', 'Flask', 'SQLite'],
      image: '/images/shop_management.png',
      features: [
        'Real-time inventory level tracking',
        'Sales analytics & daily revenue graphs',
        'POS receipt generation & printing',
        'Customer purchase history database',
        'Automated low-stock alerts',
      ],
    },
    {
      id: 'discord-management',
      name: 'Discord Management System',
      category: 'Automation Software',
      explanation: 'Custom Discord automation and management tools designed for community administration and server workflows.',
      tags: ['Python', 'Discord API'],
      image: '/images/discord_management.png',
      features: [
        'Automated member verification & role sync',
        'Custom interactive bot commands',
        'Anti-spam and raid defense triggers',
        'Community activity analytics dashboard',
        'Webhook notification pipelines',
      ],
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-28 bg-[#030509] border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            PORTFOLIO & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built to Solve <span className="text-gradient-cyan">Real Problems.</span>
          </h2>
          <p className="text-slate-300 text-base">
            Here are some of the software projects I've designed and developed.
          </p>
        </div>

        {/* 1. FEATURED CASE STUDY: PyGet X */}
        <div className="mb-24">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl bg-gradient-to-b from-[#091021] to-[#050811] relative overflow-hidden group">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  {pygetXData.brand}
                </div>

                <div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {pygetXData.name}
                  </h3>
                  <p className="text-lg font-bold text-cyan-400 mt-1">
                    {pygetXData.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {pygetXData.explanation}
                </p>

                {/* Technology Line */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technology:</span>
                  {pygetXData.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Features Bullet Grid */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                    Product Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                    {pygetXData.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA: Direct Product Link + Details Modal */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://mrmiz-star.github.io/PYGETX-WEB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Explore PyGet X Product Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(pygetXData)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:border-cyan-500/40 rounded-full transition-all cursor-pointer"
                  >
                    <span>View Specifications</span>
                  </button>
                </div>

              </div>

              {/* Right Screenshot Showcase */}
              <div className="lg:col-span-6">
                <a
                  href="https://mrmiz-star.github.io/PYGETX-WEB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group-hover:border-cyan-500/50 transition-colors"
                >
                  <img
                    src={pygetXData.image}
                    alt="PyGet X Flagship Screenshot"
                    className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-50" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md">
                    FLAGSHIP PRODUCT WEBSITE →
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 2. MORE PROJECTS GRID */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase">
              More Projects
            </h3>
            <span className="text-xs font-mono text-cyan-400">Production Applications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card-interactive rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 hover:border-cyan-500/40 bg-slate-900/40"
              >
                {/* Project Screenshot */}
                <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101C] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono font-medium text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h4>

                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {project.explanation}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-cyan-400 bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all cursor-pointer"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={onOpenContact}
        />
      )}
    </section>
  );
}
