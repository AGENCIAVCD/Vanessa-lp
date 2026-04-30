"use client";

import anime from "animejs";
import { AnchorHTMLAttributes, useEffect, useRef } from "react";

import { WhatsappIcon } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type WhatsappButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  compact?: boolean;
};

export function WhatsappButton({
  label,
  className,
  compact = false,
  href,
  rel,
  target,
  ...props
}: WhatsappButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInternalLink = typeof href === "string" && href.startsWith("/");
  const resolvedTarget = target ?? (isInternalLink ? "_self" : "_blank");
  const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noreferrer" : undefined);
  const resolvedClassName = [
    "group inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_34px_rgba(37,211,102,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1fb856] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4 focus-visible:ring-offset-sand",
    compact ? "px-5 py-3 text-[11px]" : "w-full sm:w-auto",
    className
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const node = ref.current;

    if (!node || prefersReducedMotion) {
      return;
    }

    const animation = anime({
      targets: node,
      scale: [1, 1.025, 1],
      boxShadow: [
        "0 18px 34px rgba(37, 211, 102, 0.16)",
        "0 24px 40px rgba(37, 211, 102, 0.32)",
        "0 18px 34px rgba(37, 211, 102, 0.16)"
      ],
      easing: "easeInOutSine",
      duration: 2200,
      loop: true
    });

    return () => {
      animation.pause();
      anime.remove(node);
    };
  }, [prefersReducedMotion]);

  return (
    <a
      {...props}
      className={resolvedClassName}
      href={href}
      ref={ref}
      rel={resolvedRel}
      target={resolvedTarget}
    >
      <WhatsappIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
