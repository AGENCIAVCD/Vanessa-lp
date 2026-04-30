type UrgencyBannerProps = {
  availableSpots: number;
  closingDate: string;
};

export function UrgencyBanner({ availableSpots, closingDate }: UrgencyBannerProps) {
  return (
    <section className="px-5 pb-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.25rem] border border-rosegold/40 bg-white px-6 py-7 shadow-soft sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center">
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-[#855d3d]">
                ⚠️ ATENÇÃO: O GRUPO PODE FECHAR A QUALQUER MOMENTO
              </p>
              <p className="mt-3 font-body text-base font-medium leading-7 text-ink">
                Quem entrar primeiro terá prioridade no acesso às condições especiais.
              </p>
            </div>

            <div className="rounded-[1rem] border border-forest/15 bg-sand px-5 py-4">
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-forest">
                Pressão de campanha
              </p>
              <p className="mt-2 font-display text-3xl text-forest">{availableSpots} vagas em prioridade</p>
              <p className="mt-2 font-body text-sm font-medium text-ink">Encerramento previsto para {closingDate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
