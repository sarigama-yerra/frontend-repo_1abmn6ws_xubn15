import { Sparkles, ArrowRight } from 'lucide-react';

const bikes = [
  {
    name: 'Vortex R1',
    type: 'Superbike',
    price: '$19,990',
    img: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'Neon S',
    type: 'Electric Street',
    price: '$15,490',
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'Rogue 900',
    type: 'Naked',
    price: '$13,250',
    img: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1400&auto=format&fit=crop'
  }
];

export default function Models() {
  return (
    <section id="models" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured models</h2>
            <p className="mt-2 text-slate-300">Curated machines ready to ship.</p>
          </div>
          <a href="#shop" className="hidden sm:inline-flex items-center gap-2 text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-xl">
            <Sparkles className="h-4 w-4 text-rose-400" />
            Customize yours
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bikes.map((b) => (
            <div key={b.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur">
              <div className="relative h-56 overflow-hidden">
                <img src={b.img} alt={b.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="p-5 flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold">{b.name}</h3>
                  <p className="text-slate-400 text-sm">{b.type}</p>
                </div>
                <div className="text-white font-semibold">{b.price}</div>
              </div>
              <div className="px-5 pb-5">
                <button className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-br from-red-600 to-rose-700 px-4 py-2 rounded-xl shadow-lg shadow-red-900/30">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
