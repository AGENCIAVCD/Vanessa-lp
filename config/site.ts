export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vanessa-lp.vercel.app",
  whatsappGroupUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ??
    "https://chat.whatsapp.com/BfiyJJfePlMCQEVwWY0QUi?mode=gi_t",
  funnelUrl: "/f",
  availableSpots: 27,
  closingDate: "11 de maio, às 23h59",
  ctaPrimary: "QUERO ENTRAR NO GRUPO VIP",
  ctaSecondary: "ENTRAR NO GRUPO VIP AGORA",
  ctaFinal: "QUERO ENTRAR NO GRUPO",
  ogImage: "/launch/protocolo-reset-logo.png",
  socialProof: {
    testimonials: [
      {
        name: "Depoimento 01",
        label: "Espaço para depoimento real",
        text: "Substitua este card por um relato curto de transformação, com foco em autoestima, cuidado e confiança."
      },
      {
        name: "Depoimento 02",
        label: "Espaço para print de WhatsApp",
        text: "Use aqui um print com autorização da cliente para reforçar desejo, urgência e prova social."
      }
    ],
    transformationCards: [
      "Área pronta para antes/depois",
      "Área pronta para fotos de procedimentos",
      "Área pronta para prints de clientes",
      "Área pronta para resultados em destaque"
    ]
  }
} as const;
