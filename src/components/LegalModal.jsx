import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    if (!type) return;
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
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const email = 'excode53@gmail.com';
  const whatsapp = '+923080078400';
  const website = 'https://mrmiz-star.github.io/excode-portfolio/';

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F1D] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {isPrivacy ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">
                MR MIZ / EXCODE Corporation • Last Updated: August 1, 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 space-y-6 flex-1 overflow-y-auto text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
          {isPrivacy ? (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-6">
              <p>
                MR MIZ / EXCODE Corporation (“we”, “us”, or “our”) respects your privacy and is committed to protecting the information you provide when using this website or contacting us about software development services.
              </p>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  1. Information We May Collect
                </h3>
                <p>Depending on how you contact us, we may receive information such as:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone or WhatsApp number</li>
                  <li>Company or business name</li>
                  <li>Project requirements</li>
                  <li>Information you voluntarily provide about your business or software needs</li>
                </ul>
                <p>We only request information that is reasonably necessary to communicate with you and understand your project requirements.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  2. How We Use Your Information
                </h3>
                <p>Information you provide may be used to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Respond to project inquiries</li>
                  <li>Discuss software requirements</li>
                  <li>Prepare project proposals or quotations</li>
                  <li>Communicate about an ongoing project</li>
                  <li>Provide development and support services</li>
                  <li>Improve our website and services</li>
                  <li>Respond to questions or requests</li>
                </ul>
                <p className="font-semibold text-white">We do not sell your personal information.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  3. Project Information
                </h3>
                <p>
                  If you provide confidential business information, project specifications, documents, or other materials during a project discussion, we will use that information only as reasonably necessary to evaluate, develop, support, or communicate about the requested service.
                </p>
                <p className="text-amber-300/90 font-medium">
                  Please do not submit passwords, payment credentials, authentication codes, or other highly sensitive information through general contact forms.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  4. Third-Party Services
                </h3>
                <p>
                  This website may use third-party services such as hosting providers, analytics tools, contact services, or external platforms such as WhatsApp, LinkedIn, GitHub, or YouTube.
                </p>
                <p>These services may process information according to their own privacy policies and terms.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  5. Cookies and Analytics
                </h3>
                <p>
                  If analytics, cookies, or similar technologies are used on this website, they may collect technical information such as browser type, device information, approximate location, pages visited, and general website usage.
                </p>
                <p>If we introduce additional tracking technologies, this policy may be updated accordingly.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  6. Data Security
                </h3>
                <p>
                  We take reasonable measures to protect information submitted through our website and communication channels. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  7. Data Retention
                </h3>
                <p>
                  We retain information only for as long as reasonably necessary for communication, project management, business records, legal obligations, or legitimate business purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  8. External Links
                </h3>
                <p>
                  Our website may contain links to third-party websites, including software products, social media platforms, repositories, and external services. We are not responsible for the privacy practices or content of third-party websites.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  9. Children's Privacy
                </h3>
                <p>
                  Our services and website are not intentionally directed toward children, and we do not knowingly collect personal information from children for business purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-300 border-b border-slate-800 pb-1">
                  10. Changes to This Policy
                </h3>
                <p>
                  We may update this Privacy Policy when our website, services, or information practices change. The latest version will be published on this page with an updated “Last Updated” date.
                </p>
              </div>

              {/* Contact Block */}
              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2 text-white font-mono text-xs">
                <h4 className="font-bold text-cyan-300 text-sm">11. Contact Details</h4>
                <p><strong>MR MIZ / EXCODE Corporation</strong></p>
                <p>Email: <a href={`mailto:${email}`} className="text-cyan-400 underline">{email}</a></p>
                <p>WhatsApp: <a href={`https://wa.me/923080078400`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{whatsapp}</a></p>
                <p>Discord: <a href="https://discord.gg/MrXN6EsQTu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">EXCODE Official Discord Server</a></p>
                <p>Website: <a href={website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{website}</a></p>
              </div>
            </div>
          ) : (
            /* TERMS OF SERVICE CONTENT */
            <div className="space-y-6">
              <p>
                These Terms of Service (“Terms”) describe the general terms under which MR MIZ / EXCODE Corporation (“we”, “us”, or “our”) provides software development and related digital services.
              </p>
              <p>
                By contacting us, requesting a quotation, or engaging our services, you agree to these Terms together with any project-specific agreement, quotation, or written scope provided for your project.
              </p>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  1. Our Services
                </h3>
                <p>EXCODE Corporation may provide services including:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Custom software development</li>
                  <li>Web development</li>
                  <li>Desktop application development</li>
                  <li>Business management systems</li>
                  <li>Automation</li>
                  <li>AI/ML solutions</li>
                  <li>E-commerce development</li>
                  <li>API integrations</li>
                  <li>Software maintenance and support</li>
                  <li>Other technology services agreed with the client</li>
                </ul>
                <p>The exact services provided will depend on the requirements and agreed project scope.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  2. Project Requirements
                </h3>
                <p>
                  Before development begins, project requirements, features, technology, estimated timeline, deliverables, and pricing should be discussed and agreed upon.
                </p>
                <p>Changes to the requirements after development begins may affect the project timeline and cost.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  3. Quotes and Pricing
                </h3>
                <p>Project pricing is determined according to the project's requirements, complexity, development time, technology, and deliverables.</p>
                <p>A quotation or proposal may be provided before development begins. A quotation is not a final contract until the project terms are accepted by both parties.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  4. Payments
                </h3>
                <p>Payment terms will be agreed upon before development begins. Depending on the project, payment may be divided into milestones or stages. Development may begin only after any required initial payment or deposit has been received.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  5. Changes and Additional Features
                </h3>
                <p>Requests that fall outside the agreed project scope may be treated as additional work. Additional work may require a revised quotation, timeline, or milestone.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  6. Client Responsibilities
                </h3>
                <p>Clients are responsible for providing accurate requirements, necessary content, credentials, access, documents, and feedback required for the project. Delays in providing required information or approvals may affect the project timeline.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  7. Delivery and Testing
                </h3>
                <p>Software will be tested according to the agreed requirements and project scope before delivery. The client is responsible for reviewing the delivered software and reporting issues related to the agreed functionality.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  8. Intellectual Property
                </h3>
                <p>Ownership and licensing of the completed software, source code, designs, assets, and third-party components will depend on the project agreement. Unless otherwise agreed in writing, third-party libraries, frameworks, APIs, fonts, images, and other external components remain subject to their respective licenses.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  9. Portfolio Use
                </h3>
                <p>Unless otherwise agreed in writing, EXCODE Corporation may display completed non-confidential projects in its portfolio for demonstration and marketing purposes. Confidential client information will not intentionally be published as part of a portfolio presentation.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  10. Maintenance and Support
                </h3>
                <p>Maintenance, updates, bug fixes, hosting, and ongoing support may be provided separately depending on the project agreement. Support after delivery does not automatically include new features or major changes unless agreed separately.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  11. Third-Party Services
                </h3>
                <p>Projects may depend on third-party services, APIs, hosting providers, payment systems, software libraries, or other external platforms. EXCODE Corporation is not responsible for outages, policy changes, pricing changes, or failures caused by third-party services outside our control.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  12. Project Cancellation
                </h3>
                <p>Either party may request cancellation of a project. Any cancellation, refund, outstanding payment, or delivery obligations will be handled according to the specific project agreement and work already completed.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  13. Limitation of Liability
                </h3>
                <p>We aim to provide reliable and professional services, but software can contain unforeseen bugs, compatibility issues, or dependencies on external systems. To the extent permitted by applicable law, EXCODE Corporation will not be responsible for indirect, incidental, or consequential losses arising from the use or inability to use a delivered software solution.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-cyan-300 border-b border-slate-800 pb-1">
                  14. Changes to These Terms
                </h3>
                <p>These Terms may be updated as our services and business practices develop. The latest version will be published on this page with an updated “Last Updated” date.</p>
              </div>

              {/* Contact Block */}
              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2 text-white font-mono text-xs">
                <h4 className="font-bold text-cyan-300 text-sm">15. Contact</h4>
                <p>For questions regarding these Terms or a project, contact:</p>
                <p><strong>MR MIZ / EXCODE Corporation</strong></p>
                <p>Email: <a href={`mailto:${email}`} className="text-cyan-400 underline">{email}</a></p>
                <p>WhatsApp: <a href={`https://wa.me/923080078400`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{whatsapp}</a></p>
                <p>Discord: <a href="https://discord.gg/MrXN6EsQTu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">EXCODE Official Discord Server</a></p>
                <p>Website: <a href={website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{website}</a></p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-950 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}
