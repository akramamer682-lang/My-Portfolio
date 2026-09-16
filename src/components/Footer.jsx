import { useState } from "react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
} from "./SocialIcons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const whatIDo = [
  "Front-End Development",
  "Responsive Web Design",
  "React & Tailwind Projects",
  "UI / UX Implementation",
  "Performance Optimization",
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    e.target.reset();
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="border-t border-white/10 bg-night-900">
      {/* newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">
            Stay Updated<span className="text-red-500">.</span>
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Subscribe to see my latest projects & articles.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-72 bg-night-700 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-300 transition-all shrink-0"
          >
            Subscribe
          </button>
        </form>
        {subscribed && (
          <p className="text-sm text-green-400 md:hidden">✓ Subscribed successfully!</p>
        )}
      </div>

      {/* links */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-bold text-lg text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-300 inline-block"></span>
              Portfolio
            </a>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              I’m an Engineering student and a passionate Web Developer & Designer. I build modern and user-friendly websites using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I’m always learning new technologies and improving my skills to create better digital experiences.
            </p>
            <div className="mt-5 flex items-center gap-4 text-slate-500">
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
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">
              Navigation<span className="text-red-500">.</span>
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-red-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">
              What I Do<span className="text-red-500">.</span>
            </h5>
            <ul className="space-y-2.5">
              {whatIDo.map((w) => (
                <li key={w} className="text-sm text-slate-500">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-600">
        © 2025 Akram Mahmoud Amer - All Rights Reserved
      </div>
    </footer>
  );
}
