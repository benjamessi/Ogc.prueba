import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createScrollReveals, prefersReducedMotion } from "./useScrollReveal.js";

gsap.registerPlugin(ScrollTrigger);

export function useHomeAnimations(scopeRef) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    let disconnectObservers;
    const ctx = gsap.context(() => {
      gsap.from(".home-cover-title > *", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out"
      });

      gsap.from(".home-cover img", {
        scale: 1.07,
        duration: 1.8,
        ease: "power2.out"
      });

      gsap.to(".home-cover img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-cover",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      disconnectObservers = createScrollReveals();
    }, scopeRef);

    return () => {
      disconnectObservers?.();
      ctx.revert();
    };
  }, [scopeRef]);
}
