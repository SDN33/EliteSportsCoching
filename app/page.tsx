import type { Metadata } from "next";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata: Metadata = {
  title: "Sport Synergie Consulting - Accompagnement Global des Athlètes",
  description:
    "Transformez votre carrière sportive. Gestion de carrière, conseil sportif, logement, investissement & conciergerie. L'accompagnement 360° avec Eddy Saint-Cyr.",
  keywords: [
    "gestion de carrière sportive",
    "conseiller sportif multisport",
    "accompagnement premium athlètes",
    "conciergerie sportive",
    "conseil en investissement sportif",
    "logement joueur professionnel",
    "Eddy Saint-Cyr",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sport Synergie Consulting - Accompagnement des Athlètes",
    description:
      "Transformez votre carrière : gestion stratégique, conseil sportif, logement, investissement & conciergerie. Accompagnement 360° premium avec Eddy Saint-Cyr.",
    url: "/",
    images: [
      {
        url: "/dsc01673.jpg",
        width: 1280,
        height: 853,
        alt: "Sport Synergie Consulting",
      },
      {
        url: "/Depassement-de-soi.webp",
        width: 1200,
        height: 630,
        alt: "Dépassement de soi - Sport Synergie Consulting",
      },
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "Logo Sport Synergie Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sport Synergie Consulting - Accompagnement Premium des Athlètes",
    description:
      "Transformez votre carrière sportive avec un accompagnement 360° : gestion, conseil, logement, investissement & conciergerie.",
    images: ["/dsc01673.jpg", "/Depassement-de-soi.webp"],
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sport Synergie Consulting",
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
    name: "Sport Synergie Consulting",
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
      <ServicesSection />
      <CommunitySection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
