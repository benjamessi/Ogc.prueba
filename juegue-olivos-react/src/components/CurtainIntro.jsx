import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import clubLogo from "../assets/logo-ogc.png";
import { prefersReducedMotion } from "../hooks/useScrollReveal.js";

export function CurtainIntro() {
  const [isDone, setIsDone] = useState(() => prefersReducedMotion());
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (isDone) {
      return undefined;
    }

    document.body.classList.add("curtain-lock");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsDone(true)
      });

      tl.from(".curtain-emblem", {
        y: 26,
        scale: 0.92,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1
      })
        .from(
          ".curtain-name",
          { y: 22, autoAlpha: 0, duration: 0.55, ease: "power3.out" },
          "-=0.35"
        )
        .from(".curtain-rule", { scaleX: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.28")
        .from(
          ".curtain-years",
          { y: 14, autoAlpha: 0, letterSpacing: "0.6em", duration: 0.55, ease: "power2.out" },
          "-=0.32"
        )
        .to(".curtain-content", {
          y: -20,
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.in",
          delay: 0.45
        })
        .add("open", "-=0.18")
        .to(
          ".curtain-panel--left",
          { xPercent: -101, duration: 0.9, ease: "power4.inOut" },
          "open"
        )
        .to(
          ".curtain-panel--right",
          { xPercent: 101, duration: 0.9, ease: "power4.inOut" },
          "open+=0.07"
        )
        .to(".curtain", { autoAlpha: 0, duration: 0.2 }, "-=0.15");
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.classList.remove("curtain-lock");
    };
  }, [isDone]);

  if (isDone) {
    return null;
  }

  return (
    <div className="curtain" ref={rootRef} aria-hidden="true">
      <div className="curtain-panel curtain-panel--left" />
      <div className="curtain-panel curtain-panel--right" />
      <div className="curtain-content">
        <span className="curtain-emblem">
          <img src={clubLogo} alt="" />
        </span>
        <p className="curtain-name">Olivos Golf Club</p>
        <span className="curtain-rule" />
        <p className="curtain-years">1926 — 2026</p>
      </div>
    </div>
  );
}
