"use client";

import { useEffect } from "react";

export function MethodAutoProgress() {
  useEffect(() => {
    const section = document.getElementById("methode");
    if (!section) return;

    const progressSteps = Array.from(section.querySelectorAll<HTMLElement>(".method-reference-progress-step"));
    const contentSteps = Array.from(section.querySelectorAll<HTMLElement>(".step-reference"));
    if (!progressSteps.length || progressSteps.length !== contentSteps.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = 0;
    let intervalId: number | undefined;

    const setActiveStep = (index: number, shouldScroll = false) => {
      activeIndex = index;
      progressSteps.forEach((step, stepIndex) => {
        const isActive = stepIndex === index;
        step.classList.toggle("is-active", isActive);
        const marker = step.querySelector("span");
        if (isActive) marker?.setAttribute("aria-current", "step");
        else marker?.removeAttribute("aria-current");
      });
      contentSteps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));

      if (shouldScroll && !reducedMotion) {
        contentSteps[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const start = () => {
      if (reducedMotion || intervalId !== undefined) return;
      intervalId = window.setInterval(() => {
        setActiveStep((activeIndex + 1) % contentSteps.length, true);
      }, 3200);
    };

    const stop = () => {
      if (intervalId === undefined) return;
      window.clearInterval(intervalId);
      intervalId = undefined;
    };

    setActiveStep(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);

    return () => {
      stop();
      observer.disconnect();
    };
  }, []);

  return null;
}
