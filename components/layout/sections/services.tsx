import { Badge } from "@/components/ui/badge";

const serviceList = [
  "Conseil sportif de haut niveau",
  "Gestion de carrière des joueurs",
  "Préparation mentale",
  "Accompagnement d'athlètes",
  "Service de conciergerie premium",
  "Transport & chauffeur privé",
  "Aide à la recherche de logement",
  "Conseil en investissement",
  "Médiation avec les agents sportifs",
  "Formation et transmission",
];

export const ServicesSection = () => {
  return (
    <section id="domaines" className="container py-16 md:py-24">
      <div className="mb-10 text-center md:mb-12">
        <p data-reveal className="section-kicker">Offres & expertises</p>
        <h2 data-reveal data-reveal-delay="1" className="font-title text-balance-pretty text-3xl font-semibold md:text-5xl">
          Un accompagnement global,
          <br className="hidden md:block" />
          sur et en dehors du terrain.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {serviceList.map((service, index) => (
          <article
            key={service}
            data-reveal
            data-reveal-delay={((index % 4) + 1).toString()}
            className="group rounded-3xl border border-border/70 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_40px_-28px_rgba(37,185,255,0.8)]"
          >
            <Badge variant="outline" className="mb-4 border-primary/45 bg-primary/10">
              Axe {String(index + 1).padStart(2, "0")}
            </Badge>
            <p className="text-sm font-semibold leading-relaxed md:text-base">
              {service}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
