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
    "Elite Sports Coaching & Conseils accompagne athletes, clubs et structures avec une methode orientee resultats: performance, strategie sportive, mental et progression durable.",
  keywords: [
    "coaching sportif haut niveau",
    "conseil performance sportive",
    "accompagnement athlete",
    "accompagnement club sportif",
    "strategie de performance",
    "preparation mentale sportive",
  ],
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elite Sports Coaching & Conseils",
    description:
      "Cabinet de coaching sportif et de conseil strategique pour la performance individuelle et collective.",
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
      "Preparation mentale",
      "Structuration de projet sportif",
    ],
    description:
      "Accompagnement de la performance sportive: strategie, mental, methodologie et progression durable pour athletes et organisations.",
    provider: {
      "@type": "Person",
      name: "Eddy Saint-Cyr",
    },
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
