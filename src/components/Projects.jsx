import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'Analytics dashboard with framer-motion transitions and Tailwind.',
    tags: ['React', 'Tailwind', 'Motion'],
    link: '#',
  },
  {
    title: 'Spline Playground',
    description: 'Interactive 3D experiments mixing Spline scenes and UI overlays.',
    tags: ['Spline', '3D', 'UI'],
    link: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'Reusable blocks for building personal sites with modern vibes.',
    tags: ['Design', 'Components', 'UX'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-blue-100/80">A few things I've been building lately.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-blue-100/80">{p.description}</p>
                </div>
                <ExternalLink size={18} className="text-blue-100/80 group-hover:text-white" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-lg bg-slate-900/60 px-2.5 py-1 text-xs text-blue-100/80 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
