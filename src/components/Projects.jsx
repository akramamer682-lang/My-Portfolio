import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "portfolio", label: "Portfolio" },
];

function MockPreview({ project }) {
  return (
    <div className=" w-full h-full  bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ background: project.img ? `url(${project.img})` : project.bg, backgroundSize: "cover", backgroundPosition: "center" }}>
      
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-white/10 bg-night-800 hover:border-red-500/50 hover:-translate-y-1.5 transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <MockPreview project={project} />
        <div className="absolute inset-0 bg-night-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:to-red-300 transition-all"
          >
            View Project
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-red-500/60 hover:text-red-400 transition-all"
          >
            View Source
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-red-600/10 blur-[120px]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            label="MY WORK"
            title="Featured Projects"
            description="Real-world applications built with modern technologies and best practices."
          />
        </Reveal>

        <Reveal className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all " +
                  (filter === t.id
                    ? "text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-black/60"
                    : "text-slate-400 hover:text-white")
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={filter + "-" + p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
