import Image from "next/image";

type FooterProps = {
  closingDate: string;
};

export function Footer({ closingDate }: FooterProps) {
  return (
    <footer className="px-5 pb-28 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-rosegold/18 bg-white/72 px-6 py-6 text-center shadow-soft backdrop-blur sm:flex-row sm:text-left">
        <div className="rounded-full border border-rosegold/25 bg-sand px-4 py-3">
          <Image
            alt="Logo da clínica Vanessa Carvalho"
            className="h-auto w-[118px]"
            height={172}
            src="/logos/clinica-logo.png"
            width={450}
          />
        </div>
        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-forest/60">
            Protocolo Reset • Especial Dia das Mães
          </p>
          <p className="mt-2 font-body text-sm text-ink/62">
            Campanha promocional com divulgação exclusiva no grupo VIP. Encerramento previsto para {closingDate}.
          </p>
        </div>
      </div>
    </footer>
  );
}
