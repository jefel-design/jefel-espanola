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
            className="figma-home-photo"
            loading="eager"
            decoding="async"
          />

          <div>
            <h1 className="figma-home-title">
              Hey, It's Jefel.
            </h1>

            <p className="figma-home-copy">
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
              className="figma-home-nav-link"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="figma-home-nav-icon"
                strokeWidth={2}
              />
            </Link>
          ))}
        </nav>

        <div className="figma-home-contact slide-fade-up slide-fade-up-delay-2">
          <a
            href="mailto:jefeljohnmaitem@gmail.com"
            className="figma-home-cta"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
