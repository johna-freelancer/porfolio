import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Ecosystem Portal',
    subtitle: 'Enterprise Internal Platform',
    image: '',
    problem:
      'The company ran 6+ separate SaaS subscriptions (HRIS, Payroll, CRM, Ticketing, Workflow tools) with no integration. Staff wasted hours switching contexts, data was siloed, and security audits were nearly impossible across fragmented access controls.',
    solution:
      'Architected a unified Laravel + Angular portal consolidating all modules under a single authentication layer. Embedded an AI Agent trained on company playbooks to resolve staff inquiries autonomously, reducing support tickets by ~60%. Deployed with Microservices and Load Balancing to handle 500+ concurrent users without degradation.',
    techStack: ['Laravel', 'Angular', 'AI Agents', 'Microservices', 'Load Balancing', 'MySQL', 'Docker'],
    featured: true,
  },
  {
    id: 2,
    title: 'Online Medical Results Platform',
    subtitle: 'Healthcare SaaS — Target Project',
    image: '',
    problem:
      'Medical clinics struggle with insecure, paper-based result delivery or fragmented portals. Patients experience delays, and clinics face HIPAA compliance risks when using generic file-sharing tools not designed for PHI (Protected Health Information).',
    solution:
      'Designing a React + Laravel platform with end-to-end encryption for result delivery, role-based access (patient, physician, admin), audit trail logging, and a secure notification pipeline. Architecture mirrors proven HRIS security patterns adapted to HIPAA standards.',
    techStack: ['React', 'Laravel', 'TypeScript', 'MySQL', 'Docker'],
    featured: false,
  },
  {
    id: 3,
    title: 'Staff AI Inquiry Agent',
    subtitle: 'AI Automation — Embedded Module',
    image: '',
    problem:
      'HR and Operations teams were overwhelmed by repetitive staff questions about leave policies, payroll schedules, and company procedures. The support queue had a 48-hour average response time.',
    solution:
      'Integrated an AI Agent into the Ecosystem Portal that ingests company playbooks and FAQs. The agent handles natural language queries in real-time, escalating only unresolved tickets to human agents. Reduced average response time from 48 hours to under 2 minutes for 80% of inquiries.',
    techStack: ['AI Agents', 'Laravel', 'Angular', 'PHP'],
    featured: false,
  },
]

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="section-label">Case Studies</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text">
            What I've Built
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Each project solves a real business problem. I don't build demos —
            I build systems that organizations rely on daily.
          </p>
        </div>

        {/* Featured project spans full width */}
        <div className="mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>

        {/* Secondary projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </section>
  )
}
