import { ReactNode, useEffect, useRef, useState } from 'react';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function RevealOnScroll({ children, className, delayMs = 0 }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = nodeRef.current;
    if (!target) return;

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
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={nodeRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(26px)',
        filter: isVisible ? 'brightness(1)' : 'brightness(0.45)',
        transition: 'opacity 700ms ease, transform 700ms ease, filter 700ms ease',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
