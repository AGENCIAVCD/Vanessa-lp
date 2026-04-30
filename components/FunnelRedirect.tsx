"use client";

import { useEffect } from "react";

import { WhatsappButton } from "@/components/WhatsappButton";

type FunnelRedirectProps = {
  whatsappGroupUrl: string;
};

export function FunnelRedirect({ whatsappGroupUrl }: FunnelRedirectProps) {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.replace(whatsappGroupUrl);
    }, 950);

    return () => window.clearTimeout(timeout);
  }, [whatsappGroupUrl]);

  return (
    <main className="grid min-h-[100svh] place-items-center bg-sand px-5 py-10 text-forest">
      <section className="w-full max-w-xl rounded-[1.25rem] border border-rosegold/35 bg-white p-7 text-center shadow-soft sm:p-10">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-forest">
          Protocolo Reset
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase leading-none text-forest sm:text-5xl">
          Liberando seu acesso VIP
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-base font-medium leading-7 text-ink">
          Aguarde um instante. Você será direcionada para o grupo exclusivo do WhatsApp.
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsappButton
            aria-label="Abrir grupo VIP do Protocolo Reset no WhatsApp"
            href={whatsappGroupUrl}
            label="ABRIR GRUPO VIP"
          />
        </div>

        <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
          Se o redirecionamento não abrir, toque no botão acima.
        </p>
      </section>
    </main>
  );
}
