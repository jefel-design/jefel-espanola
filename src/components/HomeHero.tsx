import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { publicAsset } from "../lib/assets";

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Awards", href: "/awards" },
];

export function HomeHero() {
  return (
    <section id="hero" className="figma-home">
      <div aria-hidden="true" className="figma-vline figma-vline-left" />
      <div aria-hidden="true" className="figma-vline figma-vline-right" />
      <div aria-hidden="true" className="figma-hline figma-hline-intro" />
      <div aria-hidden="true" className="figma-hline figma-hline-nav" />
      <div aria-hidden="true" className="figma-hline figma-hline-contact" />
      <div aria-hidden="true" className="figma-hline figma-hline-end" />

      <div className="figma-home-content">
        <div className="figma-home-intro slide-fade-up">
          <img
            src={publicAsset("jefel.jpeg")}
            alt="Jefel Espanola portrait"
            className="figma-home-photo object-cover opacity-90 ring-1 ring-[var(--grid-line)] transition-opacity duration-300 hover:opacity-100"
            loading="eager"
            decoding="async"
          />

          <div>
            <h1 className="font-heading text-[20px] font-normal leading-none text-[var(--text-primary)]">
              Hey, It's Jefel.
            </h1>

            <p className="mt-5 font-body text-[16px] leading-none text-[var(--text-muted)]">
              I design stuff.
            </p>
          </div>
        </div>

        <nav
          aria-label="Homepage sections"
          className="figma-home-nav slide-fade-up slide-fade-up-delay-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group relative inline-flex items-center pr-5 font-body text-[16px] leading-none text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2}
              />
            </Link>
          ))}
        </nav>

        <div className="figma-home-contact slide-fade-up slide-fade-up-delay-2 font-body text-[16px] leading-none text-[var(--text-primary)]">
          <a
            href="mailto:jefeljohnmaitem@gmail.com"
            className="text-[16px] transition-colors duration-300 hover:text-[var(--text-muted)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
