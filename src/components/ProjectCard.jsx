import { useState } from 'react'
import { ExternalLink, Github, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react'

const BADGE_COLORS = {
  Laravel: 'bg-red-900/40 text-red-300 border-red-700/40',
  Angular: 'bg-red-900/40 text-red-300 border-red-700/40',
  React: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40',
  'AI Agent': 'bg-violet-900/40 text-violet-300 border-violet-700/40',
  'AI Agents': 'bg-violet-900/40 text-violet-300 border-violet-700/40',
  PHP: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/40',
  MySQL: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
  Microservices: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/40',
  'Load Balancing': 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  Docker: 'bg-sky-900/40 text-sky-300 border-sky-700/40',
  HRIS: 'bg-slate-700/60 text-slate-300 border-slate-600/40',
  Payroll: 'bg-slate-700/60 text-slate-300 border-slate-600/40',
  CRM: 'bg-slate-700/60 text-slate-300 border-slate-600/40',
  TypeScript: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  default: 'bg-slate-700/60 text-slate-300 border-slate-600/40',
}

function TechBadge({ label }) {
  const colorClass = BADGE_COLORS[label] || BADGE_COLORS.default
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium
                      border ${colorClass} transition-colors duration-200`}>
      {label}
    </span>
  )
}

/**
 * ProjectCard — glassmorphism card with hover zoom image,
 * Problem/Solution narrative, and color-coded tech badges.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.image        - URL or gradient fallback (pass '' to use gradient)
 * @param {string} props.imageAlt
 * @param {string} props.problem      - "The Problem" paragraph
 * @param {string} props.solution     - "The Solution" paragraph
 * @param {string[]} props.techStack
 * @param {string} [props.liveUrl]
 * @param {string} [props.githubUrl]
 * @param {string} [props.accentColor] - Tailwind color token for the accent (default blue-500)
 * @param {boolean} [props.featured]
 */
export default function ProjectCard({
  title,
  subtitle,
  image = '',
  imageAlt = '',
  problem,
  solution,
  techStack = [],
  liveUrl,
  githubUrl,
  accentColor = 'blue',
  featured = false,
}) {
  const [activeTab, setActiveTab] = useState('problem')

  return (
    <article className={`group relative flex flex-col rounded-2xl overflow-hidden
                         glass-panel glass-panel-hover
                         transition-all duration-500 ease-out
                         hover:shadow-2xl hover:shadow-blue-500/10
                         hover:-translate-y-1
                         ${featured ? 'ring-1 ring-blue-500/30' : ''}`}>

      {featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="section-label text-[10px]">Featured Project</span>
        </div>
      )}

      {/* Image container with zoom-on-hover */}
      <div className="relative h-52 overflow-hidden bg-slate-800 flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out
                       group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          /* Gradient placeholder — replace with real screenshot later */
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-950/50 to-slate-900
                          transition-transform duration-700 ease-out group-hover:scale-110
                          flex items-center justify-center">
            <div className="text-center space-y-2 opacity-40">
              <div className="w-16 h-16 mx-auto border-2 border-blue-500/40 rounded-xl
                              flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <p className="text-slate-400 text-xs font-mono">screenshot</p>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Subtitle chip */}
        <div className="absolute bottom-3 left-4">
          <span className="font-mono text-xs text-blue-300/80 bg-slate-900/60 backdrop-blur-sm
                           px-2 py-0.5 rounded border border-blue-500/20">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 space-y-5">

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Tab switcher: Problem / Solution */}
        <div>
          <div className="flex rounded-lg overflow-hidden border border-slate-700/60 w-fit mb-4">
            <button
              onClick={() => setActiveTab('problem')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all duration-200
                          ${activeTab === 'problem'
                            ? 'bg-red-900/40 text-red-300 border-r border-slate-700/60'
                            : 'text-slate-500 hover:text-slate-300 border-r border-slate-700/60'}`}
            >
              <AlertCircle size={12} />
              The Problem
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all duration-200
                          ${activeTab === 'solution'
                            ? 'bg-emerald-900/40 text-emerald-300'
                            : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Lightbulb size={12} />
              The Solution
            </button>
          </div>

          <p className={`text-sm leading-relaxed min-h-[72px] transition-all duration-300
                         ${activeTab === 'problem' ? 'text-slate-300' : 'text-emerald-200'}`}>
            {activeTab === 'problem' ? problem : solution}
          </p>
        </div>

        {/* Tech stack */}
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-2.5">Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 mt-auto">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               className="btn-primary text-sm py-2">
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className="btn-ghost text-sm py-2">
              <Github size={14} />
              Source
            </a>
          )}
          {!liveUrl && !githubUrl && (
            <span className="flex items-center gap-2 text-xs text-slate-500 font-mono
                             bg-slate-800/60 px-3 py-2 rounded-lg border border-slate-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Internal / NDA
            </span>
          )}
          <button className="ml-auto text-slate-600 hover:text-blue-400 transition-colors duration-200 group/arrow">
            <ArrowRight size={18} className="group-hover/arrow:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </article>
  )
}
