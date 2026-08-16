import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModeToggleProps = {
  className?: string;
};

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <div className={cn("theme-toggle", className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="theme-toggle-button"
        aria-label={`Switch to ${nextTheme} theme`}
        title={`Switch to ${nextTheme} theme`}
        onClick={() => setTheme(nextTheme)}
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
