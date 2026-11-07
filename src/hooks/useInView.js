import { useState, useEffect, useRef } from "react";

/**
 * Custom hook using IntersectionObserver to trigger entrance animations
 * when a section or element enters the viewport.
 */
export function useInView(options = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", triggerOnce = true } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}
