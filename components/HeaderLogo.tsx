import Image from "next/image";

type HeaderLogoProps = {
  availableSpots: number;
  closingDate: string;
};

export function HeaderLogo({ availableSpots, closingDate }: HeaderLogoProps) {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 pb-8 pt-5 sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="rounded-full border border-rosegold/30 bg-white/65 px-3 py-2 shadow-soft backdrop-blur">
          <Image
            alt="Logo da clínica Vanessa Carvalho"
            className="h-auto w-[120px] sm:w-[152px]"
            height={172}
            priority
            src="/logos/clinica-logo.png"
            width={450}
          />
        </div>
      </div>

      <div className="hidden rounded-full border border-rosegold/30 bg-white/70 px-4 py-2 text-right shadow-soft backdrop-blur sm:block">
        <p className="font-body text-[10px] uppercase tracking-[0.28em] text-forest/70">
          Especial Dia das Mães
        </p>
        <p className="mt-1 font-body text-xs font-semibold text-ink">
          {availableSpots} vagas prioritárias • encerra {closingDate}
        </p>
      </div>
    </header>
  );
}
