import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface ScrollToTopButtonProps {
  showAfter?: number;
  className?: string;
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  position?: "bottom-right" | "bottom-left" | "custom";
}

const ScrollToTopButton = ({
  showAfter = 400,
  className,
  size = "icon",
  variant = "default",
  position = "bottom-right",
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useScrollToTop();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfter]);

  const positionClasses = {
    "bottom-right": "fixed bottom-8 right-8 z-50",
    "bottom-left": "fixed bottom-8 left-8 z-50",
    "custom": "",
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size={size}
      variant={variant}
      className={cn(
        positionClasses[position],
        "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",
        className
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};

export default ScrollToTopButton;
