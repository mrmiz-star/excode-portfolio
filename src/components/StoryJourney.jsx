import React, { useState } from 'react';
import { ArrowRight, Compass, Code, Rocket, Sparkles, Building2, HelpCircle } from 'lucide-react';

export default function StoryJourney({ onOpenContact }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      id: 'curious',
      number: '01',
      stage: 'CURIOUS',
      quote: '"How does this work?"',
      desc: 'Driven by intense curiosity to understand core architecture from first principles.',
      detail: 'Investigating how software systems, APIs, and algorithms function under the hood.',
      icon: Compass,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    },
    {
      id: 'learning',
      number: '02',
      stage: 'LEARNING',
      quote: 'Python • Web • Software • AI',
      desc: 'Mastering modern technology stacks, desktop frameworks, and machine learning principles.',
      detail: 'Translating concepts into fluent engineering capabilities and clean code patterns.',
      icon: Code,
      color: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    },
    {
      id: 'building',
      number: '03',
      stage: 'BUILDING',
      quote: 'Real applications and tools',
      desc: 'Constructing production-ready tools, desktop downloaders, and management systems.',
      detail: 'Moving from raw code snippets to full-fledged functional software products.',
      icon: Rocket,
      color: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    },
    {
      id: 'creating',
      number: '04',
      stage: 'CREATING',
      quote: 'Products and solutions',
      desc: 'Engineering practical digital solutions that solve tangible operational problems.',
      detail: 'Refining user experience, speed performance, and reliability.',
      icon: Sparkles,
      color: 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
    },
    {
      id: 'excode',
      number: '05',
      stage: 'EXCODE',
      quote: 'Building technology for others',
      desc: 'Establishing EXCODE Corporation as a technology brand for business software.',
      detail: 'Delivering web, desktop, and AI solutions directly to clients globally.',
      icon: Building2,
      color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/15',
    },
    {
      id: 'your-idea',
      number: '06',
      stage: 'YOUR IDEA',
      quote: 'What should we build next?',
      desc: 'Your project concept turned into custom, production-grade software.',
      detail: 'Direct developer partnership with clear milestones and direct communication.',
      icon: HelpCircle,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/15',
      isFinal: true,
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section className="relative z-10 py-32 bg-[#030509] border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            STORYTELLING THROUGH DESIGN
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            THE <span className="text-gradient-cyan">JOURNEY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click or navigate through each phase of evolution—from initial curiosity to your next software idea.
          </p>
        </div>

        {/* 6 Stage Timeline Selector */}
        <div className="relative mb-16">
          
          {/* Progress Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {stages.map((stg, idx) => {
              const isActive = activeStageIndex === idx;
              const Icon = stg.icon;

              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-32 group ${
                    isActive
                      ? 'bg-[#091325] border-cyan-400 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/20 scale-105'
                      : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {stg.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-cyan-400'}`} />
                  </div>

                  <div>
                    <span className={`block text-xs font-mono font-extrabold uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {stg.stage}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Dynamic Display Panel for Active Stage */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl transition-all duration-500 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                STAGE {currentStage.number} // {currentStage.stage}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight italic">
                {currentStage.quote}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {currentStage.desc}
              </p>

              <p className="text-xs font-mono text-slate-400">
                {currentStage.detail}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              {currentStage.isFinal ? (
                <button
                  onClick={onOpenContact}
                  className="w-full py-4 px-6 text-xs font-extrabold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-2xl shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Start Your Idea →
                </button>
              ) : (
                <button
                  onClick={() => setActiveStageIndex((activeStageIndex + 1) % stages.length)}
                  className="w-full py-3.5 px-6 text-xs font-mono font-bold text-cyan-300 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
