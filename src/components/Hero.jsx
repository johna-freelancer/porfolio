import { ArrowRight, Shield, Layers, Cpu, Mail, Terminal } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Enterprise Systems', value: '3' },
  { label: 'Team Members Led', value: '10+' },
  { label: 'Uptime SLA', value: '99.9%' },
]

const roles = ['Software Development Lead', 'Ecosystem Architect', 'AI Integration Engineer', 'Full-Stack Specialist']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]
                      bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]
                      bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column — copy */}
          <div className="space-y-8 animate-fade-in">
            {/* Status pill */}
            <div className="flex items-center gap-3">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                Available for projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="gradient-text">Digital Ecosystem</span>
                <br />
                <span className="text-white">Architect</span>
              </h1>
              <div className="flex items-center gap-2 font-mono text-blue-400 text-sm">
                <Terminal size={14} />
                <span className="animate-pulse-slow">Software Development Lead @ Clarkoutsourcing</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl text-balance">
              I consolidate fragmented enterprise tools — HRIS, Payroll, CRM, Ticketing, and AI Agents —
              into a single, high-security <span className="text-blue-400 font-semibold">Ecosystem Portal</span>.
              Now targeting the Medical sector with HIPAA-grade architecture.
            </p>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2">
              {['Angular', 'React', 'Laravel', 'AI Agents', 'Microservices', 'Load Balancing'].map((skill) => (
                <span key={skill} className="tech-badge">{skill}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-primary">
                View Case Studies
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} />
                Get in Touch
              </a>
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-4 pt-2">
              <Mail size={16} className="text-blue-400" />
              <span className="text-slate-400 text-sm font-mono">jadalmario.freelancer@gmail.com</span>
            </div>
          </div>

          {/* Right column — dashboard card */}
          <div className="relative animate-slide-up animate-delay-200">
            {/* Main card */}
            <div className="glass-panel rounded-2xl p-6 space-y-5 border border-slate-700/60
                            shadow-[0_0_80px_rgba(59,130,246,0.08)]">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-xs text-slate-500">ecosystem-portal.tsx</span>
              </div>

              {/* Code-style display */}
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
                <span className="text-blue-400">const</span>{' '}
                <span className="text-emerald-300">EcosystemPortal</span>{' '}
                <span className="text-blue-400">=</span>{' '}{'\n'}
                {'  '}modules<span className="text-slate-500">:</span>{' '}[{'\n'}
                {'    '}<span className="text-amber-300">'HRIS'</span>,{' '}<span className="text-amber-300">'Payroll'</span>,{'\n'}
                {'    '}<span className="text-amber-300">'CRM'</span>,{' '}<span className="text-amber-300">'Ticketing'</span>,{'\n'}
                {'    '}<span className="text-amber-300">'AI Agent'</span>,{' '}<span className="text-amber-300">'Workflows'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}security<span className="text-slate-500">:</span>{' '}<span className="text-emerald-400">'enterprise'</span>,{'\n'}
                {'  '}architecture<span className="text-slate-500">:</span>{' '}<span className="text-emerald-400">'microservices'</span>{'\n'}
              </pre>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: Shield, label: 'Security Level', value: 'Enterprise', color: 'text-emerald-400' },
                  { icon: Layers, label: 'Architecture', value: 'Microservices', color: 'text-blue-400' },
                  { icon: Cpu, label: 'AI Integration', value: 'Active', color: 'text-violet-400' },
                  { icon: Terminal, label: 'Deployments', value: '99.9% uptime', color: 'text-amber-400' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 bg-slate-800/60 rounded-lg p-3 border border-slate-700/40">
                    <Icon size={16} className={color} />
                    <div>
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className={`text-xs font-semibold ${color}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-xl p-4 border border-blue-500/20
                            shadow-[0_0_40px_rgba(59,130,246,0.15)] w-48">
              <p className="text-xs text-slate-500 font-mono mb-1">Active Modules</p>
              <div className="flex items-end gap-1 h-8">
                {[60, 80, 50, 90, 70, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/30 rounded-sm hover:bg-blue-500/60 transition-colors"
                       style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-right text-blue-400 font-semibold text-sm mt-1">6 / 6</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="glass-panel glass-panel-hover rounded-xl p-5 text-center group cursor-default">
              <p className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300">
                {value}
              </p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
