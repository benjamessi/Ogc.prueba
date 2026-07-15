import { useEffect, useState } from "react";

const HIDE_AFTER = 140;
const DELTA = 6;

/*
 * Oculta el header al bajar y lo devuelve al subir. Lee el scroll dentro de un
 * rAF para no forzar layout en cada evento; `isPinned` queda siempre true si el
 * usuario pidió menos movimiento o mientras el menú está abierto.
 */
export function useHeaderScroll({ isMenuOpen }) {
  const [isPinned, setIsPinned] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let lastY = window.scrollY;
    let ticking = false;

    function evaluate() {
      const currentY = window.scrollY;
      const distance = currentY - lastY;

      setIsScrolled(currentY > 24);

      if (Math.abs(distance) > DELTA) {
        setIsPinned(distance < 0 || currentY < HIDE_AFTER);
        lastY = currentY;
      }

      ticking = false;
    }

    function handleScroll() {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(evaluate);
    }

    evaluate();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isPinned: isPinned || isMenuOpen, isScrolled };
}
