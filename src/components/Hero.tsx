import { Link } from "react-router-dom";

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Awards", href: "/awards" },
];

export function Hero() {
  return (
    <section id="hero" className="figma-home">
      <div aria-hidden="true" className="figma-vline figma-vline-left" />
      <div aria-hidden="true" className="figma-vline figma-vline-right" />
      <div aria-hidden="true" className="figma-hline figma-hline-intro" />
      <div aria-hidden="true" className="figma-hline figma-hline-nav" />
      <div aria-hidden="true" className="figma-hline figma-hline-contact" />
      <div aria-hidden="true" className="figma-hline figma-hline-end" />

      <div className="figma-home-content">
        <div className="figma-home-intro">
          <h1 className="font-heading text-[20px] font-normal leading-none text-[var(--text-primary)]">
            Hey, It's Jefel.
          </h1>

          <p className="mt-5 font-body text-[16px] leading-none text-[var(--text-muted)]">
            I design stuff.
          </p>
        </div>

        <nav aria-label="Homepage sections" className="figma-home-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-[16px] leading-none text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="figma-home-contact font-body text-[16px] leading-none text-[var(--text-primary)]">
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