import React, { useState } from 'react';
import { Globe, Monitor, Bot, Cpu, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';

export default function InteractiveServices({ onOpenContact, setActiveTheme }) {
  const [activeTab, setActiveTab] = useState('web');

  const services = {
    web: {
      id: 'web',
      name: 'WEB DEVELOPMENT',
      shortName: 'WEB',
      icon: Globe,
      themeKey: 'default',
      tagline: 'Modern, high-performance web systems and digital platforms.',
      items: [
        { title: 'Business Websites', desc: 'Custom enterprise websites built for high conversion.' },
        { title: 'Web Applications', desc: 'Interactive SaaS and full-stack web applications.' },
        { title: 'Dashboards & Portals', desc: 'Real-time data visualization and operational management tools.' },
        { title: 'E-Commerce Systems', desc: 'Custom online stores with payment gateways and order sync.' },
      ],
    },
    desktop: {
      id: 'desktop',
      name: 'DESKTOP APPLICATIONS',
      shortName: 'DESKTOP',
      icon: Monitor,
      themeKey: 'desktop',
      tagline: 'Tailored Windows software engineered around your specific workflow.',
      items: [
        { title: 'Business Software', desc: 'Dedicated native Windows tools for daily operations.' },
        { title: 'Productivity Tools', desc: 'Custom utilities, download managers, and file manipulators.' },
        { title: 'Management Systems', desc: 'Local shop POS, inventory, and database management.' },
        { title: 'Native GUI Apps', desc: 'High-performance desktop interfaces with PySide6 & Qt.' },
      ],
    },
    ai: {
      id: 'ai',
      name: 'AI & MACHINE LEARNING',
      shortName: 'AI / ML',
      icon: Bot,
      themeKey: 'ai',
      tagline: 'Practical AI-powered applications and automated intelligence.',
      items: [
        { title: 'AI Tools & Utilities', desc: 'Custom AI desktop apps and web toolkits.' },
        { title: 'Machine Learning Models', desc: 'Data classification, prediction, and pattern recognition.' },
        { title: 'Intelligent Automation', desc: 'Automated processing driven by AI models.' },
        { title: 'Data Processing Pipelines', desc: 'Parsing, cleaning, and analyzing complex datasets.' },
      ],
    },
    automation: {
      id: 'automation',
      name: 'AUTOMATION SYSTEMS',
      shortName: 'AUTOMATION',
      icon: Cpu,
      themeKey: 'default',
      tagline: 'Turn repetitive manual processes into automated background workflows.',
      items: [
        { title: 'Business Process Automation', desc: 'Eliminate manual data entry and report generation.' },
        { title: 'API Integrations', desc: 'Connect third-party tools into a synchronized pipeline.' },
        { title: 'Data Extraction Bots', desc: 'Web scrapers, monitoring scripts, and document parsers.' },
        { title: 'Discord & Community Automation', desc: 'Custom management bots and webhook triggers.' },
      ],
    },
    ecommerce: {
      id: 'ecommerce',
      name: 'E-COMMERCE SOLUTIONS',
      shortName: 'E-COMMERCE',
      icon: ShoppingCart,
      themeKey: 'default',
      tagline: 'Professional online store experiences designed to scale sales.',
      items: [
        { title: 'Custom Online Stores', desc: 'Fast, responsive shopping cart platforms.' },
        { title: 'Inventory Sync', desc: 'Automated product inventory and stock management.' },
        { title: 'Payment Gateways', desc: 'Seamless, secure checkout with global payment providers.' },
        { title: 'Order Tracking', desc: 'Real-time order processing and customer updates.' },
      ],
    },
  };

  const handleSelect = (key) => {
    setActiveTab(key);
    if (setActiveTheme) {
      setActiveTheme(services[key].themeKey);
    }
  };

  const activeService = services[activeTab];

  return (
    <section id="services" className="relative z-10 py-32 bg-[#050811]/95 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            INTERACTIVE CAPABILITY MATRIX
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            WHAT I <span className="text-gradient-cyan">BUILD</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hover or click any capability node below to explore the digital solution space.
          </p>
        </div>

        {/* Spatial Node Selector Hub */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.keys(services).map((key) => {
            const srv = services[key];
            const isActive = activeTab === key;
            const Icon = srv.icon;

            return (
              <button
                key={key}
                onMouseEnter={() => handleSelect(key)}
                onClick={() => handleSelect(key)}
                className={`group relative px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-cyan-500 text-black shadow-xl shadow-cyan-500/30 scale-105 font-extrabold'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-cyan-400'}`} />
                <span>{srv.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Service Scene Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-500/30 shadow-2xl transition-all duration-500 min-h-[380px] flex flex-col justify-between">
          
          {/* Header of Active Service */}
          <div className="border-b border-slate-800/80 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                SELECTED DISCIPLINE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                {activeService.name}
              </h3>
            </div>

            <p className="text-slate-300 text-sm max-w-md italic">
              "{activeService.tagline}"
            </p>
          </div>

          {/* 4 Interactive Capability Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {activeService.items.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-2 group"
              >
                <div className="text-cyan-400 font-mono text-xs font-bold">
                  0{idx + 1}.
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Need a solution in {activeService.shortName}? Let's construct it around your workflow.
            </span>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Discuss {activeService.shortName} Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
