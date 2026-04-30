"use client";

import anime from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { ArrowUpRightIcon } from "@/components/icons";
import { WhatsappButton } from "@/components/WhatsappButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroSectionProps = {
  whatsappGroupUrl: string;
  availableSpots: number;
  ctaLabel: string;
};

export function HeroSection({
  whatsappGroupUrl,
  availableSpots,
  ctaLabel
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const targets = hero.querySelectorAll("[data-hero-item]");

    if (prefersReducedMotion) {
      targets.forEach((target) => {
        if (target instanceof HTMLElement) {
          target.style.opacity = "1";
          target.style.transform = "none";
        }
      });

      return;
    }

    const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration: 900
    });

    timeline
      .add({
        targets: hero.querySelectorAll("[data-hero-copy]"),
        opacity: [0, 1],
        translateY: [42, 0],
        delay: anime.stagger(110)
      })
      .add(
        {
          targets: hero.querySelectorAll("[data-hero-visual]"),
          opacity: [0, 1],
          scale: [0.96, 1],
          translateY: [22, 0]
        },
        "-=520"
      );

    return () => {
      timeline.pause();
      anime.remove(targets);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative isolate overflow-hidden bg-hero-glow"
      id="topo"
      ref={heroRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(245,241,236,0.65),transparent_38%,rgba(31,61,54,0.08)_100%)]" />
      <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-rosegold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-forest/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:px-10 lg:pb-20">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-rosegold/35 bg-white/80 px-4 py-2 shadow-soft backdrop-blur"
            data-hero-copy
            data-hero-item
          >
            <span className="text-sm">🔒</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-forest">
              ACESSO EXCLUSIVO NO GRUPO DE WHATSAPP
            </span>
          </div>

          <div
            className="mt-7 inline-flex rounded-[2rem] border border-rosegold/30 bg-white/70 p-3 shadow-luxe"
            data-hero-copy
            data-hero-item
          >
            <Image
              alt="Logo Protocolo Reset"
              className="h-auto w-[210px] sm:w-[300px]"
              height={1254}
              priority
              src="/launch/protocolo-reset-logo.png"
              width={1254}
            />
          </div>

          <p
            className="mt-7 font-body text-[11px] font-semibold uppercase tracking-[0.36em] text-forest/70"
            data-hero-copy
            data-hero-item
          >
            PROTOCOLO RESET
          </p>

          <h1
            className="mt-4 max-w-[14ch] font-display text-4xl uppercase leading-[0.98] text-forest sm:text-5xl lg:text-[4.45rem]"
            data-hero-copy
            data-hero-item
          >
            A PROMOÇÃO MAIS ESPECIAL DO ANO SERÁ REVELADA EXCLUSIVAMENTE NO GRUPO VIP
          </h1>

          <p
            className="mt-5 max-w-xl font-body text-base leading-7 text-ink/80 sm:text-lg"
            data-hero-copy
            data-hero-item
          >
            MÃE, chegou o momento de dar um RESET na sua autoestima, no seu cuidado e na forma como você se vê no espelho.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center" data-hero-copy data-hero-item>
            <WhatsappButton
              aria-label="Entrar no grupo VIP do WhatsApp para acessar a promoção do Protocolo Reset"
              href={whatsappGroupUrl}
              label={ctaLabel}
            />

            <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/70 px-4 py-3 shadow-soft backdrop-blur">
              <ArrowUpRightIcon className="h-4 w-4 text-rosegold" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-ink/70">
                {availableSpots} vagas com prioridade
              </span>
            </div>
          </div>

          <p
            className="mt-4 max-w-lg font-body text-sm leading-6 text-ink/65"
            data-hero-copy
            data-hero-item
          >
            Entre agora e receba em primeira mão as condições exclusivas, bônus especiais e a prioridade para garantir o seu atendimento.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
          data-hero-item
          data-hero-visual
        >
          <div className="absolute -left-4 top-10 hidden h-[78%] w-full rounded-[2.75rem] border border-rosegold/25 bg-white/45 shadow-soft backdrop-blur lg:block" />
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-[#e6ddd2] shadow-soft">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,241,236,0.05),rgba(31,61,54,0.38))]" />
            <Image
              alt="Vanessa, profissional da clínica, em um ambiente premium"
              className="h-full w-full object-cover object-[72%_center]"
              height={1518}
              priority
              src="/images/hero-vanessa.jpg"
              width={2693}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="rounded-[1.75rem] border border-white/20 bg-forest/72 p-5 text-white shadow-luxe backdrop-blur">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Especial Dia das Mães
                </p>
                <p className="mt-3 max-w-[18ch] font-display text-2xl leading-tight">
                  O seu acesso VIP começa com um clique.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-4 rounded-[1.5rem] border border-rosegold/30 bg-white/92 px-4 py-4 shadow-luxe backdrop-blur sm:right-6">
            <p className="font-body text-[10px] uppercase tracking-[0.28em] text-forest/65">
              Grupo reservado
            </p>
            <p className="mt-1 font-display text-2xl text-forest">{availableSpots} vagas</p>
            <p className="font-body text-xs text-ink/60">prioridade para quem entrar primeiro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
