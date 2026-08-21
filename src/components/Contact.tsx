import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { profileData } from '../data/profileData';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  MediumIcon, 
  DiscordIcon 
} from './ui/Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'contact@thiagoevoa.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Fallback trigger mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'BookOpen':
      case 'Medium':
        return <MediumIcon className="w-5 h-5" />;
      case 'Twitter':
        return <TwitterIcon className="w-5 h-5" />;
      case 'MessageSquare':
      case 'Discord':
        return <DiscordIcon className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get In Touch"
          subtitle="Interested in building high-impact cross-platform software, discussing mobile architecture, or collaborating on open source?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links & Reach-out Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="glass-card rounded-2xl p-6 border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-cyan-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className="text-base font-bold text-white">Currently Available</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Open for senior software engineering roles, mobile architecture consultations, and technical collaborations.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location} (Remote / Global)</span>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="glass-card rounded-2xl p-6 border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Social Profiles & Networks
              </h4>

              {profileData.socials.map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/70 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/40 transition-colors">
                      {getSocialIcon(social.icon)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {social.username}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    Visit →
                  </span>
                </a>
              ))}

              {/* Copy Email Button */}
              <div className="pt-2">
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-200 hover:bg-cyan-950/50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-mono text-cyan-400">Copy Direct Email</div>
                      <div className="text-xs font-mono text-slate-300">{contactEmail}</div>
                    </div>
                  </div>
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs font-sans font-semibold text-emerald-400">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-slate-800/80 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Send a Direct Message</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Start a Conversation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill in your details below and it will compose a direct email.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Opening your mail client with your pre-filled inquiry...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Thiago, I'd love to connect regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500">
                You can also connect directly on LinkedIn or message on Discord.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
