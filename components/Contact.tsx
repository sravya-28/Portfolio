'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message content cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Extraordinary Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or just want to connect? Send a message below or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am actively seeking roles in AI Engineering, Data Engineering, and Full Stack Web Development. Feel free to contact me via email or social platforms!
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                      {PORTFOLIO_DATA.personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-teal-950 text-teal-400 border border-teal-800 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-teal-300">
                      {PORTFOLIO_DATA.personal.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-3 rounded-lg bg-purple-950 text-purple-400 border border-purple-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Button Row */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Connect on Social
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Functional Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I have received your submission and will get back to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sravya, I'd like to discuss a project..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
