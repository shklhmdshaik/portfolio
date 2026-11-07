import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Custom hook for copying text to the clipboard with automatic reset timeout.
 */
export function useClipboard(resetDelay = 2200) {
  const [copiedKey, setCopiedKey] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyToClipboard = useCallback(
    async (text, key = "default") => {
      if (!text) return false;

      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        setCopiedKey(key);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setCopiedKey(null);
        }, resetDelay);
        return true;
      } catch {
        return false;
      }
    },
    [resetDelay]
  );

  return { copiedKey, copyToClipboard };
}
