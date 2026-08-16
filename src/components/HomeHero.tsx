import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { publicAsset } from "../lib/assets";
import { HeroNote } from "./HeroNote";
import { ModeToggle } from "./mode-toggle";

const rolePhrases = [
  "A Graphic Designer.",
  "A Social Media Manager.",
  "A UI/Web Designer.",
  "A WordPress Developer.",
  "A Video Editor.",
];

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Awards", href: "/awards" },
];

function useTypingAnimation(phrases: string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const phrase = phrases[phraseIndex];
    const phraseIsComplete = typedText === phrase;
    const phraseIsDeleted = typedText.length === 0;
    let delay = isDeleting ? 44 : 82 + (typedText.length % 3) * 9;

    if (!isDeleting && phraseIsComplete) {
      delay = 1350;
    } else if (isDeleting && phraseIsDeleted) {
      delay = 180;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && phraseIsComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && phraseIsDeleted) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) =>
          (currentIndex + 1) % phrases.length,
        );
        return;
      }

      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(phrase.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, phrases, prefersReducedMotion, typedText]);

  return prefersReducedMotion ? phrases[0] : typedText;
}

export function HomeHero() {
  const typedPhrase = useTypingAnimation(rolePhrases);

  return (
    <section id="hero" className="figma-home">
      <div aria-hidden="true" className="figma-vline figma-vline-left" />
      <div aria-hidden="true" className="figma-vline figma-vline-right" />
      <div aria-hidden="true" className="figma-hline figma-hline-intro" />
      <div aria-hidden="true" className="figma-hline figma-hline-nav" />
      <div aria-hidden="true" className="figma-hline figma-hline-contact" />
      <div aria-hidden="true" className="figma-hline figma-hline-end" />

      <div className="figma-home-content">
        <div className="figma-home-introduction">
          <div className="figma-home-utilities slide-fade-up slide-fade-up-delay-1">
            <HeroNote />
            <ModeToggle />
          </div>

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

              <p className="figma-home-copy figma-home-copy-animated">
                <span aria-hidden="true">
                  <span className="figma-home-typed-text">
                    {typedPhrase}
                  </span>
                </span>
                <span className="sr-only">
                  Graphic Designer, Social Media Manager, UI/Web Designer,
                  WordPress Developer, and Video Editor.
                </span>
              </p>
            </div>
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
            href="mailto:jefel.maitem@gmail.com"
            className="figma-home-cta"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
