import { Menu, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow ring-1 ring-white/20" />
              <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">Kishan</span>
            </a>

            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-blue-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-blue-100/80 hover:text-white hover:bg-white/5"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-blue-100/80 hover:text-white hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <button
              className="md:hidden rounded-lg p-2 text-blue-100/80 hover:text-white hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 pb-4">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-blue-100/90 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-blue-100/80 hover:text-white hover:bg-white/5"><Github size={18} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-blue-100/80 hover:text-white hover:bg-white/5"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
