import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: 0 | 120;
};

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const revealClassName = [
    "reveal-on-scroll",
    delayMs === 120 ? "reveal-on-scroll--delay-120" : "",
    isVisible ? "is-visible" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const target = nodeRef.current;
    if (!target) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px",
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return <div ref={nodeRef} className={revealClassName}>{children}</div>;
}
