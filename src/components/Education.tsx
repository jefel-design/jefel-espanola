import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section 
      id="education" 
      className="pt-12 pb-14 bg-black border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-8">

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          Education
        </h2>

        <div className="group relative overflow-hidden rounded-xl border border-white/10 p-6 
                        bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-1">

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
            <GraduationCap
              size={22}
              className="text-white/40 transition-colors duration-300 group-hover:text-white"
            />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-white font-medium text-lg">
                  STI College Surigao
                </h3>

                <span className="text-sm text-white/60">
                  2021 – 2025
                </span>
              </div>

              <p className="text-white/70 text-sm">
                Bachelor of Science in Information Technology
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}