import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";

export function HeroNote() {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusFrame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const clickedTrigger = triggerRef.current?.contains(target);
      const clickedPanel = panelRef.current?.contains(target);

      if (!clickedTrigger && !clickedPanel) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsOpen(false);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeAndRestoreFocus = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="hero-note-trigger"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls={isOpen ? titleId : undefined}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        NOTE / 01
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={titleId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${titleId}-heading`}
          className="hero-note-panel"
        >
          <div className="hero-note-panel-header">
            <h2 id={`${titleId}-heading`} className="hero-note-title">
              A note on my work
            </h2>

            <button
              ref={closeRef}
              type="button"
              className="hero-note-close"
              aria-label="Close note"
              onClick={closeAndRestoreFocus}
            >
              <X aria-hidden="true" size={15} strokeWidth={1.75} />
            </button>
          </div>

          <div className="hero-note-copy">
            <p>
              Some of my recent work was produced for employers and clients
              and isn’t available for public display.
            </p>
            <p>
              For that reason, this portfolio currently focuses on my
              experience and capabilities rather than client work.
            </p>
            <p>
              For opportunities or questions about my experience, feel free to
              get in touch.
            </p>
          </div>

          <a
            href="mailto:jefel.maitem@gmail.com"
            className="hero-note-contact"
            onClick={() => setIsOpen(false)}
          >
            Contact me <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </>
  );
}
