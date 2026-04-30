"use client";

import anime from "animejs";
import { RefObject, useEffect } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealOptions = {
  itemSelector?: string;
  translateY?: number;
  delay?: number;
  duration?: number;
};

export function useRevealOnScroll<T extends HTMLElement>(
  ref: RefObject<T>,
  options?: RevealOptions
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const targets = options?.itemSelector
      ? Array.from(node.querySelectorAll(options.itemSelector))
      : [node];

    if (targets.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      targets.forEach((target) => {
        if (target instanceof HTMLElement) {
          target.style.opacity = "1";
          target.style.transform = "none";
        }
      });

      return;
    }

    targets.forEach((target) => {
      if (target instanceof HTMLElement) {
        target.style.opacity = "0";
        target.style.transform = `translateY(${options?.translateY ?? 28}px)`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          anime({
            targets,
            opacity: [0, 1],
            translateY: [options?.translateY ?? 28, 0],
            duration: options?.duration ?? 900,
            easing: "easeOutExpo",
            delay: anime.stagger(options?.delay ?? 110)
          });

          observer.disconnect();
        });
      },
      {
        threshold: 0.22
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      anime.remove(targets);
    };
  }, [
    options?.delay,
    options?.duration,
    options?.itemSelector,
    options?.translateY,
    prefersReducedMotion,
    ref
  ]);
}
