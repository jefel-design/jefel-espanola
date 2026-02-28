import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section 
      id="education" 
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-8">

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Education
        </h2>

        <div
          className="group relative overflow-hidden rounded-xl border p-6 
                     transition-all duration-500 hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
          }}
        >

          {/* Gradient Hover Layer */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'var(--card-hover-gradient)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-start gap-4">
            <GraduationCap
              size={22}
              style={{ color: 'var(--card-icon)' }}
              className="transition-colors duration-300"
            />

            <div className="space-y-2 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3
                  className="font-medium text-lg"
                  style={{ color: 'var(--card-text-primary)' }}
                >
                  STI College Surigao
                </h3>

                <span
                  className="text-sm"
                  style={{ color: 'var(--card-text-muted)' }}
                >
                  2021 – 2025
                </span>
              </div>

              <p
                className="text-sm"
                style={{ color: 'var(--card-text-secondary)' }}
              >
                Bachelor of Science in Information Technology
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}