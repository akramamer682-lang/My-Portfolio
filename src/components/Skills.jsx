import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

function SkillRing({ skill }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [value, setValue] = useState(0);
  const C = 2 * Math.PI * 52;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 1400;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(skill.percent * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, skill.percent]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 w-[180px]">
      <div className="relative w-[140px] h-[140px]">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#1f1f1f" strokeWidth="9" />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={skill.color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={inView ? C * (1 - skill.percent / 100) : C}
            style={{
              filter: "drop-shadow(0 0 6px " + skill.color + ")",
              transition: "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)",
            }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {value}%
        </span>
      </div>
      <p className="text-slate-300 text-sm font-medium">{skill.name}</p>
    </div>
  );
}

const PER_PAGE = 4;

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous skills" : "Next skills"}
      className={
        "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full " +
        "border border-white/15 bg-night-800/90 backdrop-blur items-center justify-center " +
        "text-slate-400 hover:text-white hover:border-red-500/60 hover:bg-night-700 transition-all " +
        (direction === "prev" ? "-left-6" : "-right-6")
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );
}

export default function Skills() {
  const pages = [];
  for (let i = 0; i < skills.length; i += PER_PAGE) {
    pages.push(skills.slice(i, i + PER_PAGE));
  }

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = pages.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-red-800/15 blur-[120px]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            label="TECHNICAL EXPERTISE"
            title="Front-End Skills"
            description="The front-end technologies I use to build modern, responsive web experiences."
          />
        </Reveal>

        <Reveal>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ArrowButton direction="prev" onClick={prev} />
            <ArrowButton direction="next" onClick={next} />

            <div className="overflow-hidden py-2">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: "translateX(-" + index * 100 + "%)" }}
              >
                {pages.map((page, pi) => (
                  <div key={pi} className="w-full shrink-0">
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-12">
                      {page.map((s) => (
                        <SkillRing key={s.name} skill={s} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* dots */}
            <div className="mt-12 flex justify-center gap-2.5">
              {pages.map((_, pi) => (
                <button
                  key={pi}
                  onClick={() => setIndex(pi)}
                  aria-label={"Go to slide " + (pi + 1)}
                  className={
                    "h-2 rounded-full transition-all duration-300 " +
                    (pi === index
                      ? "w-7 bg-gradient-to-r from-red-600 to-red-400"
                      : "w-2 bg-white/20 hover:bg-white/40")
                  }
                ></button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
