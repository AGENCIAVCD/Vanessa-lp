"use client";

import { ReactNode, useRef } from "react";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
};

export function SectionReveal({
  children,
  className,
  itemSelector = "[data-reveal-item]"
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useRevealOnScroll(ref, { itemSelector });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
