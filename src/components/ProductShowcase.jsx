import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Layers, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProductShowcase({ onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const products = [
    {
      id: 'pyget-x',
      name: 'PyGet X',
      tagline: 'A modern download experience.',
      explanation: 'Native multi-threaded download manager engineered for high-speed file transfers and stream extraction.',
      category: 'Desktop Application',
      image: '/images/pyget_x.png',
      tags: ['Python', 'PySide6', 'FFmpeg'],
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
      tagline: 'Professional PDF management engineered.',
      explanation: 'High-performance document suite for page manipulation, merging, optical page reordering, and lossless compression.',
      category: 'Desktop Application',
      image: '/images/excode_pdf.png',
      tags: ['Python', 'PySide6', 'PDF Engine'],
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
      tagline: 'Real-time operational business intelligence.',
      explanation: 'Comprehensive web-based inventory control, point-of-sale receipt printing, and daily profit analytics dashboard.',
      category: 'Web System',
      image: '/images/shop_management.png',
      tags: ['Flask', 'Python', 'SQLite'],
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
      tagline: 'Automated community operations.',
      explanation: 'Enterprise bot architecture for automated verification, anti-raid security, and custom role synchronization.',
      category: 'Automation System',
      image: '/images/discord_management.png',
      tags: ['Python', 'Discord API'],
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
    <section id="projects" className="relative z-10 py-32 bg-[#030509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-slate-900/80 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              SOFTWARE PRODUCTS & SOLUTIONS
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
              FEATURED <span className="text-gradient-cyan">PRODUCTS</span>
            </h2>

            <p className="text-slate-400 text-base">
              Actual software systems engineered for real-world business utility and daily performance.
            </p>
          </div>
        </div>

        {/* Product Cards Grid - Floating Mockup Focus */}
        <div className="space-y-16">
          {products.map((prod, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={prod.id}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20 shadow-2xl hover:border-cyan-500/40 transition-all duration-500 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Floating Product Screenshot in Space */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 group-hover:scale-[1.02] group-hover:shadow-cyan-500/20 transition-all duration-500">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-auto object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-60" />
                      
                      <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-slate-950/90 border border-cyan-500/30 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md">
                        {prod.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Narrative & CTA */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                      FEATURED SOFTWARE
                    </span>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-lg font-semibold text-cyan-400 italic mt-1">
                        "{prod.tagline}"
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {prod.explanation}
                    </p>

                    {/* Hidden/Subtle Tech tag drawer */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block mb-2">
                        Engineered with:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {prod.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-800">
                      <button
                        onClick={() => setSelectedProject(prod)}
                        className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        Explore Project
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
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
