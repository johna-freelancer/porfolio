import { useState, useEffect } from 'react'
import { Menu, X, Layers, ExternalLink } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'How I Help', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
                        ${scrolled
                          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/20'
                          : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center
                            group-hover:bg-blue-500 transition-colors duration-200">
              <Layers size={16} className="text-white" />
            </div>
            <span className="font-bold text-white tracking-tight">
              AC<span className="text-blue-400">.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href}
                 className="px-4 py-2 text-sm text-slate-400 hover:text-white
                            hover:bg-slate-800/60 rounded-lg transition-all duration-200">
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-sm py-2">
              Discuss Your Project
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)}
                  className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white
                             hover:bg-slate-800 transition-colors duration-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-slate-800/60 space-y-1">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setOpen(false)}
                 className="block px-4 py-3 text-sm text-slate-300 hover:text-white
                            hover:bg-slate-800/60 rounded-lg transition-all duration-200">
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full justify-center mt-3 text-sm">
              Discuss Your Project
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
