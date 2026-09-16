import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4500);
  };

  const inputCls =
    "w-full bg-night-700 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500 transition-colors";

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-red-800/20 blur-[130px]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            label="SAY HELLO"
            title="Get in Touch"
            description="Open to freelance projects, internships, and full-time opportunities. Let's build something great together."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* info card */}
          <Reveal>
            <div className="h-full rounded-3xl p-8 md:p-10 bg-gradient-to-br from-red-900/40 via-night-800 to-night-800 border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-red-500/15 border border-red-500/25 flex items-center justify-center text-4xl">
                👨🏻‍💻
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Akram Mahmoud Amer</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-sm">
                I’m an Engineering student and a passionate Web Developer & Designer. I build modern and user-friendly websites using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I’m always learning new technologies and improving my skills to create better digital experiences.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm text-white">Cairo, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm text-white">akramamer682@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">💼</span>
                  <div>
                    <p className="text-xs text-slate-500">Focus</p>
                    <p className="text-sm text-white">Front-End Development</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form card */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl p-8 md:p-10 bg-white/[0.02] border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="firstName" placeholder="First Name" className={inputCls} />
                <input name="lastName" placeholder="Last Name" className={inputCls} />
                <input required type="email" name="email" placeholder="Email Address" className={inputCls} />
                <input name="phone" placeholder="Phone No. (optional)" className={inputCls} />
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Your message..."
                className={inputCls + " mt-4 resize-none"}
              ></textarea>
              <button
                type="submit"
                className="glow-btn mt-6 w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-300 transition-all"
              >
                Send Message
              </button>
              {sent && (
                <p className="mt-4 text-center text-sm text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
