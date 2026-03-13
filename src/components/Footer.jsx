import { Github, Linkedin, Heart, Layers } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Layers size={14} className="text-white" />
            </div>
            <span className="font-bold text-white">
              AC<span className="text-blue-400">.</span>dev
            </span>
            <span className="text-slate-600 text-sm ml-2">
              Software Development Lead · Clarkoutsourcing
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-blue-400 transition-colors duration-200">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-500 hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {year} — Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
