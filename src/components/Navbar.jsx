import { useEffect, useState } from "react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
} from "./SocialIcons";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-night-900/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent")
      }
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <a href="#home" className="flex items-center gap-2.5 font-bold text-lg text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-300 inline-block"></span>
          Portfolio
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5 text-slate-400">
          <a href="#" aria-label="LinkedIn" className="hover:text-red-400 transition-colors">
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-red-400 transition-colors">
            <FacebookIcon className="w-[18px] h-[18px]" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-red-400 transition-colors">
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-red-400 transition-colors">
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="#contact"
            className="glow-btn ml-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-300 transition-all"
          >
            Let's Connect
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-night-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500"
          >
            Let's Connect
          </a>
        </div>
      )}
    </header>
  );
}
