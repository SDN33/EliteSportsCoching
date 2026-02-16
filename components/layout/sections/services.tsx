import { Badge } from "@/components/ui/badge";

const serviceList = [
  "Conseil sportif de haut niveau",
  "Coaching & Conseils performance individuel",
  "Préparation mentale",
  "Accompagnement d'athlètes",
  "Accompagnement de clubs et staffs",
  "Structuration de projet sportif",
  "Développement du potentiel",
  "Formation et transmission",
  "Programme jeunes talents",
  "Performance collective multisport",
];

export const ServicesSection = () => {
  return (
    <section id="domaines" className="container py-16 md:py-24">
      <div data-reveal className="mb-10 text-center md:mb-12">
        <p className="section-kicker">Offres & expertises</p>
        <h2 className="font-title text-balance-pretty text-3xl font-semibold md:text-5xl">
          Du jeune talent au haut niveau,
          <br className="hidden md:block" />
          un accompagnement sportif à 360 degrés.
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
