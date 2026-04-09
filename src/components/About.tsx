import { RevealOnScroll } from "./RevealOnScroll";

export function About() {
  const focusAreas = ["Branding", "UI Design", "Front-end"];

  return (
    <section
      id="about"
      className="relative bg-[var(--bg-primary)] pt-4 pb-0"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Floating Card */}
        <RevealOnScroll
          className="relative z-20 -mt-24 md:-mt-32
                     bg-[var(--bg-card)]
                     border border-[var(--border)]
                     rounded-2xl p-8 md:p-10 shadow-1xl"
        >
          <div className="max-w-3xl space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--text-muted)]">
                About
              </p>

              <h2 className="max-w-2xl text-2xl md:text-4xl font-medium leading-tight tracking-tight text-[var(--text-primary)]">
                I design digital work that feels clear, useful, and intentional.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
