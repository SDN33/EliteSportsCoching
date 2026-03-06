import Image from "next/image";
import { Target } from "lucide-react";

export const SponsorsSection = () => {
  return (
    <section id="identite" className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        <div data-reveal className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-orange-400">
              <Target className="size-4 flex-shrink-0" />
              <span>Qui Sommes-Nous</span>
            </p>
            <h2
              data-reveal
              data-reveal-delay="1"
              className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance-pretty"
            >
              Sport Synergie Consulting
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Votre Partenaire Multisport
              </span>
            </h2>

            <p
              data-reveal
              data-reveal-delay="2"
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              L'accompagnement 360° des athlètes : conseil sportif pur, gestion de carrière stratégique, et soutien dans tous les domaines de votre vie professionnelle et personnelle.
            </p>
          </div>

          {/* Feature Image */}
          <article
            data-reveal
            data-reveal-delay="3"
            className="relative mx-auto w-full max-w-5xl rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-blue-500/50 group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px]">
              <Image
                src="/dsc01673.jpg"
                alt="Sport Synergie Consulting - Eddy Saint-Cyr"
                width={1200}
                height={480}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom accent bar */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500" />
          </article>
        </div>
      </div>
    </section>
  );
};
