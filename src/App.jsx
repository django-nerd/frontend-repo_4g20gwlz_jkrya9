import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Pricing />
        <footer className="py-10 border-t border-white/50 bg-white/40 backdrop-blur mt-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} FluxStore Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
