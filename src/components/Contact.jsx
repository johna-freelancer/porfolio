import { Mail, MessageSquare, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', budget: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In production: replace with your form backend (Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="section-label">
            <MessageSquare size={12} />
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text">
            Let's Build Together
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Especially interested in enterprise portal projects, AI automation engagements, and innovative digital solutions for organizations of any sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'jadalmario.freelancer@gmail.com', href: 'mailto:jadalmario.freelancer@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Mabalacat, Philippines · GMT+8', href: null },
              { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20
                                flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-8 border border-slate-700/60">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30
                                  flex items-center justify-center">
                    <Send size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-3
                                   text-sm text-slate-200 placeholder-slate-600
                                   focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                                   transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-3
                                   text-sm text-slate-200 placeholder-slate-600
                                   focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                                   transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-3
                                 text-sm text-slate-200
                                 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                                 transition-colors duration-200"
                    >
                      <option value="">Select project type…</option>
                      <option>Medical Results Platform</option>
                      <option>Enterprise Ecosystem Portal</option>
                      <option>AI Agent Integration</option>
                      <option>HRIS / Payroll System</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project — what problem are you solving?"
                      className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-3
                                 text-sm text-slate-200 placeholder-slate-600 resize-none
                                 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30
                                 transition-colors duration-200"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
