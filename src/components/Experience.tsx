import { Briefcase } from 'lucide-react';
import { useState } from 'react';

const jobs = [
  {
    company: 'Ark Design B.V.',
    period: '2024 – Present',
    title: 'Graphic & UI/Web Designer at Ark Design B.V., building responsive WordPress websites, creating digital ads and branding, and designing user-focused web and software interfaces.',
    highlights: ['WordPress/Elementor', 'UI Design', 'Branding'],
    logo: 'ark-design.png',
    type: 'Full-time',
  },
  {
    company: 'TNC Kaiserin',
    period: '2024',
    title: 'Led graphic design projects, created promotional materials, and supported branding initiatives.',
    highlights: ['Head Designer', 'Posters', 'Branding'],
    logo: 'tnc-kaiserin.png',
    type: 'Freelance',
  },
  {
    company: 'Bren Esports',
    period: '2024',
    title: 'Player-specific Graphic Designer for Bren Esports, creating branded content and visuals for professional player Shizou.',
    highlights: ['Player-specific Design', 'Posters', 'Branding'],
    logo: 'ap-bren.png',
    type: 'Freelance',
  },
  {
    company: 'Surigao Esports Collective',
    period: '2023 – 2024',
    title: 'Led design for broadcast graphics, social media content, promotional posters, and brand assets.',
    highlights: ['Head Designer', 'Broadcast Visuals', 'Branding'],
    logo: 'surigao-esports.png',
    type: 'Contract',
  },
];

function TimelineCard({ job }: { job: any }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative pl-16 group">
      {/* Timeline Dot */}
      <div
        className="absolute z-10"
        style={{
          left: '16px',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="timeline-dot" />
      </div>

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
        }}
      >
        {/* Hover Gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'var(--card-hover-gradient)' }}
        />

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'var(--card-tag-bg)' }}
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

              {/* Company + Badge */}
              <div className="flex items-center gap-3 leading-none">
                <h3
                  className="font-medium text-lg leading-none"
                  style={{ color: 'var(--card-text-primary)' }}
                >
                  {job.company}
                </h3>

                {job.type && (
                  <span className="job-type-badge">
                    {job.type}
                  </span>
                )}
              </div>
            </div>

            {/* Period */}
            <span
              className="text-xs"
              style={{ color: 'var(--card-text-muted)' }}
            >
              {job.period}
            </span>
          </div>

          {/* Title */}
          <p
            className="text-sm mb-5"
            style={{ color: 'var(--card-text-secondary)' }}
          >
            {job.title}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3">
            {job.highlights.map((item: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-md"
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
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <h2
          className="text-3xl md:text-4xl font-medium tracking-tight mb-10"
          style={{ color: 'var(--text-primary)' }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: '16px',
              width: '2px',
              backgroundColor: 'var(--border)',
            }}
          />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <TimelineCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Glow animation on hover */
        @keyframes hoverGlow {
          0% { box-shadow: 0 0 0px var(--accent); }
          50% {
            box-shadow:
              0 0 10px var(--accent),
              0 0 22px var(--accent);
          }
          100% { box-shadow: 0 0 0px var(--accent); }
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: var(--accent);
          border: 4px solid var(--bg-primary);
          transition: transform 0.3s ease;
        }

        .group:hover .timeline-dot {
          animation: hoverGlow 1.5s ease-in-out infinite;
          transform: scale(1.1);
        }

        /* Badge styling */
        .job-type-badge {
          font-size: 10px;
          padding: 5px 8px;
          border-radius: 9999px;
          background: var(--card-tag-bg);
          color: var(--card-text-muted);
          border: 1px solid var(--card-border);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          line-height: 1;
          transition: all 0.3s ease;
        }

        .group:hover .job-type-badge {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}