import { Heart, Layers } from 'lucide-react'

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
              Custom Business Systems for Growing Teams
            </span>
          </div>


          {/* Copyright */}
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {year} — Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            care for business operations
          </p>
        </div>
      </div>
    </footer>
  )
}
