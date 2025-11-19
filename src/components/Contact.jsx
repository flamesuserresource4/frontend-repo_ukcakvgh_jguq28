import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="mt-2 text-blue-100/80">Have a project in mind or just want to say hi? Drop a message and I'll get back.</p>
              <div className="mt-6 space-y-2 text-sm text-blue-100/80">
                <p>Email: <a href="mailto:kishan@example.com" className="text-white hover:underline">kishan@example.com</a></p>
                <p>Twitter: <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-white hover:underline">@kishan</a></p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-3"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! I\'ll reply soon.'); e.currentTarget.reset(); }}
            >
              <input className="rounded-xl bg-slate-900/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-blue-100/50 focus:outline-none focus:ring-blue-400/40"
                     placeholder="Your name" required />
              <input type="email" className="rounded-xl bg-slate-900/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-blue-100/50 focus:outline-none focus:ring-blue-400/40"
                     placeholder="Email address" required />
              <textarea rows={4} className="rounded-xl bg-slate-900/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-blue-100/50 focus:outline-none focus:ring-blue-400/40"
                        placeholder="Tell me about your project" required />
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/20">Send Message</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
