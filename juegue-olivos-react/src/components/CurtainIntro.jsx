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
      const tl = gsap.timeline({ onComplete: () => setIsDone(true) });

      tl.from(".curtain-emblem", {
        y: 24,
        scale: 0.94,
        autoAlpha: 0,
        duration: 0.62,
        ease: "power3.out",
        delay: 0.1
      })
        .from(".curtain-name", { y: 20, autoAlpha: 0, duration: 0.55, ease: "power3.out" }, "-=0.34")
        .from(".curtain-rule", { scaleX: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.28")
        .from(
          ".curtain-years",
          { y: 12, autoAlpha: 0, letterSpacing: "0.6em", duration: 0.55, ease: "power2.out" },
          "-=0.3"
        )
        // Los dos paños suben: primero el durazno (con el sello), después el verde.
        .add("lift", "+=0.5")
        .to(".curtain-panel--front", { yPercent: -100, duration: 0.6, ease: "power3.inOut" }, "lift+=0.18")
        .to(".curtain-panel--back", { yPercent: -100, duration: 0.6, ease: "power3.inOut" }, "lift+=0.3");
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
      <div className="curtain-panel curtain-panel--back" />
      <div className="curtain-panel curtain-panel--front">
        <div className="curtain-content">
          <span className="curtain-emblem">
            <img src={clubLogo} alt="" />
          </span>
          <p className="curtain-name">Olivos Golf Club</p>
          <span className="curtain-rule" />
          <p className="curtain-years">1926 — 2026</p>
        </div>
      </div>
    </div>
  );
}
