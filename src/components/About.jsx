import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white">About</h2>
            <p className="mt-4 text-blue-100/85">
              I'm Kishan, a frontend engineer focused on craft and clarity. I care deeply about
              interaction design, performance and accessible experiences. I enjoy mixing 3D, motion
              and clean typography to create interfaces that feel alive.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Tailwind', 'TypeScript', 'Spline', 'Framer Motion'].map((s) => (
                <span key={s} className="rounded-lg bg-white/5 px-3 py-1 text-xs text-blue-100/80 ring-1 ring-white/10">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm text-blue-100/80">
              <div>
                <p className="text-white/90 font-medium">Experience</p>
                <p>3+ years building UI</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Based in</p>
                <p>India</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Interests</p>
                <p>3D Web, Design Systems</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Currently</p>
                <p>Freelancing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
