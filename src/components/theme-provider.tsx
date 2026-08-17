import {
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import {
  type Theme,
  ThemeProviderContext,
} from "@/components/theme-context";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "jefel-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      return savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    const backgroundColor = window
      .getComputedStyle(root)
      .getPropertyValue("--bg-primary")
      .trim();
    themeColor?.setAttribute("content", backgroundColor);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme: Theme) => {
        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch {
          // The in-memory preference still works when storage is unavailable.
        }
        setThemeState(nextTheme);
      },
    }),
    [storageKey, theme],
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
