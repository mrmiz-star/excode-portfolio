import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import AllFaqsModal from './AllFaqsModal';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);

  const faqs = [
    {
      question: 'Can you build custom software for my business?',
      answer: 'Yes. If you have a business problem that could be solved with software, we can discuss the requirements and determine the right solution.',
    },
    {
      question: 'Can you build Windows desktop applications?',
      answer: 'Yes. Custom Windows applications can be developed around your workflow, features, database, and operational requirements.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes. Projects from Pakistan and international clients are welcome.',
    },
    {
      question: 'Can you work on an existing project?',
      answer: "Yes. Existing applications can be reviewed, improved, maintained, or extended depending on the project's technology and condition.",
    },
    {
      question: 'How much does a project cost?',
      answer: "Every project is different. After understanding your requirements, you'll receive a clear scope, timeline, and quotation before development begins.",
    },
    {
      question: 'How long does development take?',
      answer: "The timeline depends on the project's scope and complexity. A timeline and milestones will be discussed before development starts.",
    },
    {
      question: 'How do I start?',
      answer: "Simply tell me what you're trying to build or what problem you're trying to solve. You don't need to know the technical solution. That's my job.",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-28 bg-[#050811] border-t border-slate-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            ANSWERS TO YOUR <span className="text-gradient-cyan">QUESTIONS</span>
          </h2>
        </div>

        {/* 7 Interactive Accordion Cards */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
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

        {/* Start a Project CTA */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Have More Questions? Start a Conversation →</span>
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
