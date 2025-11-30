import { useEffect, useRef } from "react";

interface UseOutsideClickOptions {
  listenCapturing?: boolean;
  enableEscape?: boolean;
}

const DEFAULT_OPTIONS: UseOutsideClickOptions = {
  listenCapturing: true,
  enableEscape: true,
};

export function useOutsideClick(
  handler: () => void,
  options: UseOutsideClickOptions = DEFAULT_OPTIONS,
) {
  const { listenCapturing, enableEscape } = options;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (enableEscape && e.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handler, listenCapturing, enableEscape]);

  return ref;
}
