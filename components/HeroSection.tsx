"use client";

import anime from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { HeroCountdown } from "@/components/HeroCountdown";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";
import { WhatsappButton } from "@/components/WhatsappButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroSectionProps = {
  whatsappGroupUrl: string;
  availableSpots: number;
  ctaLabel: string;
  countdownTarget: string;
};

export function HeroSection({
  whatsappGroupUrl,
  availableSpots,
  ctaLabel,
  countdownTarget
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
      duration: 760
    });

    timeline
      .add({
        targets: hero.querySelectorAll("[data-hero-copy]"),
        opacity: [0, 1],
        translateY: [26, 0],
        delay: anime.stagger(80)
      })
      .add(
        {
          targets: hero.querySelectorAll("[data-hero-visual]"),
          opacity: [0, 1],
          scale: [1.03, 1]
        },
        "-=420"
      );

    return () => {
      timeline.pause();
      anime.remove(targets);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-sand text-forest"
      id="topo"
      ref={heroRef}
    >
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block" data-hero-visual data-hero-item>
        <Image
          alt="Vanessa, profissional da clínica, em ambiente premium"
          className="object-cover object-[62%_center]"
          fill
          priority
          sizes="52vw"
          src="/images/hero-vanessa.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F5F1EC_0%,rgba(245,241,236,0.58)_24%,rgba(31,61,54,0.06)_62%,rgba(31,61,54,0.24)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(245,241,236,0.98)_64%,#F5F1EC_100%)] lg:bg-[linear-gradient(90deg,#F5F1EC_0%,#F5F1EC_44%,rgba(245,241,236,0.78)_56%,rgba(245,241,236,0.08)_78%,rgba(245,241,236,0)_100%)]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center px-5 pb-10 pt-28 sm:px-8 sm:pt-28 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:px-10 lg:pb-8 lg:pt-24 short-hero:pt-20 short-hero:pb-5">
        <div className="max-w-[670px]">
          <div
            className="inline-flex max-w-full items-center gap-2 border-l-2 border-rosegold bg-white/80 px-3 py-2 shadow-soft backdrop-blur short-hero:py-1.5"
            data-hero-copy
            data-hero-item
          >
            <span aria-hidden="true" className="text-sm">🔒</span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-forest sm:text-[11px] short-hero:text-[10px]">
              ACESSO EXCLUSIVO NO GRUPO DE WHATSAPP
            </span>
          </div>

          <div
            className="mt-5 inline-flex items-center gap-4 short-hero:mt-3"
            data-hero-copy
            data-hero-item
          >
            <Image
              alt="Logo Protocolo Reset"
              className="h-auto w-[88px] rounded-md border border-rosegold/25 bg-white/86 shadow-luxe sm:w-[102px] lg:w-[94px] short-hero:w-[72px]"
              height={1254}
              priority
              src="/launch/protocolo-reset-logo.png"
              width={1254}
            />
            <div className="hidden h-px w-20 bg-rosegold sm:block" />
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-forest short-hero:text-[10px]">
              Especial Dia das Mães
            </p>
          </div>

          <h1
            className="mt-5 max-w-[9.5ch] font-display text-[3.55rem] uppercase leading-[0.86] text-forest sm:text-[5.2rem] lg:text-[clamp(4.7rem,5.2vw,5.65rem)] short-hero:mt-3 short-hero:text-[clamp(4.15rem,4.75vw,4.95rem)]"
            data-hero-copy
            data-hero-item
          >
            PROTOCOLO RESET
          </h1>

          <div className="mt-4 h-px w-36 bg-rosegold short-hero:mt-3" data-hero-copy data-hero-item />

          <p
            className="mt-4 max-w-2xl font-body text-sm font-extrabold uppercase leading-6 tracking-[0.05em] text-[#1B332D] sm:text-base sm:leading-7 short-hero:mt-3 short-hero:text-sm short-hero:leading-6"
            data-hero-copy
            data-hero-item
          >
            A PROMOÇÃO MAIS ESPECIAL DO ANO SERÁ REVELADA EXCLUSIVAMENTE NO GRUPO VIP
          </p>

          <p
            className="mt-3 max-w-xl font-body text-base font-medium leading-7 text-ink sm:text-[1.05rem] short-hero:text-[0.98rem] short-hero:leading-6"
            data-hero-copy
            data-hero-item
          >
            MÃE, chegou o momento de dar um RESET na sua autoestima, no seu cuidado e na forma como você se vê no espelho.
          </p>

          <div
            className="mt-5 flex flex-wrap gap-3 font-body text-xs font-bold uppercase tracking-[0.08em] text-forest short-hero:mt-4 short-hero:gap-2 short-hero:text-[11px]"
            data-hero-copy
            data-hero-item
          >
            <span className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-rosegold" /> Condições exclusivas
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-rosegold" /> Prioridade nas vagas
            </span>
          </div>

          <div className="mt-5 max-w-[520px] short-hero:mt-4" data-hero-copy data-hero-item>
            <HeroCountdown targetDateTime={countdownTarget} />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center short-hero:mt-4" data-hero-copy data-hero-item>
            <WhatsappButton
              aria-label="Entrar no grupo VIP do WhatsApp para acessar a promoção do Protocolo Reset"
              href={whatsappGroupUrl}
              label={ctaLabel}
            />

            <div className="inline-flex items-center justify-center gap-2 border border-rosegold/40 bg-white/86 px-4 py-3 shadow-soft backdrop-blur short-hero:py-2.5">
              <ArrowUpRightIcon className="h-4 w-4 text-rosegold" />
              <span className="font-body text-xs font-bold uppercase tracking-[0.12em] text-ink">
                {availableSpots} vagas com prioridade
              </span>
            </div>
          </div>

          <p
            className="mt-3 hidden max-w-lg font-body text-sm font-semibold leading-6 text-ink/85 xl:block short-hero:max-w-xl short-hero:text-[13px] short-hero:leading-5"
            data-hero-copy
            data-hero-item
          >
            Entre agora e receba em primeira mão as condições exclusivas, bônus especiais e a prioridade para garantir o seu atendimento.
          </p>

          <div
            className="relative mt-8 h-[220px] overflow-hidden border border-rosegold/25 shadow-soft sm:h-[260px] lg:hidden"
            data-hero-item
            data-hero-visual
          >
            <Image
              alt="Vanessa, profissional da clínica, em ambiente premium"
              className="object-cover object-[70%_center]"
              fill
              priority
              sizes="100vw"
              src="/images/hero-vanessa.jpg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,61,54,0.46),rgba(31,61,54,0.02))]" />
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true">
          <div className="absolute bottom-10 right-10 max-w-[330px] border border-white/30 bg-forest/88 p-5 text-white shadow-soft backdrop-blur-md short-hero:bottom-7 short-hero:p-4">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-rosegold">
              Grupo reservado
            </p>
            <p className="mt-2 font-display text-3xl leading-none short-hero:text-2xl">{availableSpots} vagas</p>
            <p className="mt-2 font-body text-sm font-medium leading-6 text-white/90 short-hero:text-xs short-hero:leading-5">
              Prioridade para quem entrar primeiro no grupo VIP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
