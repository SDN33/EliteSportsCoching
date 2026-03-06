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
              <p className="text-xs uppercase tracking-widest font-bold text-blue-400">
                🏆 Expertise Reconnue
              </p>
              <h2 className="font-title text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Eddy Saint-Cyr
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Architecte de Performance
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ex-joueur professionnel, Eddy combine <span className="text-white font-semibold">conseil sportif pur</span>, préparation mentale et accompagnement humain global.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Chaque mission commence par un diagnostic précis, suivi d'un plan d'action clair et mesurable aligné à vos objectifs.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground italic">
                Sport Synergie Consulting: L'exigence du haut niveau, la transmission du terrain, l'accompagnement global pour votre réussite.
              </p>
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
                  <div className="mt-1 inline-flex rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-blue-400 group-hover:border-blue-400/60 group-hover:bg-blue-500/20 transition-all duration-300">
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
