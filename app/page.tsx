import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { FinalWarning } from "@/components/FinalWarning";
import { Footer } from "@/components/Footer";
import { HeaderLogo } from "@/components/HeaderLogo";
import { HeroSection } from "@/components/HeroSection";
import { ResetExperience } from "@/components/ResetExperience";
import { SocialProof } from "@/components/SocialProof";
import { StickyWhatsappButton } from "@/components/StickyWhatsappButton";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { VipBenefits } from "@/components/VipBenefits";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Grupo VIP | Protocolo Reset",
  description:
    "Entre no grupo VIP do Protocolo Reset e receba a revelação da promoção mais especial do ano."
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-6">
      <HeaderLogo
        availableSpots={siteConfig.availableSpots}
        closingDate={siteConfig.closingDate}
      />
      <HeroSection
        availableSpots={siteConfig.availableSpots}
        ctaLabel={siteConfig.ctaPrimary}
        whatsappGroupUrl={siteConfig.funnelUrl}
      />
      <VipBenefits />
      <UrgencyBanner
        availableSpots={siteConfig.availableSpots}
        closingDate={siteConfig.closingDate}
      />
      <ResetExperience />
      <SocialProof
        testimonials={siteConfig.socialProof.testimonials}
        transformationCards={siteConfig.socialProof.transformationCards}
      />
      <CTASection
        buttonLabel={siteConfig.ctaSecondary}
        description="Entre agora e garanta seu acesso VIP antes que o grupo feche."
        title="Entre agora e garanta seu acesso VIP antes que o grupo feche."
        whatsappGroupUrl={siteConfig.funnelUrl}
      />
      <FinalWarning />
      <CTASection
        buttonLabel={siteConfig.ctaFinal}
        description="Seu acesso ao grupo é o único caminho para receber a condição especial, os bônus e a prioridade de atendimento."
        eyebrow="ENTRE AGORA E GARANTA SEU ACESSO VIP"
        title="A sua oportunidade começa no grupo VIP."
        variant="dark"
        whatsappGroupUrl={siteConfig.funnelUrl}
      />
      <Footer closingDate={siteConfig.closingDate} />
      <StickyWhatsappButton
        label={siteConfig.ctaFinal}
        whatsappGroupUrl={siteConfig.funnelUrl}
      />
    </main>
  );
}
