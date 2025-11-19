import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Open to opportunities
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I'm Kishan. I build playful, modern web experiences.
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-xl">
            Frontend engineer crafting immersive interfaces with React, Three/Spline and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 ring-1 ring-white/10">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
