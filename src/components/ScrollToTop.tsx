import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  behavior?: "smooth" | "instant";
  top?: number;
  delay?: number;
}

const ScrollToTop = ({ behavior = "smooth", top = 0, delay = 0 }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // For smooth behavior, prefer window.scrollTo for better cross-browser support
      if (behavior === "smooth") {
        window.scrollTo({
          top,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // For instant behavior, also try document methods as fallback
        window.scrollTo(0, top);
        // Additional fallback for edge cases
        document.documentElement.scrollTop = top;
        document.body.scrollTop = top;
      }
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(scrollToTop, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, behavior, top, delay]);

  return null;
};

export default ScrollToTop;
