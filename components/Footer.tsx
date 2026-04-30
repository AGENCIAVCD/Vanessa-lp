import Image from "next/image";

type FooterProps = {
  closingDate: string;
};

export function Footer({ closingDate }: FooterProps) {
  return (
    <footer className="px-5 pb-28 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-[1.25rem] border border-rosegold/25 bg-white px-6 py-6 text-center shadow-soft sm:flex-row sm:text-left">
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
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
            Protocolo Reset • Especial Dia das Mães
          </p>
          <p className="mt-2 font-body text-sm font-medium text-ink">
            Campanha promocional com divulgação exclusiva no grupo VIP. Encerramento previsto para {closingDate}.
          </p>
        </div>
      </div>
    </footer>
  );
}
