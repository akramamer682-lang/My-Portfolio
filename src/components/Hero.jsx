import { useEffect, useState } from "react";

const roles = ["Front-End Developer", "Full-Stack Developer", "React Engineer"];

function useTyping(words, speed = 75, pause = 1700) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((v) => v + 1);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 38 : speed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden scroll-mt-20">
      {/* background decor */}
      <div className="absolute inset-0 grid-bg"></div>
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-red-800/25 blur-[130px]"></div>
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-red-600/15 blur-[130px]"></div>
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-red-900/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1]">
            Hi! I'm <span className="text-gradient">Akram</span>
            <br />
            Mahmoud Amer
          </h1>

          <div className="mt-5 text-3xl md:text-4xl font-bold h-12">
            <span className="text-red-500">{typed}</span>
            <span className="cursor-blink text-red-500">|</span>
          </div>

          <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            Crafting beautiful, responsive web applications with modern front-end
            technologies. Passionate about clean code, elegant UI, and delightful
            user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="glow-btn px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-300 transition-all hover:-translate-y-0.5"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/15 hover:border-red-500/60 hover:text-red-400 transition-all hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* right — code editor */}
        <div className="relative hidden sm:block">
          <div className="animate-floaty-slow relative rounded-2xl border border-white/10 bg-night-800/90 backdrop-blur shadow-2xl shadow-black/60 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
              <span className="ml-3 text-xs text-slate-500 font-mono">akram.jsx</span>
            </div>
            <pre className="p-6 text-[13px] leading-7 font-mono overflow-x-auto">
              <code>
                <span className="text-red-400">const</span>{" "}
                <span className="text-red-300">developer</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-slate-300">{"{"}</span>{"\n"}
                {"  "}<span className="text-slate-400">name</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-green-400">"Akram Mahmoud Amer"</span>
                <span className="text-slate-500">,</span>{"\n"}
                {"  "}<span className="text-slate-400">role</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-green-400">"Front-End Dev"</span>
                <span className="text-slate-500">,</span>{"\n"}
                {"  "}<span className="text-slate-400">stack</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-slate-300">[</span>{"\n"}
                {"    "}<span className="text-green-400">"HTML"</span>
                <span className="text-slate-500">,</span>{" "}
                <span className="text-green-400">"CSS"</span>
                <span className="text-slate-500">,</span>{"\n"}
                {"    "}<span className="text-green-400">"JavaScript"</span>
                <span className="text-slate-500">,</span>{" "}
                <span className="text-green-400">"React"</span>
                <span className="text-slate-500">,</span>{"\n"}
                {"    "}<span className="text-green-400">"Bootstrap"</span>
                <span className="text-slate-500">,</span>{" "}
                <span className="text-green-400">"Tailwind"</span>{"\n"}
                {"  "}<span className="text-slate-300">]</span>{"\n"}
                <span className="text-slate-300">{"}"}</span>{"\n"}
                <span className="text-slate-600">{"> "}</span>
                <span className="text-red-400">ready_to_build</span>
                <span className="text-slate-400">()</span>{" "}
                <span className="text-green-400">✓</span>
              </code>
            </pre>
          </div>

          {/* floating chips */}
          <div className="animate-floaty absolute -top-5 right-6 px-4 py-1.5 rounded-full bg-night-700/90 border border-white/10 text-xs text-slate-300 shadow-lg backdrop-blur">
            ⚛ React Dev
          </div>
          <div className="animate-floaty-slow absolute -bottom-5 left-6 px-4 py-1.5 rounded-full bg-night-700/90 border border-white/10 text-xs text-red-400 shadow-lg backdrop-blur">
            UI / UX
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-[10px] tracking-[0.35em] font-mono">SCROLL</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-red-500 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
