export function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--bg-primary)] pt-4 pb-0"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Floating Card */}
        <div
          className="relative z-20 -mt-24 md:-mt-32
                     bg-[var(--bg-card)]
                     border border-[var(--border)]
                     rounded-2xl p-8 md:p-10 shadow-1xl"
        >
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
              About
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                Graphic & UI/Web Designer skilled in{" "}
                <span className="text-[var(--accent)] font-medium">
                  Adobe Suite, Figma, WordPress, and Elementor
                </span>.
              </p>

              <p>
                Experienced in digital platforms, branding, and responsive web design for tech, gaming, and digital marketing industries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}