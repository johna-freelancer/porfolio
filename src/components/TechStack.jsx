import { Code2, Database, Brain, Server, Globe, ShieldCheck } from 'lucide-react'

const categories = [
  {
    icon: Globe,
    label: 'Frontend',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Angular', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    skills: [
      { name: 'Laravel / PHP', level: 95 },
      { name: 'RESTful APIs', level: 93 },
      { name: 'Node.js', level: 75 },
      { name: 'Microservices', level: 85 },
    ],
  },
  {
    icon: Database,
    label: 'Data & Infra',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 88 },
      { name: 'Docker / CI/CD', level: 82 },
      { name: 'Load Balancing', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    icon: Brain,
    label: 'AI & Automation',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    skills: [
      { name: 'AI Agent Design', level: 88 },
      { name: 'LLM Integration', level: 82 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Workflow Automation', level: 90 },
    ],
  },
  {
    icon: ShieldCheck,
    label: 'Security',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    skills: [
      { name: 'RBAC / Auth Systems', level: 92 },
      { name: 'Data Encryption', level: 85 },
      { name: 'HIPAA Principles', level: 80 },
      { name: 'Security Auditing', level: 78 },
    ],
  },
  {
    icon: Code2,
    label: 'Architecture',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    skills: [
      { name: 'System Design', level: 90 },
      { name: 'Domain-Driven Design', level: 82 },
      { name: 'Team Leadership', level: 93 },
      { name: 'Agile / Scrum', level: 90 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full
                     transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-[500px] h-[300px] bg-blue-600/5 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="section-label">Tech Stack</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Full-stack capability with a specialization in enterprise security architecture
            and AI-powered automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, label, color, bg, border, skills }) => (
            <div key={label}
                 className={`glass-panel glass-panel-hover rounded-2xl p-6 space-y-5
                              ${bg} ${border} border`}>
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${bg} border ${border}
                                 flex items-center justify-center`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className={`font-bold text-base ${color}`}>{label}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
