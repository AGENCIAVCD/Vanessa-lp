import Image from "next/image";

type HeaderLogoProps = {
  availableSpots: number;
  closingDate: string;
};

export function HeaderLogo({ availableSpots, closingDate }: HeaderLogoProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <div className="rounded-full border border-rosegold/35 bg-white/92 px-3 py-2 shadow-soft backdrop-blur-md">
          <Image
            alt="Logo da clínica Vanessa Carvalho"
            className="h-auto w-[104px] sm:w-[136px]"
            height={172}
            priority
            src="/logos/clinica-logo.png"
            width={450}
          />
        </div>

        <div className="rounded-full border border-rosegold/35 bg-white/92 px-4 py-2 text-right shadow-soft backdrop-blur-md">
          <p className="hidden font-body text-[10px] uppercase tracking-[0.22em] text-forest/75 sm:block">
            Especial Dia das Mães
          </p>
          <p className="font-body text-[11px] font-bold text-ink sm:mt-1 sm:text-xs">
            {availableSpots} vagas prioritárias • encerra {closingDate}
          </p>
        </div>
      </div>
    </header>
  );
}
