import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">

      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--gradient)',
        }}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 dark-theme:bg-black/10 light-theme:bg-black/5" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 min-h-[80vh] flex items-center">
        <div className="w-full space-y-6">

          {/* Profile Image */}
          <div className="flex justify-start mb-6">
            <img 
              src="jefel.jpeg"
              alt="Jefel John Española"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-3 border-[var(--border)] shadow-lg"
            />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-4xl pt-4 sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4">
              Hi, I'm Jefel Española
            </h1>

            <p className="text-base font-light text-[var(--text-secondary)] mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-[var(--text-muted)]" />
              Surigao del Norte, Philippines
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-0">
            
            {/* Primary Button */}
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 py-3 rounded-lg text-sm font-light
                         inline-flex items-center justify-center gap-2
                         transition-all duration-300
                         bg-[var(--accent)]
                         text-white
                         hover:bg-[var(--accent-hover)]
                         shadow-sm hover:shadow-md"
            >
              See Experience
              <ArrowRight size={16} />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg text-sm font-light
                         border border-[var(--border)]
                         text-[var(--text-primary)]
                         hover:border-[var(--accent)]
                         hover:text-[var(--accent)]
                         transition-all duration-300
                         bg-transparent"
            >
              Get in touch
            </button>

          </div>

          {/* Social Links Section - REMOVED */}

        </div>
      </div>
    </section>
  );
}