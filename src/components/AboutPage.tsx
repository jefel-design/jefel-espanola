import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Awards } from "./Awards";

export function AboutPage() {
  return (
    <div id="about" className="bg-[var(--bg-primary)] pt-28">
      <section className="relative overflow-hidden pb-14">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.48fr)] lg:gap-14">
            <RevealOnScroll className="space-y-8">
              <Link
                to="/"
                aria-label="Back to home"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
              >
                <ArrowLeft size={18} />
              </Link>

              <div className="flex items-center gap-4">
                <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] md:text-6xl">
                  I design digital work that feels clear, useful, and
                  intentional.
                </h2>
              </div>

              <div className="max-w-3xl space-y-4">
                <p
                  className="text-sm font-light leading-relaxed mb-5 md:text-base"
                  style={{ color: "var(--card-text-secondary)" }}
                >
                  I work across graphic design, UI/web design, and front-end
                  implementation, shaping visuals that communicate clearly and
                  feel deliberate.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll
              className="relative mx-auto w-full max-w-[12rem] px-2 pt-4 sm:max-w-[14rem] lg:max-w-[15rem]"
              delayMs={120}
            >
              <div className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-black/50 blur-2xl" />
              <div className="relative rotate-[2deg] rounded-[1.35rem] bg-[#151515] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-0">
                <div className="overflow-hidden rounded-[0.95rem] bg-black">
                  <img
                    src="/jefel.jpeg"
                    alt="Jefel Espanola portrait"
                    loading="eager"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                <div className="px-2 pb-1 pt-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      Jefel Espanola
                    </p>
                    <p className="text-xs text-[var(--text-muted)] sm:text-sm">
                      Graphic Designer and UI/Web Designer
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
          <Education />
          <Skills />
          <Awards />
        </div>
      </section>
    </div>
  );
}