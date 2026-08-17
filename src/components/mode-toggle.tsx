import { type MouseEvent, useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

import { type Theme, useTheme } from "@/components/theme-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModeToggleProps = {
  className?: string;
};

let themeAudioContext: AudioContext | undefined;
let tickPlayingUntil = 0;

function playThemeTick(nextTheme: Theme) {
  try {
    const AudioContextConstructor =
      window.AudioContext ??
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextConstructor) return;

    const context = themeAudioContext ?? new AudioContextConstructor();
    themeAudioContext = context;

    if (context.currentTime < tickPlayingUntil) return;

    if (context.state === "suspended") {
      void context.resume().catch(() => undefined);
    }

    const now = context.currentTime;
    const duration = 0.075;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(
      nextTheme === "dark" ? 360 : 480,
      now,
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      nextTheme === "dark" ? 210 : 300,
      now + duration,
    );

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.04, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gain.disconnect();
    });

    tickPlayingUntil = now + duration;
  } catch {
    // Theme switching remains fully functional when Web Audio is unavailable.
  }
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const isTransitioning = useRef(false);

  const handleThemeChange = (event: MouseEvent<HTMLButtonElement>) => {
    if (isTransitioning.current) return;

    playThemeTick(nextTheme);

    const button = event.currentTarget;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      typeof document.startViewTransition !== "function" ||
      prefersReducedMotion
    ) {
      setTheme(nextTheme);
      return;
    }

    const { left, top, width, height } = button.getBoundingClientRect();
    const originX = left + width / 2;
    const originY = top + height / 2;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const radius = Math.hypot(
      Math.max(originX, viewportWidth - originX),
      Math.max(originY, viewportHeight - originY),
    );
    const normalizedDiagonal =
      Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2;
    const originXPercent = (originX / viewportWidth) * 100;
    const originYPercent = (originY / viewportHeight) * 100;
    const radiusPercent = (radius / normalizedDiagonal) * 100;
    const root = document.documentElement;

    isTransitioning.current = true;
    root.classList.add("theme-transitioning");

    let transition: ViewTransition;

    try {
      transition = document.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme));
      });
    } catch {
      root.classList.remove("theme-transitioning");
      isTransitioning.current = false;
      setTheme(nextTheme);
      return;
    }

    void transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0% at ${originXPercent}% ${originYPercent}%)`,
              `circle(${radiusPercent}% at ${originXPercent}% ${originYPercent}%)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => undefined);

    const finishTransition = () => {
      root.classList.remove("theme-transitioning");
      isTransitioning.current = false;
    };

    void transition.finished.then(finishTransition, finishTransition);
  };

  return (
    <div className={cn("theme-toggle", className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="theme-toggle-button"
        aria-label={`Switch to ${nextTheme} theme`}
        title={`Switch to ${nextTheme} theme`}
        onClick={handleThemeChange}
      >
        {theme === "dark" ? (
          <Sun aria-hidden="true" className="theme-toggle-icon" />
        ) : (
          <Moon aria-hidden="true" className="theme-toggle-icon" />
        )}
      </Button>
    </div>
  );
}
