import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import AllFaqsModal from './AllFaqsModal';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);

  const homeFaqs = [
    {
      question: 'Can you build a custom website?',
      answer: 'Yes. I build custom websites, web applications, dashboards, business portals, and e-commerce platforms designed around your specific requirements.',
    },
    {
      question: 'Can you build Windows software?',
      answer: 'Yes. I build custom native Windows desktop applications using Python and PySide6/Qt with multi-threaded performance and clean interfaces.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes. I work with both local and international clients across multiple time zones.',
    },
    {
      question: 'Can you work on an existing project?',
      answer: 'Yes. I can fix bugs, improve existing software, add new features, refactor codebases, or continue ongoing development.',
    },
    {
      question: 'How much does a project cost?',
      answer: 'Pricing depends on the project features, complexity, and timeline. Contact me with your requirements for a direct, clear quote.',
    },
    {
      question: 'How do I start?',
      answer: 'Simply send me your project idea or business requirements. We will discuss the features, timeline, and budget before development begins.',
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-32 bg-[#050811] border-t border-slate-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            CLEAR CONVERSION ANSWERS
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            QUESTIONS YOU <span className="text-gradient-cyan">MIGHT HAVE</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Click any question below to inspect the answer.
          </p>
        </div>

        {/* 6 Interactive Accordion Cards */}
        <div className="space-y-4 mb-12">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`glass-card-interactive rounded-2xl transition-all border ${
                  isOpen
                    ? 'border-cyan-500/40 bg-[#091325]'
                    : 'border-slate-800/80 bg-slate-900/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="text-cyan-400 font-mono text-sm">0{index + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 bg-cyan-500/5 rounded-b-2xl animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See All Questions CTA */}
        <div className="text-center">
          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-all shadow-xl cursor-pointer"
          >
            <span>See All Questions</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>

      {/* Modal */}
      {showAllModal && (
        <AllFaqsModal
          onClose={() => setShowAllModal(false)}
          onOpenContact={onOpenContact}
        />
      )}
    </section>
  );
}
