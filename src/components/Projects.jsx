import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'pyget-x',
      name: 'PyGet X',
      explanation: 'Modern desktop download management software.',
      tags: ['Python', 'PySide6', 'FFmpeg'],
      image: '/images/pyget_x.png',
      category: 'Desktop Software',
      features: [
        'Multi-segment accelerated downloading',
        'FFmpeg audio/video stream merging',
        'Custom dark theme with PySide6',
        'Download queue & speed throttling',
        'Automatic file organization',
      ],
    },
    {
      id: 'excode-pdf',
      name: 'EXCODE PDF Tool',
      explanation: 'Professional PDF management software.',
      tags: ['Python', 'PySide6', 'PDF'],
      image: '/images/excode_pdf.png',
      category: 'Desktop Software',
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
      explanation: 'Business management software for daily operations.',
      tags: ['Flask', 'Python', 'SQLite'],
      image: '/images/shop_management.png',
      category: 'Web System',
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
      explanation: 'Custom automation and management tools for Discord communities.',
      tags: ['Python', 'Discord API'],
      image: '/images/discord_management.png',
      category: 'Automation Tool',
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
    <section id="projects" className="relative z-10 py-24 bg-[#05070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              PORTFOLIO & CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Built to Solve <span className="text-gradient-cyan">Real Problems.</span>
            </h2>
            <p className="text-slate-400 text-base">
              Practical, production-grade applications engineered for performance and real business utility.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/5 px-4 py-2 rounded-xl border border-cyan-500/15">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>4 Featured Engineering Solutions</span>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-interactive rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 hover:border-cyan-500/40"
            >
              {/* Project Mockup Screenshot */}
              <div className="relative w-full h-60 sm:h-64 bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101C] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono font-medium text-cyan-300">
                  {project.category}
                </span>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.explanation}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all cursor-pointer"
                    aria-label={`View ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
