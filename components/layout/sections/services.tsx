import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";

const serviceList = [
  "Conseil sportif de haut niveau",
  "Gestion de carrière des joueurs",
  "Préparation de gestion de vie privé",
  "Accompagnement d'athlètes",
  "Service de conciergerie premium",
  "Aide à la recherche de logement",
  "Conseil en investissement",
  "Médiation avec les agents sportifs",
  "Formation et transmission",
];

export const ServicesSection = () => {
  return (
    <section id="domaines" className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center md:mb-20">
          <p data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60 mb-4">
            <Dumbbell className="size-4 flex-shrink-0" />
            <span>9 Domaines d&apos;Excellence</span>
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance-pretty"
          >
            Accompagnement 360°
            <br />
            <span className="text-white">
              Sur et Hors du Terrain
            </span>
          </h2>
          <p data-reveal data-reveal-delay="2" className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour exceller. Carrière. Finances. Vie. Couvert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <article
              key={service}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-4 sm:p-6 transition-all duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10 cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 -z-10" />

              {/* Badge */}
              <Badge
                variant="outline"
                className="mb-4 border-white/20 bg-white/10 text-white/80 group-hover:border-white/40 group-hover:bg-white/15 transition-all"
              >
                Axe {String(index + 1).padStart(2, "0")}
              </Badge>

              {/* Service text */}
              <p className="font-title text-sm font-bold leading-relaxed text-white group-hover:text-white transition-colors">
                {service}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
