import { BatteryFull, Gauge, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Track-grade handling',
    desc: 'Optimized weight distribution and adaptive suspension keep you glued through every apex.'
  },
  {
    icon: Zap,
    title: 'Instant torque',
    desc: 'Electric variants deliver relentless acceleration from 0 RPM with whisper-quiet thrust.'
  },
  {
    icon: BatteryFull,
    title: 'Endurance battery',
    desc: 'Next-gen cells with thermal management for real-world range and rapid charging.'
  },
  {
    icon: ShieldCheck,
    title: 'Active safety',
    desc: 'IMU-based traction, cornering ABS, and collision alerts for confidence at speed.'
  }
];

export default function Features() {
  return (
    <section id="why" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_10%,rgba(244,63,94,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered to thrill</h2>
          <p className="mt-3 text-slate-300">Technology that disappears so the ride is all you feel.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:bg-slate-900/80 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-lg shadow-red-900/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
