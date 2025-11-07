import Spline from '@splinetool/react-spline';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle radial light and gradient rims */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.18),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 items-center gap-10 w-full">
        <div className="backdrop-blur-md/0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 bg-white/40 backdrop-blur supports-[backdrop-filter]:bg-white/30 text-xs text-slate-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Real-time retail analytics
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
            Modern Store Management for the Next Decade
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
            Unify inventory, sales, and staff workflows with a glassmorphic, fintech-grade dashboard. Beautiful, secure, and lightning fast.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#demo" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition">
              Launch Live Demo
            </a>
            <a href="#features" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-slate-700 bg-white/70 border border-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/50 hover:bg-white/80 transition">
              Explore Features
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
            <div className="flex items-center gap-2 bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur">
              <Check size={16} className="text-emerald-600" /> PCI compliant
            </div>
            <div className="flex items-center gap-2 bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur">
              <Check size={16} className="text-emerald-600" /> Inventory sync
            </div>
            <div className="flex items-center gap-2 bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur">
              <Check size={16} className="text-emerald-600" /> Staff roles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
