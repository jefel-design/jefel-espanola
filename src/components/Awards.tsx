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
      className="pt-12 pb-14 bg-black border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          Awards
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 p-6 
                         bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient Hover Layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(45deg, #000000 0%, #000000 55%, #046ab4 75%, #b6fff6 100%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <Award
                  size={20}
                  className="text-white/40 transition-colors duration-300 group-hover:text-white"
                />

                <div>
                  <h3 className="text-white font-medium text-lg">
                    {award.title}
                  </h3>

                  <p className="text-sm text-white/60 mt-1">
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