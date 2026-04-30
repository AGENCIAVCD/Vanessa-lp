import Image from "next/image";

import { CheckIcon } from "@/components/icons";
import { SectionReveal } from "@/components/SectionReveal";

const desireBullets = [
  "Um momento só seu",
  "Cuidado que transforma",
  "Autoestima e leveza",
  "Sua melhor versão"
];

export function ResetExperience() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10" id="reset">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center">
        <SectionReveal className="max-w-2xl">
          <p className="font-body text-[11px] uppercase tracking-[0.34em] text-forest/68" data-reveal-item>
            O RESET QUE VOCÊ PRECISA
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl" data-reveal-item>
            Uma experiência pensada para fazer a mulher se sentir vista, cuidada e desejada de novo.
          </h2>
          <p className="mt-5 font-body text-base leading-8 text-ink/78 sm:text-lg" data-reveal-item>
            O Protocolo Reset é uma experiência completa de estética, autocuidado e autoestima criada para mulheres que querem voltar a se sentir bonitas, cuidadas e confiantes.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {desireBullets.map((item) => (
              <li
                className="flex items-center gap-3 rounded-[1.5rem] border border-rosegold/20 bg-white/70 px-4 py-4 shadow-soft"
                data-reveal-item
                key={item}
              >
                <CheckIcon className="h-6 w-6 shrink-0 text-rosegold" />
                <span className="font-body text-sm font-medium uppercase tracking-[0.12em] text-forest">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="relative">
          <div
            className="relative overflow-hidden rounded-[2.75rem] border border-rosegold/20 bg-white shadow-soft"
            data-reveal-item
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,241,236,0)_32%,rgba(31,61,54,0.64)_100%)]" />
            <Image
              alt="Vanessa apresentando o protocolo com o celular em mãos"
              className="h-full w-full object-cover object-center"
              height={4125}
              src="/images/vanessa-phone.jpg"
              width={2319}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/12 p-5 text-white backdrop-blur">
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-white/72">
                  Autocuidado • autoestima • leveza
                </p>
                <p className="mt-3 font-display text-3xl leading-tight">
                  Um protocolo pensado para despertar a sua melhor versão.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
