import React, { useState, useEffect } from 'react';
import {
  FileText,
  Home,
  ShieldCheck,
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
  ExternalLink
} from 'lucide-react';

export default function TermsOfUsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('terms-1');
  const [copied, setCopied] = useState(false);

  const email = 'excode53@gmail.com';
  const whatsapp = '+923080078400';
  const website = 'https://mrmiz-star.github.io/excode-portfolio/';

  const sections = [
    {
      id: 'terms-1',
      title: '1. Agreement to Terms & Service Overview',
      content: `These Terms of Use ("Terms") describe the general terms and conditions under which MR MIZ / EXCODE Corporation ("we", "us", or "our") provides custom software development, web application design, system architecture, desktop software development, business management tools, AI/ML solutions, API integrations, and maintenance services to clients worldwide.

By accessing this website, placing a project inquiry, receiving a quotation, or engaging our software engineering services, you ("Client", "User", or "You") agree to be bound by these Terms, together with any formal project agreement, proposal, or statement of work issued by EXCODE Corporation.`,
    },
    {
      id: 'terms-2',
      title: '2. Scope of Services & Project Inquiries',
      content: `EXCODE Corporation offers a comprehensive range of technology services, including:
- Custom Full-Stack Web Application Development
- Desktop Software & Automation Utilities
- Database Design, API Development & Third-Party Integrations
- Business Management & Operations Systems
- AI / ML Model Implementation & Custom Tools
- UI/UX Interface Design & Optimization
- Software Maintenance, Bug Fixing & Upgrades

The specific scope, deliverables, timeline, performance criteria, and technical stack for any individual project are defined in the written project proposal, quotation, or agreement mutually accepted prior to project initialization.`,
    },
    {
      id: 'terms-3',
      title: '3. Project Requirements & Client Responsibilities',
      content: `To ensure successful and timely project completion, Clients agree to:
- Provide clear, comprehensive, and accurate business and technical requirements.
- Supply necessary brand assets, media files, copy, database access, or API credentials required for integration.
- Assign a primary contact person responsible for timely feedback and project sign-offs.
- Review delivered milestones promptly within agreed evaluation periods.

Delays in providing required information, feedback, or access credentials may result in proportional adjustments to project completion schedules and milestone deadlines.`,
    },
    {
      id: 'terms-4',
      title: '4. Quotations, Pricing & Estimates',
      content: `All project quotations provided by EXCODE Corporation are based on estimated hours, complexity, technology stack, and defined functional requirements.

- Official quotations remain valid for 30 calendar days from issuance unless otherwise specified.
- Any modification, addition, or expansion of project scope requested after project kickoff will be evaluated separately and may require a revised quotation or change order.
- Quotes are provided free of obligation until both parties formally accept project terms.`,
    },
    {
      id: 'terms-5',
      title: '5. Payment Terms & Milestone Deposits',
      content: `Unless agreed otherwise in writing:
- Projects may require an initial deposit or upfront milestone payment (typically 30%–50%) prior to development kickoff.
- Subsequent payments are tied to agreed deliverables, milestones, or final delivery sign-off.
- Source code, production server deployments, or transfer of administration access will occur upon full payment of final invoices.
- Late payments exceeding 14 calendar days from invoice due dates may result in temporary suspension of active development or support services until accounts are brought current.`,
    },
    {
      id: 'terms-6',
      title: '6. Scope Changes & Feature Requests',
      content: `We recognize that software requirements can evolve during development. 

- Minor cosmetic tweaks within the existing scope are handled collaboratively at no additional charge.
- Significant new features, new integrations, or structural architectural changes requested after scope approval will be categorized as "Out of Scope".
- We will provide a transparent estimate for additional scope before commencing work on requested changes.`,
    },
    {
      id: 'terms-7',
      title: '7. Testing, Review & Delivery Acceptance',
      content: `Upon completion of a development phase or project release:
- We conduct thorough local and staging environment testing before delivering software for client review.
- The Client receives an agreed acceptance testing period (typically 7 to 14 calendar days) to verify that deliverables conform to agreed specifications.
- Any bug or deviation from agreed requirements identified during the testing period will be resolved at no additional charge.
- Software is deemed accepted once formal approval is given or when the testing period expires without reported functional defects.`,
    },
    {
      id: 'terms-8',
      title: '8. Intellectual Property & Source Code Ownership',
      content: `We respect intellectual property rights and follow strict ownership transfer guidelines:
- **Client Intellectual Property:** All pre-existing client data, brand logos, proprietary content, and business secrets remain the exclusive property of the Client.
- **Custom Deliverables Ownership:** Upon receipt of full payment, full ownership rights to custom-developed source code, custom graphics, and project deliverables created specifically for the Client are transferred to the Client.
- **Open-Source & Pre-existing Frameworks:** Third-party libraries, open-source packages (e.g., React, TailwindCSS, Node modules), fonts, or framework dependencies remain subject to their respective open-source licenses (MIT, Apache, BSD, etc.).
- **EXCODE Utilities:** Proprietary helper scripts, internal boilerplate architectures, or re-usable utility classes developed prior to or independently of the project remain the property of EXCODE Corporation, granted to Client under a non-exclusive perpetual license.`,
    },
    {
      id: 'terms-9',
      title: '9. Portfolio Rights & Case Studies',
      content: `Unless a formal Non-Disclosure Agreement (NDA) or explicit written confidentiality restriction is signed prior to project start:
- EXCODE Corporation reserves the right to showcase non-sensitive project summaries, screenshots, and live demo links in our professional portfolio, website, and case studies.
- Confidential business data, proprietary keys, database entries, or private financial metrics will NEVER be disclosed or showcased in portfolio displays.`,
    },
    {
      id: 'terms-10',
      title: '10. Maintenance, Warranty & Ongoing Support',
      content: `To ensure long-term stability for delivered applications:
- **Warranty Period:** All completed projects include a complimentary 30-day post-delivery bug-fix warranty covering defects related to original agreed specifications.
- **Ongoing Support:** Beyond the warranty period, ongoing software maintenance, security patches, server infrastructure monitoring, and feature upgrades are available under separate service level agreements (SLAs) or hourly support rates.
- **Exclusions:** The warranty does not cover issues caused by unauthorized third-party modifications, web host environment failures, or external API deprecations occurring after delivery.`,
    },
    {
      id: 'terms-11',
      title: '11. Third-Party Services & Dependencies',
      content: `Modern software applications often rely on third-party APIs, payment gateways (Stripe, PayPal), cloud hosts (AWS, Vercel, Firebase), AI engines (OpenAI, Gemini), or communication APIs (Twilio, SendGrid).

- EXCODE Corporation is not responsible for service outages, rate limit policy changes, API deprecations, or price adjustments imposed by third-party service providers.
- Clients are responsible for maintaining their own active accounts and billing subscriptions with third-party vendors where applicable.`,
    },
    {
      id: 'terms-12',
      title: '12. Confidentiality & Data Protection',
      content: `Both parties agree to hold in strict confidence all proprietary technical specs, business ideas, financial details, customer databases, and operational secrets shared during project evaluation and development.

Confidential information will not be disclosed to any third party without prior written authorization, except as required by applicable laws or regulatory authorities.`,
    },
    {
      id: 'terms-13',
      title: '13. Project Suspension & Cancellation',
      content: `Either party may terminate a project engagement under the following conditions:
- **Cancellation by Client:** The Client may request project cancellation at any time with written notice. The Client agrees to compensate EXCODE Corporation for work completed up to the date of notice. Any unused advance deposit for unworked milestones will be refunded.
- **Termination by EXCODE:** EXCODE Corporation reserves the right to suspend or terminate services in cases of non-payment exceeding 30 days, breach of confidentiality, or unlawful project objectives. Completed work up to the point of termination will be delivered upon settling outstanding balances.`,
    },
    {
      id: 'terms-14',
      title: '14. Limitation of Liability',
      content: `To the maximum extent permitted by applicable law:
- EXCODE Corporation and its lead software developers will not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of business profits, data corruption, or operational downtime.
- In all events, the total cumulative liability of EXCODE Corporation for any claims arising out of or related to an engaged project shall not exceed the total amount paid by the Client to EXCODE Corporation for that specific project during the preceding 12-month period.`,
    },
    {
      id: 'terms-15',
      title: '15. Contact Details & Legal Inquiries',
      content: `For any questions, clarification, or formal legal notices regarding these Terms of Use, please reach out to us directly through any of our official channels listed below.`,
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
            <span className="text-slate-400 font-medium">Terms of Use</span>
          </div>

          {/* Quick Route Switcher & Share */}
          <div className="flex items-center gap-3">
            <a
              href="#privacy"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Switch to</span> Privacy Policy
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
        <div className="absolute top-10 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>EXCODE Legal Framework • Official Document</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Terms of Use & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Service Agreement</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Clear, transparent engineering standards, payment terms, intellectual property protections, and project delivery commitments for custom software engineering by <strong>EXCODE Corporation / MR MIZ</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Effective: August 1, 2026
                </span>
                <span>•</span>
                <span>Target: Global Software Clients & Partners</span>
                <span>•</span>
                <span>Version 2.4</span>
              </div>
            </div>

            {/* Back to Home CTA Card */}
            <div className="shrink-0">
              <a
                href="#home"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Return to Portfolio Home</span>
              </a>
            </div>

          </div>

          {/* Quick Search Bar */}
          <div className="mt-8 relative max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search clauses (e.g. payment, intellectual property, scope, liability)..."
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
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Table of Contents
                </h3>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                  {sections.length} Clauses
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
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold pl-4'
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
                  href="#privacy"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Read Privacy Policy
                </a>
              </div>

            </div>
          </aside>

          {/* Right Column: Detailed Document Sections */}
          <div className="lg:col-span-8 space-y-8">
            
            {filteredSections.length === 0 ? (
              <div className="p-12 text-center bg-[#0A0F1D] border border-dashed border-slate-800 rounded-3xl space-y-4">
                <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">No clauses found</h3>
                <p className="text-xs text-slate-400">
                  No terms clauses matched your search query "{searchQuery}". Try searching for another keyword.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-bold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
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
                    <h2 className="text-base sm:text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                      <a href={`#${sec.id}`} className="hover:underline">
                        {sec.title}
                      </a>
                    </h2>
                    <a
                      href={`#${sec.id}`}
                      className="text-[10px] font-mono text-cyan-500/60 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Direct Link Anchor"
                    >
                      #{sec.id}
                    </a>
                  </div>

                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3 font-normal">
                    {sec.content}
                  </div>

                  {/* Special Render for Contact Section */}
                  {sec.id === 'terms-15' && (
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
                <h4 className="text-base font-extrabold text-white">Have questions about project terms?</h4>
                <p className="text-xs text-slate-400">
                  We are open to custom proposals and tailored software agreements for enterprise clients.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#home"
                  className="px-5 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
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
            <a href="#privacy" className="hover:text-cyan-300 transition-colors underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="text-cyan-400 font-bold underline">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
