import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Custom hook that tracks both the active section ID in the viewport
 * and the overall page scroll percentage (0 - 100), and scrolls sections
 * cleanly right to the top below the fixed navbar.
 */
export function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const manualScrollTimeoutRef = useRef(null);
  const isManualScrollingRef = useRef(false);

  const getNavbarHeight = () => {
    if (typeof document === "undefined") return 60;
    const navEl = document.querySelector(".nav-container");
    if (!navEl) return 60;
    // Use the collapsed header bar height (capped at 72px in case mobile menu is open)
    return Math.min(navEl.offsetHeight, 68);
  };

  const selectSection = useCallback((id, event) => {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }

    setActiveId(id);

    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const targetEl = document.getElementById(id);
    if (!targetEl) return;

    isManualScrollingRef.current = true;
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    const navHeight = getNavbarHeight();
    const targetTop =
      id === "home"
        ? 0
        : Math.max(0, targetEl.offsetTop - navHeight);

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }

    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 650);
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

      if (isManualScrollingRef.current || sectionIds.length === 0) {
        return;
      }

      const navHeight = getNavbarHeight();
      const triggerLine = scrollTop + navHeight + 28;

      if (docHeight > 0 && Math.ceil(scrollTop) >= docHeight - 10) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let currentSectionId = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= triggerLine) {
          currentSectionId = id;
        }
      }

      setActiveId(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [sectionIds]);

  return {
    activeId,
    selectSection,
    scrollProgress,
    showScrollTop,
  };
}
