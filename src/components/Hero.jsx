import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Futuristic Performance
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Own the night. Ride the future.
          </h1>
          <p className="mt-5 text-slate-300 text-base sm:text-lg">
            Precision-engineered motorcycles built for speed, control, and presence. Explore electric and combustion models tuned for road and track.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#models" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 px-6 py-3 text-white font-medium shadow-lg shadow-red-900/30 hover:shadow-red-900/50 transition">
              Explore Models
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10 transition">
              Book a Test Ride
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
