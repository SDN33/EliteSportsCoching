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
  title: "Conseil sportif & accompagnement de carrière",
  description:
    "Elite Sports Conseils accompagne les athlètes dans la gestion de leur carrière et leur vie personnelle: conseil sportif, logement, investissement, conciergerie et médiation.",
  keywords: [
    "gestion de carrière sportive",
    "conseiller sportif multisport",
    "accompagnement athlètes",
    "conciergerie sportive",
    "aide logement joueur",
    "conseil investissement sportif",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Conseil sportif & accompagnement de carrière",
    description:
      "Accompagnement global pour athlètes: gestion de carrière, conseil sportif, logement, investissement et conciergerie premium.",
    url: "/",
    images: [
      {
        url: "/dsc01673.jpg",
        width: 1280,
        height: 853,
        alt: "Elite Sports Conseils",
      },
      {
        url: "/Depassement-de-soi.webp",
        width: 1200,
        height: 630,
        alt: "Dépassement de soi - Elite Sports Conseils",
      },
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "Logo Elite Sports Conseils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conseil sportif & accompagnement de carrière",
    description:
      "Conseil sportif, gestion de carrière et accompagnement global pour athlètes.",
    images: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elite Sports Conseils",
    description:
      "Cabinet de conseil sportif et d'accompagnement global pour la gestion de carrière des athlètes: sur et en dehors du terrain.",
    url: "/",
    logo: "/logo.png",
    image: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
    email: "contact@elitesportscoching.com",
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Elite Sports Conseils",
    areaServed: "France",
    serviceType: [
      "Conseil sportif",
      "Gestion de carrière des joueurs",
      "Conciergerie sportive",
      "Aide au logement",
      "Conseil en investissement",
      "Médiation avec les agents",
    ],
    description:
      "Accompagnement global pour athlètes: gestion de carrière, conseil sportif multisport, conciergerie, logement, investissement et médiation.",
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
