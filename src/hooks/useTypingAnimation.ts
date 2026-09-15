import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useTypingAnimation(phrases: readonly string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || phrases.length === 0) return;

    const phrase = phrases[phraseIndex] ?? phrases[0] ?? "";
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

  return prefersReducedMotion ? (phrases[0] ?? "") : typedText;
}

