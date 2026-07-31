import React, { useState, useEffect } from 'react';
import { X, Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function AllFaqsModal({ onClose, onOpenContact }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const categories = ['All', 'Services & Tech', 'Pricing & Process', 'Desktop & AI', 'Support & Maintenance'];

  const allFaqs = [
    // 5-6 Home FAQs
    {
      category: 'Services & Tech',
      question: 'What services do you offer?',
      answer: 'I provide web development, desktop applications, AI/ML solutions, automation, e-commerce, and custom software development.',
    },
    {
      category: 'Services & Tech',
      question: 'Do you work with international clients?',
      answer: 'Yes. I work with both local and international clients across multiple time zones.',
    },
    {
      category: 'Pricing & Process',
      question: 'Can you build a completely custom solution?',
      answer: "Yes. You can bring an idea, business problem, or specific requirements, and I'll help turn them into a working solution.",
    },
    {
      category: 'Services & Tech',
      question: 'Can you work on an existing project?',
      answer: 'Yes. I can fix bugs, improve existing software, add features, or continue development.',
    },
    {
      category: 'Pricing & Process',
      question: 'How much does a project cost?',
      answer: "Pricing depends on the project's features, complexity, and requirements. Contact me for a custom quote.",
    },
    {
      category: 'Pricing & Process',
      question: 'How do I start a project?',
      answer: "Simply tell me what you want to build. We'll discuss the requirements, timeline, and budget before development begins.",
    },

    // Extended 14 Questions for complete 20 FAQ list
    {
      category: 'Desktop & AI',
      question: 'What programming languages and frameworks do you use?',
      answer: 'My primary stack includes Python (PySide6, Flask, FastAPI, PyTorch/TensorFlow), JavaScript/TypeScript (React, Next.js, Vite), SQL/NoSQL databases, and cloud APIs.',
    },
    {
      category: 'Desktop & AI',
      question: 'Can you build Windows desktop software with a GUI?',
      answer: 'Yes. I build modern native Windows applications using Python and PySide6/Qt with high-performance C++ extensions or FFmpeg bindings when required.',
    },
    {
      category: 'Desktop & AI',
      question: 'How do AI/ML solutions integrate into existing systems?',
      answer: 'AI tools can be embedded directly as local desktop utilities, integrated via secure REST/gRPC API endpoints, or set up as backend background worker services.',
    },
    {
      category: 'Services & Tech',
      question: 'Will my website or web app be mobile-friendly?',
      answer: 'Absolutedly. Every web solution is designed fully mobile-first, ensuring responsive, fast performance on mobile devices, tablets, and desktops.',
    },
    {
      category: 'Pricing & Process',
      question: 'What is the typical timeline for a project?',
      answer: 'Small utility scripts or landing pages take 3–7 days. Medium custom web apps or desktop tools take 2–4 weeks. Complex enterprise systems are milestone-based.',
    },
    {
      category: 'Pricing & Process',
      question: 'Do you require upfront payment?',
      answer: 'Standard projects operate on a milestone structure (e.g., 50% initial deposit to begin design & architecture, 50% upon final testing and delivery).',
    },
    {
      category: 'Support & Maintenance',
      question: 'Who owns the final source code and IP?',
      answer: 'You own 100% of the custom source code, documentation, and intellectual property upon completion of final payment.',
    },
    {
      category: 'Support & Maintenance',
      question: 'Do you offer ongoing technical maintenance?',
      answer: 'Yes. I offer retainer options for ongoing updates, security patches, feature additions, and server infrastructure monitoring.',
    },
    {
      category: 'Support & Maintenance',
      question: 'What happens if a bug is found after launch?',
      answer: 'All projects include a complimentary post-launch warranty period where any bugs or unexpected behavior are fixed promptly at zero additional cost.',
    },
    {
      category: 'Services & Tech',
      question: 'Can you build custom E-Commerce store features?',
      answer: 'Yes. I build custom store interfaces, automated order management pipelines, payment gateway integrations (Stripe, PayPal, local payments), and inventory sync.',
    },
    {
      category: 'Desktop & AI',
      question: 'Can you automate repetitive daily manual work?',
      answer: 'Yes. Using custom Python web scrapers, API integrations, and workflow bots, I automate data entry, file conversions, email reports, and database updates.',
    },
    {
      category: 'Pricing & Process',
      question: 'How do we communicate during project development?',
      answer: 'We use direct communication via Discord, Telegram, Email, or WhatsApp with regular progress videos and live demo links.',
    },
    {
      category: 'Support & Maintenance',
      question: 'Can you assist with domain registration and server hosting?',
      answer: 'Yes. I guide you through choosing cost-effective hosting (Vercel, DigitalOcean, AWS, VPS) and handle complete production deployment.',
    },
    {
      category: 'Services & Tech',
      question: 'What if I am not sure about technical requirements?',
      answer: 'That is completely fine! You bring the problem or idea, and MR MIZ will propose the exact architecture, tech stack, and step-by-step plan.',
    },
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 bg-[#060912] flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              COMPLETE KNOWLEDGE BASE (20 FAQS)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              All Frequently Asked Questions
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer"
          >
            <X className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 bg-[#080D1A] border-b border-slate-800 space-y-4 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions or keywords (e.g. desktop, pricing, Python, timeline)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1 custom-scrollbar">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found. Ask MR MIZ directly!
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="glass-card-interactive rounded-xl border border-slate-800/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2">
                      <span className="text-cyan-500 font-mono text-xs">Q.</span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3 bg-cyan-500/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#060912] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-slate-400">
            Have a specific question not answered here?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          >
            Ask MR MIZ Directly →
          </button>
        </div>
      </div>
    </div>
  );
}
