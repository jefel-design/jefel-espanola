import { Briefcase } from 'lucide-react';
import { useState } from 'react';

const jobs = [
  {
    company: 'Ark Design B.V.',
    period: '2024 – Present',
    title: 'Graphic & UI/Web Designer',
    highlights: ['WordPress/Elementor', 'UI Design', 'Branding'],
    logo: 'ark-design.png', // or '/logos/ap-bren.png' if you moved them
  },
  {
    company: 'TNC Kaiserin',
    period: '2024',
    title: 'Graphic Designer',
    highlights: ['Head Designer', 'Posters', 'Branding'],
    logo: 'tnc-kaiserin.png',
  },
  {
    company: 'Bren Esports',
    period: '2024',
    title: 'Graphic Designer',
    highlights: ['Player-specific Design', 'Posters', 'Branding'],
    logo: 'ap-bren.png',
  },
  {
    company: 'Surigao Esports Collective',
    period: '2023 – 2024',
    title: 'Graphic Designer',
    highlights: ['Head Designer', 'Broadcast Visuals', 'Branding'],
    logo: 'surigao-esports.png',
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="pt-16 pb-16"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, index) => {
            const [imgError, setImgError] = useState(false);
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'var(--card-hover-gradient)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                        style={{
                          backgroundColor: 'var(--card-tag-bg)',
                        }}
                      >
                        {!imgError && job.logo ? (
                          <img 
                            src={job.logo}
                            alt={job.company}
                            className="w-6 h-6 object-contain"
                            onError={() => setImgError(true)}
                          />
                        ) : (
                          <Briefcase
                            size={20}
                            style={{ color: 'var(--card-icon)' }}
                          />
                        )}
                      </div>
                      <h3
                        className="font-semibold text-lg"
                        style={{ color: 'var(--card-text-primary)' }}
                      >
                        {job.company}
                      </h3>
                    </div>

                    <span
                      className="text-xs"
                      style={{ color: 'var(--card-text-muted)' }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <p
                    className="text-sm mb-5"
                    style={{ color: 'var(--card-text-secondary)' }}
                  >
                    {job.title}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {job.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md transition-all duration-300"
                        style={{
                          backgroundColor: 'var(--card-tag-bg)',
                          color: 'var(--card-tag-text)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}