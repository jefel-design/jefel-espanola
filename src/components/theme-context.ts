import { createContext, type Dispatch, useContext } from "react";

export type Theme = "dark" | "light";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
