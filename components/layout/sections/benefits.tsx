import { Medal, Target, Users2 } from "lucide-react";

const pillars = [
  {
    icon: Medal,
    title: "Expertise terrain",
    description:
      "Une lecture concrète des cycles de performance issue du haut niveau et de la compétition.",
  },
  {
    icon: Target,
    title: "Conseil sportif pur",
    description:
      "Des plans d'action structurés pour guider la carrière sportive et les décisions clés à chaque étape.",
  },
  {
    icon: Users2,
    title: "Accompagnement humain global",
    description:
      "Un soutien concret sur et en dehors du terrain: logement, investissement, gestion de carrière et vie personnelle.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="presentation" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <div data-reveal="left" className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-bold text-orange-400">
                🏆 L'Expert Derrière Sport Synergie
              </p>
              <h2 className="font-title text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Eddy Saint-Cyr
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Architecte de Vos Victoires
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ex-joueur professionnel devenu stratège. Eddy fusionne <span className="text-white font-semibold">conseil sportif de haut niveau</span>, préparation mentale et accompagnement humain global.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Approche unique : diagnostic précis → plan d'action clair → suivi intensif. Chaque détail compte, chaque étape se mesure.
              </p>
              <div className="text-base leading-relaxed text-orange-400 font-semibold p-4 rounded-lg border border-orange-500/30 bg-orange-500/10">
                💡 "L'exigence du haut niveau + transmission du terrain = accélération de votre réussite"
              </div>
            </div>
          </div>

          {/* Right Pillars */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                data-reveal="right"
                data-reveal-delay={(index + 1).toString()}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-500 -z-10" />

                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex rounded-lg border border-orange-500/40 bg-orange-500/15 p-3 text-orange-400 group-hover:border-orange-400/60 group-hover:bg-orange-500/25 transition-all duration-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-title text-lg font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
