"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOptions = {
  /** Starting y offset (px). Default 40 */
  y?: number;
  /** Starting opacity. Default 0 */
  fromOpacity?: number;
  /** Starting blur (px). Default 0 — set >0 for reveal-blur effect */
  blur?: number;
  /** Starting scale. Default 1 */
  scale?: number;
  /** Animation duration in seconds. Default 0.9 */
  duration?: number;
  /** Stagger between children (seconds). Default 0.12 */
  stagger?: number;
  /** Delay before animation starts (seconds). Default 0 */
  delay?: number;
  /** ScrollTrigger start position. Default "top 88%" */
  start?: string;
  /** Easing function. Default "power3.out" */
  ease?: string;
  /** Whether to animate child elements with stagger. Default false */
  staggerChildren?: boolean;
  /** CSS selector for stagger children. Default "> *" */
  childSelector?: string;
  /** Whether the animation should only run once. Default true */
  once?: boolean;
};

/**
 * Hook that uses GSAP + ScrollTrigger to reveal elements on scroll.
 * No flicker — GSAP sets initial state immediately via `gsap.set()`,
 * and ScrollTrigger handles the timing precisely.
 */
export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      fromOpacity = 0,
      blur = 0,
      scale = 1,
      duration = 0.9,
      stagger = 0.12,
      delay = 0,
      start = "top 88%",
      ease = "power3.out",
      staggerChildren = false,
      childSelector = "> *",
      once = true,
    } = options;

    const targets = staggerChildren
      ? el.querySelectorAll(childSelector)
      : [el];

    if (targets.length === 0) return;

    // Immediately set initial state (prevents flicker — no opacity:0 in CSS/inline)
    gsap.set(targets, {
      autoAlpha: fromOpacity,
      y,
      scale,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      willChange: "transform, opacity, filter",
    });

    const tween = gsap.to(targets, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: blur > 0 ? "blur(0px)" : "none",
      duration,
      stagger: staggerChildren ? stagger : 0,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
      onComplete: () => {
        // Clean up will-change after animation for performance
        gsap.set(targets, { willChange: "auto", clearProps: "filter" });
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [options]);

  return ref;
}

/**
 * Hook for fade-up animation (replaces animate-fade-up CSS class).
 */
export function useGsapFadeUp<T extends HTMLElement = HTMLElement>(
  opts: Omit<RevealOptions, "blur" | "scale"> = {}
) {
  return useGsapReveal<T>({ y: 30, duration: 0.8, ...opts });
}

/**
 * Hook for reveal-blur animation (replaces animate-reveal-blur CSS class).
 */
export function useGsapRevealBlur<T extends HTMLElement = HTMLElement>(
  opts: Omit<RevealOptions, "blur"> = {}
) {
  return useGsapReveal<T>({
    y: 42,
    blur: 18,
    scale: 0.985,
    duration: 0.95,
    ...opts,
  });
}

/**
 * Hook for scale-in animation (replaces animate-scale-in CSS class).
 */
export function useGsapScaleIn<T extends HTMLElement = HTMLElement>(
  opts: Omit<RevealOptions, "scale"> = {}
) {
  return useGsapReveal<T>({
    y: 0,
    scale: 0.92,
    duration: 0.7,
    ...opts,
  });
}
