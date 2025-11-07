import { ShieldCheck, BarChart2, Boxes, CreditCard } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Unified Payments',
    desc: 'Accept cards, tap-to-pay, BNPL, and more with built-in fraud protection.',
  },
  {
    icon: Boxes,
    title: 'Inventory Control',
    desc: 'Multi-location stock, smart reorder points, and barcode workflows.',
  },
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    desc: 'Live revenue, basket size, and cohort reports that update by the second.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Role-based access, SSO/SAML, and audit trails for peace of mind.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Operate smarter</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Everything you need to run modern retail across channels and locations — elegantly packaged.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group h-full rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/90 to-blue-500/90 text-white shadow-inner shadow-indigo-600/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
