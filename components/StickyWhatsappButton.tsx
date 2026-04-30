import { WhatsappButton } from "@/components/WhatsappButton";

type StickyWhatsappButtonProps = {
  whatsappGroupUrl: string;
  label: string;
};

export function StickyWhatsappButton({
  whatsappGroupUrl,
  label
}: StickyWhatsappButtonProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/50 bg-white/92 px-4 py-3 shadow-[0_-12px_40px_rgba(31,61,54,0.12)] backdrop-blur md:hidden">
      <WhatsappButton
        aria-label="Entrar no grupo VIP pelo botão fixo"
        className="w-full"
        compact
        href={whatsappGroupUrl}
        label={label}
      />
    </div>
  );
}
