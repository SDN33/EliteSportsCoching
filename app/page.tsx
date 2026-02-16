import type { Metadata } from "next";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata: Metadata = {
  title: "Coaching sportif & conseil de performance",
  description:
    "Elite Sports Coaching & Conseils aide les athlètes et clubs à atteindre le haut niveau et à devenir joueur pro: entraînement, stratégie, préparation mentale et progression durable.",
  keywords: [
    "comment atteindre le haut niveau",
    "comment devenir joueur pro",
    "devenir joueur professionnel",
    "coaching sportif haut niveau",
    "préparation mentale sportive",
    "entraînement haut niveau",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coaching sportif & conseil de performance",
    description:
      "Accompagnement de la performance sportive pour athlètes, clubs et structures: stratégie, mental, méthode et progression durable.",
    url: "/",
    images: [
      {
        url: "/dsc01673.jpg",
        width: 1280,
        height: 853,
        alt: "Elite Sports Coaching & Conseils",
      },
      {
        url: "/Depassement-de-soi.webp",
        width: 1200,
        height: 630,
        alt: "Dépassement de soi - Elite Sports Coaching & Conseils",
      },
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "Logo Elite Sports Coaching & Conseils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching sportif & conseil de performance",
    description:
      "Performance sportive, stratégie et accompagnement premium pour athlètes et clubs.",
    images: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elite Sports Coaching & Conseils",
    description:
      "Cabinet de coaching sportif et de conseil stratégique pour la performance individuelle et collective.",
    url: "/",
    logo: "/logo.png",
    image: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
    email: "contact@elitesportscoching.com",
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Elite Sports Coaching & Conseils",
    areaServed: "France",
    serviceType: [
      "Coaching sportif",
      "Conseil sportif",
      "Préparation mentale",
      "Structuration de projet sportif",
    ],
    description:
      "Accompagnement de la performance sportive: stratégie, mental, méthodologie et progression durable pour athlètes et organisations.",
    provider: {
      "@type": "Person",
      name: "Eddy Saint-Cyr",
    },
    image: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
    email: "contact@elitesportscoching.com",
    telephone: "+33 6 00 00 00 00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <CommunitySection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
