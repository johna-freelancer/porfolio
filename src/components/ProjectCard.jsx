import { useRef, useState } from 'react'
import { ExternalLink, Github, AlertCircle, Lightbulb, ArrowRight, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

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
  gallery = [],
}) {
  const [activeTab, setActiveTab] = useState('problem')
  const [heroImageFailed, setHeroImageFailed] = useState(false)
  const [failedGallery, setFailedGallery] = useState({})
  const heroImage = image || gallery[0] || ''
  const galleryStripRef = useRef(null)
  const modalThumbsRef = useRef(null)


  // Gallery modal state
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const markGalleryImageAsFailed = (index) => {
    setFailedGallery((prev) => {
      if (prev[index]) return prev
      return { ...prev, [index]: true }
    })
  }

  const scrollGallery = (ref, direction) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: direction * 180, behavior: 'smooth' })
  }

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
        {heroImage && !heroImageFailed ? (
          <img
            src={heroImage}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
            onError={() => setHeroImageFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400">
            <div className="flex flex-col items-center gap-2 text-center px-4">
              <ImageOff size={24} className="text-slate-500" />
              <p className="text-xs font-mono uppercase tracking-wider">Preview Coming Soon</p>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        {/* Subtitle chip */}
        <div className="absolute bottom-3 left-4">
          <span className="font-mono text-xs text-blue-300/80 bg-slate-900/60 backdrop-blur-sm px-2 py-0.5 rounded border border-blue-500/20">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Gallery section */}
      {gallery && gallery.length > 0 && (
        <div className="px-6 pt-4 pb-2">
          <div className="relative">
            {gallery.length > 4 && (
              <button
                type="button"
                aria-label="Scroll thumbnails left"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-blue-500 text-slate-200"
                onClick={() => scrollGallery(galleryStripRef, -1)}
              >
                <ChevronLeft size={14} />
              </button>
            )}

            <div ref={galleryStripRef} className="flex gap-2 overflow-x-auto px-7 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {gallery.map((img, idx) => (
                <button
                  key={`${img}-${idx}`}
                  className="focus:outline-none border-2 border-slate-800 hover:border-blue-500 rounded-lg overflow-hidden w-16 h-16 bg-slate-900 flex-shrink-0"
                  onClick={() => { setGalleryIndex(idx); setGalleryOpen(true); }}
                  type="button"
                  tabIndex={0}
                >
                  {failedGallery[idx] ? (
                    <span className="w-full h-full flex items-center justify-center text-slate-500">
                      <ImageOff size={14} />
                    </span>
                  ) : (
                    <img
                      src={img}
                      alt={title + ' screenshot'}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      onError={() => markGalleryImageAsFailed(idx)}
                    />
                  )}
                </button>
              ))}
            </div>

            {gallery.length > 4 && (
              <button
                type="button"
                aria-label="Scroll thumbnails right"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-blue-500 text-slate-200"
                onClick={() => scrollGallery(galleryStripRef, 1)}
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Gallery modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setGalleryOpen(false)}>
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white bg-slate-900/80 rounded-full p-2 hover:bg-blue-500/80" onClick={() => setGalleryOpen(false)}>&times;</button>
            {failedGallery[galleryIndex] ? (
              <div className="w-full max-w-3xl h-[50vh] rounded-xl shadow-2xl border-4 border-blue-500/20 bg-slate-900 flex items-center justify-center text-slate-400">
                <div className="flex flex-col items-center gap-2 text-center px-6">
                  <ImageOff size={28} className="text-slate-500" />
                  <p className="text-sm font-mono uppercase tracking-wider">Screenshot Not Available Yet</p>
                </div>
              </div>
            ) : (
              <img
                src={gallery[galleryIndex]}
                alt={title + ' screenshot'}
                className="max-h-[70vh] rounded-xl shadow-2xl border-4 border-blue-500/20"
                onError={() => markGalleryImageAsFailed(galleryIndex)}
              />
            )}
            <div className="relative w-full mt-4 px-8">
              {gallery.length > 6 && (
                <button
                  type="button"
                  aria-label="Scroll modal thumbnails left"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-blue-500 text-slate-200"
                  onClick={() => scrollGallery(modalThumbsRef, -1)}
                >
                  <ChevronLeft size={14} />
                </button>
              )}

              <div ref={modalThumbsRef} className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {gallery.map((img, idx) => (
                  <button
                    key={`${img}-${idx}`}
                    className={`w-10 h-10 rounded border-2 ${idx === galleryIndex ? 'border-blue-500' : 'border-slate-700'} overflow-hidden flex-shrink-0`}
                    onClick={() => setGalleryIndex(idx)}
                    type="button"
                    tabIndex={0}
                  >
                    {failedGallery[idx] ? (
                      <span className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-900">
                        <ImageOff size={12} />
                      </span>
                    ) : (
                      <img
                        src={img}
                        alt={title + ' thumb'}
                        className="object-cover w-full h-full"
                        onError={() => markGalleryImageAsFailed(idx)}
                      />
                    )}
                  </button>
                ))}
              </div>

              {gallery.length > 6 && (
                <button
                  type="button"
                  aria-label="Scroll modal thumbnails right"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-blue-500 text-slate-200"
                  onClick={() => scrollGallery(modalThumbsRef, 1)}
                >
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

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
