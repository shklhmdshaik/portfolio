import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { SITE_METADATA } from "../constants/portfolioData";

const ThemeContext = createContext({
  theme: SITE_METADATA.defaultTheme,
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return SITE_METADATA.defaultTheme;
    }
    try {
      const saved = window.localStorage.getItem(SITE_METADATA.themeStorageKey);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
    return SITE_METADATA.defaultTheme;
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-bs-theme", theme);
      document.body.setAttribute("data-theme", theme);
    }
    try {
      window.localStorage.setItem(SITE_METADATA.themeStorageKey, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
