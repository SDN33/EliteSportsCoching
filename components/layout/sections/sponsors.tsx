import Image from "next/image";

export const SponsorsSection = () => {
  return (
    <section id="identite" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        <div data-reveal className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p data-reveal className="text-xs uppercase tracking-widest font-bold text-blue-400">
              🎯 Notre Positionnement
            </p>
            <h2
              data-reveal
              data-reveal-delay="1"
              className="font-title text-4xl md:text-6xl font-bold leading-tight text-foreground"
            >
              Conseiller Sportif Multisport
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                & Accompagnement Premium
              </span>
            </h2>

            <p
              data-reveal
              data-reveal-delay="2"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Sport Synergie Consulting: l'accompagnement global des athlètes avec conseil sportif pur, gestion de carrière et soutien dans la vie personnelle et professionnelle.
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
