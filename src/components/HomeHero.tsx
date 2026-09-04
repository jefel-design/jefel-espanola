import { useEffect, useState } from "react";
import { publicAsset } from "../lib/assets";
import { HeroNote } from "./HeroNote";
import { LinkedinIconLink } from "./LinkedinLink";
import { ModeToggle } from "./mode-toggle";

const rolePhrases = [
  "A Graphic Designer.",
  "A Social Media Manager.",
  "A UI/Web Designer.",
  "A WordPress Developer.",
  "A Video Editor.",
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
    <section id="intro" className="figma-home">
      <div className="figma-home-content">
        <div className="figma-home-introduction">
          <div className="figma-home-utilities intro-enter intro-enter--role">
            <HeroNote />
            <LinkedinIconLink />
            <ModeToggle />
          </div>

          <div className="figma-home-intro">
            <img
              src={publicAsset("jefel-640.jpg")}
              alt="Portrait of Jefel Española"
              width={640}
              height={639}
              className="figma-home-photo intro-enter"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            <div>
              <h1 className="figma-home-title intro-enter">
                Hey, It's Jefel.
              </h1>

              <p className="figma-home-copy figma-home-copy-animated intro-enter intro-enter--role">
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

        <div className="figma-home-about intro-enter intro-enter--about">
          <p className="figma-home-about-copy">
            <span>
              I design digital work that feels clear, useful, and intentional.
            </span>
            <span>
              I work across graphic design, UI/web design, and front-end
              implementation, shaping visuals that communicate clearly and
              make people feel something.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
