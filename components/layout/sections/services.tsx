import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";

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
    <section id="domaines" className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center md:mb-20">
          <p data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-orange-400 mb-4">
            <Dumbbell className="size-4 flex-shrink-0" />
            <span>10 Domaines d&apos;Excellence</span>
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance-pretty"
          >
            Accompagnement 360°
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Sur et Hors du Terrain
            </span>
          </h2>
          <p data-reveal data-reveal-delay="2" className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour exceller. Carrière. Finances. Vie. Couvert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceList.map((service, index) => (
            <article
              key={service}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-4 sm:p-6 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-500 -z-10" />

              {/* Badge */}
              <Badge
                variant="outline"
                className="mb-4 border-orange-500/40 bg-orange-500/15 text-orange-400 group-hover:border-orange-400/60 group-hover:bg-orange-500/25 transition-all"
              >
                Axe {String(index + 1).padStart(2, "0")}
              </Badge>

              {/* Service text */}
              <p className="font-title text-sm font-bold leading-relaxed text-white group-hover:text-blue-100 transition-colors">
                {service}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
