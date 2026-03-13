import { ShieldCheck, Lock, FileText, Activity, CheckCircle2, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Lock,
    title: 'Multi-Layer Authentication',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    description:
      'Built enterprise RBAC systems for 500+ users across HR, Finance, and Operations. The same principles — role isolation, session control, and audit trails — map directly to HIPAA\'s minimum necessary access rule for patient data.',
  },
  {
    icon: FileText,
    title: 'Immutable Audit Trails',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    description:
      'Payroll systems demand non-repudiation: every transaction must be traceable, timestamped, and tamper-proof. Medical results platforms need the same guarantees — I design these audit pipelines by default, not as an afterthought.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Encryption at Rest & Transit',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    description:
      'HRIS modules containing SSNs and salary data required AES-256 encryption with strict key management policies. This directly translates to encrypting PHI (Protected Health Information) in a medical results context.',
  },
  {
    icon: Activity,
    title: 'High Availability Architecture',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    description:
      'Designed microservices with load balancing to eliminate single points of failure for business-critical payroll runs. Medical portals demand the same 99.9% uptime — a failed result delivery can directly impact patient care decisions.',
  },
]

const transferPoints = [
  { from: 'HRIS Employee Records', to: 'Patient Medical Records', secure: true },
  { from: 'Payroll Data Security', to: 'PHI Encryption Standards', secure: true },
  { from: 'Multi-tenant Access Control', to: 'Patient/Physician/Admin RBAC', secure: true },
  { from: 'Financial Audit Trails', to: 'HIPAA Audit Logging', secure: true },
  { from: 'SLA-grade Uptime', to: 'Clinical Availability Requirements', secure: true },
]

export default function MedicalStrategy() {
  return (
    <section id="strategy" className="relative py-28 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="section-label">
            <Activity size={12} />
            Medical Sector Strategy
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text">
            Enterprise Security <br /> Meets Healthcare
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Years of building security-first systems for HR and Payroll isn't a detour —
            it's the exact foundation that HIPAA-grade medical platforms demand.
            Here's how my enterprise experience translates directly to healthcare.
          </p>
        </div>

        {/* Transfer Table */}
        <div className="glass-panel rounded-2xl p-6 mb-12 border border-slate-700/60
                        shadow-[0_0_60px_rgba(59,130,246,0.05)]">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-400" />
            Security Competency Translation
          </h3>
          <div className="space-y-3">
            {transferPoints.map(({ from, to }) => (
              <div key={from}
                   className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40
                              border border-slate-700/30 hover:border-blue-500/20 transition-colors duration-200">
                <div className="flex-1 text-right">
                  <span className="text-sm font-medium text-slate-300">{from}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <ArrowRight size={16} className="text-blue-500" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-emerald-300">{to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, title, color, bg, border, description }) => (
            <div key={title}
                 className={`glass-panel glass-panel-hover rounded-2xl p-6
                              ${bg} ${border} border
                              transition-all duration-300 hover:-translate-y-1
                              hover:shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${bg} border ${border}
                                 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-2 ${color}`}>{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-8 border border-blue-500/20
                        bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5
                        text-center space-y-4">
          <h3 className="text-2xl font-bold gradient-text">
            Ready to build your HIPAA-grade Medical Portal?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            I bring enterprise-proven security architecture and full-stack execution.
            Let's talk about your clinic's specific requirements.
          </p>
          <a href="#contact" className="btn-primary mx-auto">
            Schedule a Discovery Call
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
