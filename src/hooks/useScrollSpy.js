import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook that tracks both the active section ID in the viewport
 * and the overall page scroll percentage (0 - 100).
 */
export function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const selectSection = useCallback((id) => {
    setActiveId(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowScrollTop(scrollTop > 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      sectionIds.length === 0
    ) {
      return undefined;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return {
    activeId,
    selectSection,
    scrollProgress,
    showScrollTop,
  };
}
