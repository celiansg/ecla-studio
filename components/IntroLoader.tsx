"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leaveTimer = window.setTimeout(() => setLeaving(true), reducedMotion ? 40 : 1200);
    const hideTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 180 : 1800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return <div className={`intro-loader${leaving ? " is-leaving" : ""}`} role="status" aria-label="Chargement de ECLA">
    <div className="intro-loader-glow" aria-hidden="true" />
    <div className="intro-loader-content">
      <Image className="intro-loader-logo" src="/assets/ecla-logo-transparent.png" alt="ECLA" width={290} height={135} priority />
      <span className="intro-loader-line" aria-hidden="true" />
      <span className="intro-loader-label">Studio graphique &amp; impression</span>
    </div>
  </div>;
}
