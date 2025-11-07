import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['100 orders/mo', '1 location', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    features: ['1,000 orders/mo', 'Up to 3 locations', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$129',
    period: '/mo',
    features: ['Unlimited orders', 'Unlimited locations', 'SLA + SSO'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Start free, scale when you’re ready. No contracts.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 backdrop-blur bg-white/60 border-white/50 shadow-sm ${
                plan.highlighted ? 'ring-2 ring-indigo-500/60 shadow-indigo-500/20' : ''
              }`}
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-800">{plan.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow hover:opacity-95 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
