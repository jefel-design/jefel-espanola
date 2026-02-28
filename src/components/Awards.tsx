import { Award } from 'lucide-react';

const awards = [
  {
    title: 'Best Capstone Project',
    org: 'STI College Surigao',
  },
  {
    title: 'DOST Caraga Startup Pitch Fest',
    org: 'Champion',
  },
];

export function Awards() {
  return (
    <section
      id="awards"
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Awards
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl p-6 
                         transition-all duration-500 hover:-translate-y-1 border"
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
                <Award
                  size={20}
                  style={{ color: 'var(--card-icon)' }}
                  className="transition-colors duration-300"
                />

                <div>
                  <h3
                    className="font-medium text-lg"
                    style={{ color: 'var(--card-text-primary)' }}
                  >
                    {award.title}
                  </h3>

                  <p
                    className="text-sm mt-1"
                    style={{ color: 'var(--card-text-muted)' }}
                  >
                    {award.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}