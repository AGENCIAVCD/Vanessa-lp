"use client";

import { useRef } from "react";

import { ClockIcon, CrownIcon, GiftIcon, SparkleIcon } from "@/components/icons";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const benefitItems = [
  {
    title: "CONDIÇÕES EXCLUSIVAS",
    description: "Condições liberadas apenas para quem estiver dentro do grupo VIP.",
    icon: CrownIcon
  },
  {
    title: "PROMOÇÃO POR TEMPO LIMITADO",
    description: "Oferta relâmpago com prazo curto para garantir urgência e decisão rápida.",
    icon: ClockIcon
  },
  {
    title: "PRIORIDADE NAS VAGAS",
    description: "As primeiras participantes recebem prioridade na agenda e no atendimento.",
    icon: SparkleIcon
  },
  {
    title: "BÔNUS ESPECIAIS",
    description: "Benefícios extras para tornar a experiência ainda mais desejada e completa.",
    icon: GiftIcon
  }
];

export function VipBenefits() {
  const ref = useRef<HTMLDivElement>(null);

  useRevealOnScroll(ref, {
    itemSelector: "[data-benefit-card]",
    translateY: 34,
    delay: 120
  });

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10" id="beneficios">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.25rem] bg-forest px-6 py-8 text-white shadow-soft sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-2xl">
            <p className="font-body text-[11px] uppercase tracking-[0.34em] text-rosegold">
              SOMENTE NO GRUPO VOCÊ TERÁ
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Exclusividade que acelera a decisão e valoriza quem entra primeiro.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" ref={ref}>
            {benefitItems.map(({ icon: Icon, title, description }) => (
              <article
                className="rounded-[1rem] border border-white/14 bg-white/8 p-5 backdrop-blur"
                data-benefit-card
                key={title}
              >
                <div className="inline-flex rounded-full border border-rosegold/35 bg-rosegold/10 p-3 text-rosegold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm font-medium leading-6 text-white/82">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
