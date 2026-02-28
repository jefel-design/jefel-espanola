import { ArrowRight, Linkedin, Mail } from 'lucide-react';

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
          background:
            'linear-gradient(45deg, #000000 0%, #000000 50%, #046ab4 70%, #b6fff6 100%)',
        }}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 min-h-[90vh] flex items-center">
        <div className="w-full space-y-8">

          {/* Text Block */}
          <div>
            {/* Profile Image - Above name */}
            <div className="flex justify-start mb-6">
              <img 
                src="/jefel.jpeg" 
                alt="Jefel John Española"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-3 border-white/20 shadow-lg"
              />
            </div>

            <h1 className="text-4xl pt-4 sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm Jefel John Española
            </h1>

            <p className="text-base sm:text-lg text-white/70">
              A UI/Graphic Designer & Web Developer from Philippines.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-0">
            
            {/* Primary Button - Matches About Card */}
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 py-3 rounded-lg text-sm font-medium
                         inline-flex items-center justify-center gap-2
                         transition-all duration-300
                         text-white
                         bg-[#0d0d0d] border border-white/10
                         hover:bg-[#046ab4] hover:border-[#046ab4]"
            >
              View Experience
              <ArrowRight size={16} />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg text-sm font-medium
                         border border-white/30 text-white
                         hover:border-[#046ab4] hover:text-[#046ab4]
                         transition-all duration-300"
            >
              Get in touch
            </button>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-0">
            <a
              href="https://www.linkedin.com/in/jefel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#046ab4] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jefeljohnmaitem@gmail.com"
              className="text-white/60 hover:text-[#046ab4] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}