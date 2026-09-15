import { useTypingAnimation } from "../hooks/useTypingAnimation";

const rolePhrases = [
  "A Graphic Designer.",
  "A Social Media Manager.",
  "A UI/Web Designer.",
  "A WordPress Developer.",
  "A Video Editor.",
];

export function AnimatedRole() {
  const typedPhrase = useTypingAnimation(rolePhrases);

  return (
    <p className="hero-role intro-enter intro-enter--role">
      <span className="hero-typed-text" aria-hidden="true">
        {typedPhrase}
      </span>
      <span className="sr-only">
        Graphic Designer, Social Media Manager, UI/Web Designer,
        WordPress Developer, and Video Editor.
      </span>
    </p>
  );
}
