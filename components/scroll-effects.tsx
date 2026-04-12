"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";
const parallaxSelector = "[data-parallax]";

function updateParallax() {
  const scrollY = window.scrollY;
  const parallaxElements = document.querySelectorAll<HTMLElement>(parallaxSelector);

  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.parallaxSpeed ?? "0.1");
    const offset = scrollY * speed;
    element.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

function updateProgress() {
  const root = document.documentElement;
  const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
  root.style.setProperty("--scroll-progress", String(progress));
}

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        element.classList.add("is-visible");
      });
      root.style.setProperty("--scroll-progress", "0");
      return;
    }

    const revealItems = document.querySelectorAll<HTMLElement>(revealSelector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    revealItems.forEach((element) => {
      observer.observe(element);
    });

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    updateParallax();
    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
