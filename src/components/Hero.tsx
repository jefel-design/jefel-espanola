import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { MdVerified } from 'react-icons/md';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="w-full space-y-4">

          {/* Profile Image */}
          <div className="flex justify-start mb-4">
            <div className="relative">
              <img
                src="jefel.jpeg"
                alt="Jefel John Española"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-3 border-[var(--border)] shadow-lg"
              />

              <span
                className="absolute right-[6px] bottom-[6px] md:right-[8px] md:bottom-[8px] leading-none w-5 h-5 md:w-[22px] md:h-[22px] rounded-full bg-white/95 border border-black/15 flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.28)]"
                aria-label="Verified profile"
                title="Verified"
              >
                <MdVerified className="text-[#1d9bf0] text-[15px] md:text-[16px]" />
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] md:text-6xl">
              Hey, I'm Jefel Española
            </h1>

            <p className="text-base font-light text-[var(--text-secondary)] mb-2 flex items-center gap-2">
              <MapPin size={16} className="text-[var(--text-muted)]" />
              Surigao del Norte, Philippines
            </p>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 pt-0">
            <button
              onClick={() => {
                window.location.href = 'mailto:jefeljohnmaitem@gmail.com';
              }}
              className="px-6 py-3 rounded-lg text-sm font-light
                         inline-flex items-center justify-center gap-2
                         transition-all duration-300
                         bg-[rgba(255,255,255,0.08)]
                         text-[var(--text-primary)]
                         hover:bg-[rgba(255,255,255,0.12)]
                         shadow-sm hover:shadow-md"
            >
              Get in touch
              <ArrowRight size={16} />
            </button>

            <div className="flex items-center gap-4 sm:ml-2">
              <a
                href="https://www.linkedin.com/in/jefel/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/jefel-design"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="mailto:jefeljohnmaitem@gmail.com"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
