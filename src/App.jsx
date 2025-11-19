import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/5 py-8 text-center text-xs text-blue-100/60">
        <p>© {new Date().getFullYear()} Kishan. Crafted with care.</p>
      </footer>
    </div>
  )
}

export default App