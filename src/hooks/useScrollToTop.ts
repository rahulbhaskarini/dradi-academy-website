import { useCallback } from "react";

interface UseScrollToTopOptions {
  behavior?: "smooth" | "instant";
  top?: number;
}

export const useScrollToTop = ({ behavior = "smooth", top = 0 }: UseScrollToTopOptions = {}) => {
  const scrollToTop = useCallback(() => {
    if (behavior === "smooth") {
      window.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      });
    } else {
      // For instant scrolling with fallbacks
      window.scrollTo(0, top);
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    }
  }, [behavior, top]);

  const scrollToElement = useCallback((elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        left: 0,
        behavior: behavior,
      });
    }
  }, [behavior]);

  return {
    scrollToTop,
    scrollToElement,
  };
};
