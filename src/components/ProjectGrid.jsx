import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Ecosystem Portal',
    subtitle: 'Enterprise Digital Ecosystem',
    image: '',
    problem:
      'The organization ran 10+ fragmented tools with zero integration — staff juggled multiple logins, data was siloed across systems, and IT spent weeks on security audits covering disconnected platforms.',
    solution:
      'Architected a unified portal consolidating HRIS, Payroll, CRM, Ticketing, Performance, and Workflow modules under one authentication layer. Embedded an AI Agent trained on company playbooks, reducing support turnaround from 48 hours to under 2 minutes. Deployed with Microservices and Load Balancing to sustain 500+ concurrent users.',
    techStack: ['Laravel', 'Angular', 'AI Agents', 'Microservices', 'Load Balancing', 'MySQL', 'Docker'],
    featured: true,
  },
  {
    id: 2,
    title: 'HRIS',
    subtitle: 'Human Resource Information System',
    image: '',
    problem:
      'Employee data, attendance records, and HR workflows were scattered across spreadsheets, leading to data inconsistencies and hours of manual reconciliation each month.',
    solution:
      'Built a centralized HRIS with employee profiles, attendance tracking, leave management, org chart visualization, and exportable compliance reports — eliminating manual HR data work.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 3,
    title: 'New Employee Onboarding',
    subtitle: 'HR Automation',
    image: '',
    problem:
      'New hire onboarding was paper-based and inconsistent — documents were misplaced, IT tasks were missed, and new employees regularly reached Week 1 without system access.',
    solution:
      'Digitized the full onboarding pipeline with automated checklists, document upload and e-signature, multi-department task assignment, and a real-time progress dashboard for HR.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 4,
    title: 'Payroll System',
    subtitle: 'Payroll Automation',
    image: '',
    problem:
      'Payroll was computed manually every cut-off using Excel, causing frequent calculation errors, compliance gaps, and a 3-day processing window for a team of 200+ employees.',
    solution:
      'Built an automated payroll engine with configurable salary structures, tax and deduction computation, payslip generation, bank file exports, and a full immutable audit trail per run.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 5,
    title: 'Ticketing Management System',
    subtitle: 'IT & Operations Support',
    image: '',
    problem:
      'Support requests arrived through emails, group chats, and verbal requests with no tracking. SLAs were undefined, tickets were lost, and resolution times were unmeasured.',
    solution:
      'Built a full ticketing platform with priority-based queues, SLA countdown timers, agent assignment, escalation rules, and a manager dashboard showing resolution KPIs in real time.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 6,
    title: 'CRM',
    subtitle: 'Customer Relationship Management',
    image: '',
    problem:
      'Sales teams tracked leads and client interactions in personal spreadsheets and notebooks, causing missed follow-ups, duplicated outreach, and zero visibility for management.',
    solution:
      'Built a CRM with visual lead pipelines, client interaction history, follow-up scheduling, deal stage tracking, and a sales funnel dashboard accessible to both reps and managers.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 7,
    title: 'Performance Management',
    subtitle: 'HR — Employee Evaluation',
    image: '',
    problem:
      'Performance reviews were annual, subjective, and paper-based. There was no continuous feedback mechanism or data to support promotion and compensation decisions.',
    solution:
      'Built a performance platform with KPI setting per role, quarterly self-assessments, manager scoring, calibration workflows, and historical trend analytics per employee.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 8,
    title: 'Workflow Creator',
    subtitle: 'No-Code Process Automation',
    image: '',
    problem:
      'Every new approval process (purchase requests, leave types, document sign-offs) required a developer to hard-code the logic, creating a backlog and making business agility impossible.',
    solution:
      'Built a drag-and-drop workflow builder allowing non-technical admins to design, configure, and deploy multi-step approval chains with conditional branching — with zero developer involvement.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 9,
    title: 'Staff Management System',
    subtitle: 'Workforce Scheduling',
    image: '',
    problem:
      'Shift scheduling for 150+ staff was done via group chats and printed rosters, leading to conflicts, no-shows, and zero historical record of schedule adherence.',
    solution:
      'Built a staff management platform with shift creation, team hierarchy management, conflict detection, schedule publishing with notification, and monthly scheduling reports.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 10,
    title: 'School Research Portal',
    subtitle: 'Academic Platform',
    image: '',
    problem:
      'Research paper submissions were emailed directly to faculty members, making review tracking, revision requests, and archiving a chaotic and error-prone process.',
    solution:
      'Built a portal for students to submit research papers with version history, faculty reviewers to provide structured feedback, multi-stage approval workflows, and a searchable archive.',
    techStack: ['Laravel', 'React', 'MySQL'],
    featured: false,
  },
  {
    id: 11,
    title: 'School Portal',
    subtitle: 'Academic Management System',
    image: '',
    problem:
      'Students, teachers, and parents relied on physical notices and manual processes for grades, schedules, and school announcements — information was always late and often inaccurate.',
    solution:
      'Built a school portal with student and teacher dashboards, grade encoding and viewing, class scheduling, real-time announcements, and an admin panel for academic configuration.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 12,
    title: 'Finance Book Reporting',
    subtitle: 'Financial Reporting System',
    image: '',
    problem:
      'Finance teams spent 3–5 days each reporting cycle manually consolidating ledger entries from multiple sources into Excel-based financial statements, prone to formula errors.',
    solution:
      'Built an automated reporting system that pulls from the general ledger, generates income statements, balance sheets, and cash flow reports, and exports audit-ready PDFs on demand.',
    techStack: ['Laravel', 'Angular', 'MySQL'],
    featured: false,
  },
  {
    id: 13,
    title: 'POS System',
    subtitle: 'Point of Sale',
    image: '',
    problem:
      'Manual cashiering during peak hours caused long queues, cash counting errors, and zero real-time visibility into daily sales or inventory consumption.',
    solution:
      'Built a POS with fast transaction processing, inventory deduction on sale, receipt printing, multi-cashier support, daily/weekly sales dashboards, and shift close-out reports.',
    techStack: ['Laravel', 'React', 'MySQL'],
    featured: false,
  },
  {
    id: 14,
    title: 'Food Costing System',
    subtitle: 'Restaurant Management',
    image: '',
    problem:
      'Restaurant management had no visibility into per-dish profitability. Ingredient costs were estimated, pricing was guesswork, and margin erosion was only discovered at month-end.',
    solution:
      'Built a food costing engine that breaks down recipes by ingredient, tracks market price fluctuations, calculates real-time margins per dish, and flags items falling below target profitability.',
    techStack: ['Laravel', 'React', 'MySQL'],
    featured: false,
  },
  {
    id: 15,
    title: 'Floor Mapping for Workspace',
    subtitle: 'Office Space Management',
    image: '',
    problem:
      'Office space planning was done manually with printed floor plans. Seat assignments changed constantly, hot-desk availability was unknown, and HR had no occupancy data.',
    solution:
      'Built an interactive floor map with drag-and-drop seat assignment, employee-to-seat linking, real-time occupancy visualization, department zone management, and capacity analytics.',
    techStack: ['React', 'Laravel', 'MySQL'],
    featured: false,
  },
  {
    id: 16,
    title: 'Food Delivery Platform',
    subtitle: 'Delivery Operations',
    image: '',
    problem:
      'Food delivery was managed via phone calls and manual dispatch. Order errors, missed deliveries, and no real-time tracking created constant customer complaints.',
    solution:
      'Built a full delivery platform covering customer ordering, restaurant acceptance, rider dispatch with route assignment, live order tracking, and an operations dashboard for dispatch managers.',
    techStack: ['React', 'Laravel', 'MySQL'],
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

        {/* All projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
