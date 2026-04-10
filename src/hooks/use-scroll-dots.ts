import { useState, useRef, useEffect, useCallback } from "react";

export function useScrollDots(itemCount: number) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || itemCount === 0) return;
    const cardWidth = el.scrollWidth / itemCount;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(index, itemCount - 1));
  }, [itemCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el || itemCount === 0) return;
    const cardWidth = el.scrollWidth / itemCount;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  }, [itemCount]);

  return { scrollRef, active, scrollTo };
}
