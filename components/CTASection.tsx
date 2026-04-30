import { WhatsappButton } from "@/components/WhatsappButton";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  whatsappGroupUrl: string;
  variant?: "light" | "dark";
};

export function CTASection({
  eyebrow,
  title,
  description,
  buttonLabel,
  whatsappGroupUrl,
  variant = "light"
}: CTASectionProps) {
  const dark = variant === "dark";

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div
        className={[
          "mx-auto max-w-5xl rounded-[2.5rem] border px-6 py-10 text-center shadow-soft sm:px-10",
          dark
            ? "border-white/10 bg-forest text-white"
            : "border-rosegold/22 bg-white/78 text-forest backdrop-blur"
        ].join(" ")}
      >
        {eyebrow ? (
          <p
            className={[
              "font-body text-[11px] uppercase tracking-[0.34em]",
              dark ? "text-rosegold" : "text-forest/68"
            ].join(" ")}
          >
            {eyebrow}
          </p>
        ) : null}

        <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h2>
        <p
          className={[
            "mx-auto mt-5 max-w-2xl font-body text-base leading-8 sm:text-lg",
            dark ? "text-white/78" : "text-ink/76"
          ].join(" ")}
        >
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsappButton
            aria-label={`${buttonLabel} pelo WhatsApp`}
            href={whatsappGroupUrl}
            label={buttonLabel}
          />
        </div>
      </div>
    </section>
  );
}
