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
    title: "Vision stratégique",
    description:
      "Des plans d'action structurés pour transformer des objectifs ambitieux en trajectoires mesurables.",
  },
  {
    icon: Users2,
    title: "Accompagnement humain",
    description:
      "Un cadre exigeant et bienveillant pour faire progresser l'athlète, le staff ou le projet collectif.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="presentation" className="container py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
        <div data-reveal="left" className="section-shell flex flex-col gap-5 md:gap-6">
          <p className="section-kicker">Expertise</p>
          <h2 className="font-title text-balance-pretty text-3xl font-semibold leading-tight md:text-5xl">
            Eddy Saint-Cyr, ex-joueur professionnel
            <br className="hidden md:block" />
            devenu architecte de la performance multisport.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Son approche relie coaching sportif, préparation mentale, stratégie
            de progression et accompagnement humain. Chaque mission démarre par
            un diagnostic précis, puis un plan d&apos;action clair et mesurable.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Elite Sports Coaching & Conseils combine exigence du haut niveau,
            transmission terrain et pilotage stratégique pour accélérer la
            performance durable des athlètes, clubs et organisations sportives.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              data-reveal="right"
              data-reveal-delay={(index + 1).toString()}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_40px_-28px_rgba(37,185,255,0.85)]"
            >
              <span className="absolute right-5 top-4 text-5xl font-semibold text-primary/12">
                0{index + 1}
              </span>
              <div className="mb-4 inline-flex rounded-xl border border-primary/25 bg-primary/10 p-3">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
