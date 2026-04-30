import type { Metadata } from "next";

import { FunnelRedirect } from "@/components/FunnelRedirect";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Acesso VIP | Protocolo Reset",
  description: "Página de acesso ao grupo VIP do Protocolo Reset.",
  robots: {
    index: false,
    follow: false
  }
};

export default function FunnelPage() {
  return <FunnelRedirect whatsappGroupUrl={siteConfig.whatsappGroupUrl} />;
}
