import { Button } from "./ui/button";

function LinkedinLogo() {
  return (
    <span aria-hidden="true" className="linkedin-logo">
      <svg
        viewBox="0 0 448 512"
        className="linkedin-logo-mark"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zm-46.49-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 107.2 53.6c0 29.6-24.1 53.7-53.41 53.7zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    </span>
  );
}

export function LinkedinLink() {
  return (
    <Button
      asChild
      variant="ghost"
      className="linkedin-link h-auto p-0 font-normal hover:bg-transparent"
    >
      <a
        href="https://www.linkedin.com/in/jefel/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo />
        Linkedin
      </a>
    </Button>
  );
}

export function LinkedinIconLink() {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="hero-linkedin-link"
    >
      <a
        href="https://www.linkedin.com/in/jefel/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn profile"
        title="LinkedIn"
      >
        <LinkedinLogo />
      </a>
    </Button>
  );
}
