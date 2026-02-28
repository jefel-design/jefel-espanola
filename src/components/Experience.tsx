import { Briefcase } from 'lucide-react';

const jobs = [
  {
    company: 'Ark Design B.V.',
    period: '2024 – Present',
    title: 'Graphic & UI/Web Designer',
    highlights: ['WordPress/Elementor', 'UI Design', 'Branding'],
  },
  {
    company: 'TNC Kaiserin',
    period: '2024',
    title: 'Graphic Designer',
    highlights: ['Head Designer', 'Posters', 'Branding'],
  },
  {
    company: 'Ben Esports',
    period: '2024',
    title: 'Graphic Designer',
    highlights: ['Player Design', 'Branding'],
  },
  {
    company: 'Surigao Esports',
    period: '2023 – 2024',
    title: 'Graphic Designer',
    highlights: ['Head Designer', 'Broadcast Visuals', 'Branding'],
  },
];

export function Experience() {
  return (
    <section 
      id="experience" 
      className="pt-12 pb-14 bg-black border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] p-6 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient Hover Layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(45deg, #000000 0%, #000000 40%, #046ab4 75%, #b6fff6 100%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Briefcase
                      size={18}
                      className="text-white/40 group-hover:text-white transition-colors duration-300"
                    />
                    <h3 className="text-white font-semibold text-lg">
                      {job.company}
                    </h3>
                  </div>

                  <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">
                    {job.period}
                  </span>
                </div>

                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors mb-5">
                  {job.title}
                </p>

                <div className="flex flex-wrap gap-3">
                  {job.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-md
                                 bg-white/5 text-white/50
                                 group-hover:bg-white/10 group-hover:text-white
                                 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}