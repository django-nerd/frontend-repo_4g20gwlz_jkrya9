import { Store, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-md shadow-blue-500/30 grid place-items-center text-white">
            <Store size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">FluxStore</span>
          <span className="hidden sm:inline text-xs text-slate-500 ml-2 px-2 py-0.5 rounded-full bg-slate-900/5 border border-slate-900/10">Management Suite</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#benefits" className="hover:text-slate-900 transition">Why Us</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#demo" className="hover:text-slate-900 transition">Live Demo</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-900/5 border border-slate-900/10 transition">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-sm shadow-indigo-600/30 hover:shadow-indigo-600/40 transition">
            <Settings size={16} /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
