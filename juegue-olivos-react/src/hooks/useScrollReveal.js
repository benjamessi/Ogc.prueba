import { useLayoutEffect } from "react";
import gsap from "gsap";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/*
 * Los reveals no pre-ocultan nada: el contenido queda visible por defecto y el
 * fromTo se aplica recién al entrar al viewport. Si un observer no dispara
 * (layout que cambia al cargar imágenes, remontajes de React), el contenido
 * simplemente se ve sin animación — nunca queda oculto.
 */
export function createScrollReveals() {
  const observers = [];

  function observeOnce(element, onEnter) {
    const observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          self.unobserve(entry.target);
          onEnter();
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(element);
    observers.push(observer);
  }

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    observeOnce(element, () => {
      gsap.fromTo(
        element,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", clearProps: "all" }
      );
    });
  });

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    observeOnce(group, () => {
      gsap.fromTo(
        group.children,
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", clearProps: "all" }
      );
    });
  });

  document.querySelectorAll("[data-count]").forEach((element) => {
    const target = Number(element.dataset.count);
    const state = { value: Number(element.dataset.countFrom ?? 0) };

    observeOnce(element, () => {
      gsap.to(state, {
        value: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          element.textContent = String(Math.round(state.value));
        }
      });
    });
  });

  return () => observers.forEach((observer) => observer.disconnect());
}

export function useScrollReveal(scopeRef) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    let disconnectObservers;
    const ctx = gsap.context(() => {
      disconnectObservers = createScrollReveals();
    }, scopeRef);

    return () => {
      disconnectObservers?.();
      ctx.revert();
    };
  }, [scopeRef]);
}
