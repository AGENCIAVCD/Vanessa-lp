import Image from "next/image";

import { SectionReveal } from "@/components/SectionReveal";

type SocialProofProps = {
  testimonials: ReadonlyArray<{
    name: string;
    label: string;
    text: string;
  }>;
  transformationCards: ReadonlyArray<string>;
};

export function SocialProof({
  testimonials,
  transformationCards
}: SocialProofProps) {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10" id="prova-social">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="max-w-3xl">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-forest" data-reveal-item>
            RESULTADOS REAIS
          </p>
          <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl" data-reveal-item>
            Uma área pronta para transformar prova social em decisão imediata.
          </h2>
          <p className="mt-5 font-body text-base font-medium leading-8 text-ink" data-reveal-item>
            Esta seção já está preparada para receber antes e depois, prints, depoimentos e cards de transformação com o mesmo acabamento premium da página.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]">
          <SectionReveal className="h-full">
            <div
              className="relative h-full overflow-hidden rounded-[1.25rem] border border-rosegold/25 bg-white shadow-soft"
              data-reveal-item
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(31,61,54,0.7))]" />
              <Image
                alt="Retrato da Vanessa para reforço de confiança na campanha"
                className="h-full w-full object-cover object-center"
                height={4125}
                src="/images/vanessa-portrait.jpg"
                width={2319}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.24em] text-rosegold">
                  Área âncora para confiança
                </p>
                <p className="mt-3 font-display text-3xl leading-tight">
                  Use este espaço para destacar sua autoridade, seus bastidores ou uma transformação marcante.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="grid gap-4 sm:grid-cols-2">
            {transformationCards.map((card) => (
              <article
                className="flex min-h-[220px] flex-col justify-between rounded-[1rem] border border-dashed border-rosegold/50 bg-white p-5 shadow-soft"
                data-reveal-item
                key={card}
              >
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-forest">
                    Placeholder premium
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-forest">{card}</h3>
                </div>
                <p className="font-body text-sm font-medium leading-6 text-ink">
                  Substitua por material real para elevar ainda mais a conversão desta campanha.
                </p>
              </article>
            ))}

            {testimonials.map((testimonial) => (
              <article
                className="rounded-[1rem] border border-rosegold/20 bg-forest p-5 text-white shadow-soft"
                data-reveal-item
                key={testimonial.name}
              >
                <p className="font-body text-[10px] uppercase tracking-[0.28em] text-rosegold">
                  {testimonial.label}
                </p>
                <p className="mt-4 font-body text-sm font-medium leading-7 text-white/86">“{testimonial.text}”</p>
                <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
