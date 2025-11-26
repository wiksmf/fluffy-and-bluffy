import { useEffect, useRef } from "react";

interface UseOutsideClickHandler {
  (): void;
}

interface UseOutsideClickOptions {
  listenCapturing?: boolean;
  enableEscape?: boolean;
}

export function useOutsideClick(
  handler: UseOutsideClickHandler,
  { listenCapturing = true, enableEscape = true }: UseOutsideClickOptions = {},
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (
          ref.current &&
          !(ref.current as HTMLDivElement).contains(e.target as Node)
        ) {
          handler();
        }
      }

      function handleKeydown(e: KeyboardEvent) {
        if (enableEscape && e.key === "Escape") {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      document.addEventListener("keydown", handleKeydown);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
        document.removeEventListener("keydown", handleKeydown);
      };
    },

    [handler, listenCapturing, enableEscape],
  );

  return ref;
}
