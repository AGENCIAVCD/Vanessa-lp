import { SectionReveal } from "@/components/SectionReveal";

export function FinalWarning() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-rosegold/22 bg-[#efe8de] px-6 py-10 shadow-soft sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-end">
          <SectionReveal className="max-w-3xl">
            <p className="font-body text-[11px] uppercase tracking-[0.34em] text-forest/68" data-reveal-item>
              Pressão final
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl" data-reveal-item>
              A PROMOÇÃO NÃO SERÁ DIVULGADA FORA DO GRUPO
            </h2>
            <p className="mt-5 font-body text-base leading-8 text-ink/76 sm:text-lg" data-reveal-item>
              Se você não entrar agora, provavelmente vai perder essa oportunidade.
            </p>
          </SectionReveal>

          <SectionReveal className="rounded-[2rem] border border-white/60 bg-white/72 p-6 shadow-soft">
            <p className="font-display text-3xl leading-tight text-forest" data-reveal-item>
              Você cuida de todo mundo.
            </p>
            <p className="mt-2 font-display text-3xl leading-tight text-[#855d3d]" data-reveal-item>
              Agora é sua vez.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
