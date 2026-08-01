import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Home,
  FileText,
  Search,
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  AlertTriangle,
  Mail,
  MessageSquare,
  Globe,
  Share2,
  ChevronRight,
  Lock,
  EyeOff,
  Server
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('privacy-1');
  const [copied, setCopied] = useState(false);

  const email = 'excode53@gmail.com';
  const whatsapp = '+923080078400';
  const website = 'https://mrmiz-star.github.io/excode-portfolio/';

  const sections = [
    {
      id: 'privacy-1',
      title: '1. Privacy Commitment & Scope',
      content: `MR MIZ / EXCODE Corporation ("we", "us", or "our") deeply respects your privacy and is committed to protecting the personal and confidential business information you provide when accessing this website or communicating with us regarding software engineering services.

This Privacy Policy explains how we collect, process, protect, and retain your data when you visit our website, submit project inquiry forms, request technical proposals, or engage our development team.`,
    },
    {
      id: 'privacy-2',
      title: '2. Information We Collect',
      content: `We collect only information reasonably necessary to evaluate project requirements, communicate effectively, and deliver professional software solutions:

- **Contact Data:** Full name, business email address, WhatsApp/phone number, company name, geographic location, and communication preferences.
- **Project Requirements & Specs:** Functional briefs, system wireframes, technical documentation, API specifications, and business workflow requirements submitted during discussions.
- **Communication History:** Messages, emails, meeting notes, and feedback provided via email, WhatsApp, Discord, or web inquiry forms.
- **Technical & Usage Analytics:** Anonymous browser type, operating system, IP address, referral sources, and page interaction metrics collected via standard web analytics tools.`,
    },
    {
      id: 'privacy-3',
      title: '3. How We Use Your Information',
      content: `Your information is strictly used for legitimate software engineering and business management purposes:

- Responding to project inquiries, consultation requests, and technical questions.
- Preparing accurate project proposals, cost estimates, milestone plans, and architectural specifications.
- Managing ongoing software development, testing, staging deployments, and customer support.
- Processing invoices, milestone payments, and maintaining compliance records.
- Improving our portfolio website usability, performance, and security infrastructure.

We DO NOT sell, rent, lease, trade, or monetize your personal or project data to third-party marketers or data brokers under any circumstances.`,
    },
    {
      id: 'privacy-4',
      title: '4. Confidentiality of Client Project Data',
      content: `We understand that software projects often involve sensitive intellectual property, proprietary business logic, and private datasets.

- All documents, specs, database samples, or code shared during project discussions are treated as strictly confidential.
- Access to project data is restricted to core development team members assigned to your project.
- We recommend that clients do not transmit highly sensitive secrets (such as production database passwords, master private keys, or payment credentials) over general contact forms. Secure, encrypted credential vaults are provided for production handoffs.`,
    },
    {
      id: 'privacy-5',
      title: '5. Third-Party Integrations & Analytics',
      content: `This website and our deployed software solutions may interact with trusted third-party providers for hosting, communication, or analytics:

- **Communication Platforms:** WhatsApp, Discord, Email gateways (Mailgun, Gmail).
- **Hosting & Infrastructure:** GitHub Pages, Vercel, AWS, Firebase, Netlify.
- **Analytics & Fonts:** Google Fonts, anonymized web performance scripts.

Each third-party platform operates under its own independent privacy policy and security standards. We encourage you to review their respective policies.`,
    },
    {
      id: 'privacy-6',
      title: '6. Cookies & Tracking Technologies',
      content: `Our portfolio website uses minimal essential cookies and localized storage session technologies:

- **Essential Session Data:** Session cookies required to remember user interactions or UI preferences during navigation.
- **Analytics Cookies:** Anonymized aggregate metrics to understand traffic patterns and optimize load speeds.
- You can manage or disable cookies directly in your browser settings without affecting core website functionality.`,
    },
    {
      id: 'privacy-7',
      title: '7. Data Security Measures',
      content: `We enforce multi-layered administrative, technical, and physical safeguards to protect your personal data and project repositories against unauthorized access, loss, alteration, or disclosure:

- HTTPS / SSL encryption for all web communications and repository transfers.
- Two-factor authentication (2FA) enforced on development accounts and cloud infrastructure.
- Secure environment variable isolation for API keys, secret credentials, and database tokens.
- Regular security patches, dependency audits, and access code revoking upon project handoff.`,
    },
    {
      id: 'privacy-8',
      title: '8. Data Retention & Archiving',
      content: `We retain client information and project files only for as long as necessary to fulfill project requirements, provide ongoing support, maintain warranty compliance, and satisfy legal accounting obligations.

Clients may request complete archival or deletion of non-essential project contact records from our active communication databases upon project completion.`,
    },
    {
      id: 'privacy-9',
      title: '9. International Data Transfers',
      content: `As EXCODE Corporation serves clients globally across various jurisdictions, information submitted through our site may be processed on servers located in different regions (e.g., US, Europe, Asia) depending on host infrastructure.

We ensure that cloud providers adhere to recognized international data protection and privacy standards.`,
    },
    {
      id: 'privacy-10',
      title: '10. Your Data Rights & Control',
      content: `Depending on your location and applicable privacy laws (such as GDPR or CCPA), you hold rights regarding your personal data:

- **Access & Correction:** Request a copy of the personal data we hold about you or request corrections to inaccurate details.
- **Deletion ("Right to be Forgotten"):** Request deletion of your personal contact records where processing is no longer required for active contractual obligations.
- **Opt-Out:** Unsubscribe from operational updates or promotional communications at any time.`,
    },
    {
      id: 'privacy-11',
      title: '11. Policy Updates & Contact Details',
      content: `We may update this Privacy Policy periodically to reflect technological enhancements, legal requirement updates, or changes in our software services. Updates will be posted on this page with a revised "Last Updated" timestamp.

For privacy inquiries, data access requests, or security questions, please contact our lead engineering team using any of the official methods below.`,
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Top Banner Navigation Bar */}
      <div className="sticky top-0 z-40 bg-[#070B14]/90 backdrop-blur-xl border-b border-cyan-500/20 px-4 py-3 shadow-xl shadow-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Breadcrumb with Hashtag Home Link (#home) */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all font-semibold"
            >
              <Home className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>#home</span>
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400 font-medium">Privacy Policy</span>
          </div>

          {/* Quick Route Switcher & Share */}
          <div className="flex items-center gap-3">
            <a
              href="#terms"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Switch to</span> Terms of Use
            </a>
            
            <button
              onClick={copyPageLink}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all cursor-pointer"
              title="Copy Page Link"
              aria-label="Copy Page Link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            {copied && (
              <span className="text-[10px] font-mono text-cyan-400 animate-fadeIn">
                Copied!
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Hero Header Section */}
      <header className="relative pt-12 pb-16 border-b border-slate-800/80 bg-gradient-to-b from-[#080E1C] via-[#05070B] to-[#05070B] overflow-hidden">
        {/* Glow ambient effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>EXCODE Data Protection • Privacy Standards</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Privacy Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Data Security</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                How <strong>EXCODE Corporation / MR MIZ</strong> collects, protects, processes, and respects your business information, intellectual property, and communication data.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  We Never Sell Your Data
                </span>
                <span>•</span>
                <span>Last Updated: August 1, 2026</span>
                <span>•</span>
                <span>Version 2.4</span>
              </div>
            </div>

            {/* Back to Home CTA Card */}
            <div className="shrink-0">
              <a
                href="#home"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Return to Portfolio Home</span>
              </a>
            </div>

          </div>

          {/* Key Guarantee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-[#0A0F1D] border border-cyan-500/20 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">SSL Encrypted</h4>
                <p className="text-[11px] text-slate-400">Secure end-to-end data transfer</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A0F1D] border border-emerald-500/20 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Strict Confidentiality</h4>
                <p className="text-[11px] text-slate-400">Zero data sharing or monetization</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A0F1D] border border-blue-500/20 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Clean Infrastructure</h4>
                <p className="text-[11px] text-slate-400">Isolated environment credentials</p>
              </div>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-8 relative max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search privacy topics (e.g. cookies, security, analytics, retention)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#0B101D] border border-cyan-500/20 rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-[11px] font-mono text-cyan-400">
                Found {filteredSections.length} matching clause(s) for "{searchQuery}"
              </p>
            )}
          </div>

        </div>
      </header>

      {/* Main Page Body with Sidebar & Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-20 bg-[#0A0F1D] border border-cyan-500/20 rounded-3xl p-6 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Table of Contents
                </h3>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                  {sections.length} Topics
                </span>
              </div>

              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    className={`block px-3 py-2 rounded-xl transition-all font-medium ${
                      activeSection === sec.id
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold pl-4'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <a
                  href="#home"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all"
                >
                  <Home className="w-3.5 h-3.5 text-cyan-400" />
                  Go to Portfolio Home
                </a>

                <a
                  href="#terms"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read Terms of Use
                </a>
              </div>

            </div>
          </aside>

          {/* Right Column: Detailed Document Sections */}
          <div className="lg:col-span-8 space-y-8">
            
            {filteredSections.length === 0 ? (
              <div className="p-12 text-center bg-[#0A0F1D] border border-dashed border-slate-800 rounded-3xl space-y-4">
                <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">No topics found</h3>
                <p className="text-xs text-slate-400">
                  No privacy policy sections matched your search query "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-bold text-black bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="bg-[#0A0F1D] border border-cyan-500/15 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-cyan-500/30 transition-all shadow-xl group scroll-mt-24"
                >
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <h2 className="text-base sm:text-lg font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors flex items-center gap-2">
                      <a href={`#${sec.id}`} className="hover:underline">
                        {sec.title}
                      </a>
                    </h2>
                    <a
                      href={`#${sec.id}`}
                      className="text-[10px] font-mono text-emerald-500/60 hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Direct Link Anchor"
                    >
                      #{sec.id}
                    </a>
                  </div>

                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3 font-normal">
                    {sec.content}
                  </div>

                  {/* Special Render for Contact Section */}
                  {sec.id === 'privacy-11' && (
                    <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <a
                        href={`mailto:${email}`}
                        className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-3"
                      >
                        <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Direct Email</p>
                          <p className="text-[11px] text-cyan-400 font-mono">{email}</p>
                        </div>
                      </a>

                      <a
                        href={`https://wa.me/923080078400`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400 transition-all flex items-center gap-3"
                      >
                        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">WhatsApp Direct</p>
                          <p className="text-[11px] text-emerald-400 font-mono">{whatsapp}</p>
                        </div>
                      </a>

                      <a
                        href="https://discord.gg/MrXN6EsQTu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-400 transition-all flex items-center gap-3"
                      >
                        <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">EXCODE Discord Server</p>
                          <p className="text-[11px] text-indigo-400 font-mono">Join Community</p>
                        </div>
                      </a>

                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-400 transition-all flex items-center gap-3"
                      >
                        <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Official Website</p>
                          <p className="text-[11px] text-blue-400 font-mono truncate max-w-[150px]">
                            {website}
                          </p>
                        </div>
                      </a>
                    </div>
                  )}
                </section>
              ))
            )}

            {/* Bottom Footer Action Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0B1426] via-[#09101E] to-[#070B14] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-extrabold text-white">Have questions about data privacy?</h4>
                <p className="text-xs text-slate-400">
                  Contact our lead developer directly for NDA requests or data security inquiries.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#home"
                  className="px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Home className="w-3.5 h-3.5" />
                  Return Home
                </a>

                <button
                  onClick={scrollToTop}
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
                  aria-label="Back to Top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Simplified Footer for Legal Pages */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#04060A] text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MR MIZ / EXCODE Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#home" className="hover:text-cyan-300 transition-colors underline">
              Home
            </a>
            <span>|</span>
            <a href="#privacy" className="text-cyan-400 font-bold underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-cyan-300 transition-colors underline">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
