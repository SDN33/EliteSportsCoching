import { BarChart3, Brain, Compass, Flag, Route, TimerReset } from "lucide-react";

const methodSteps = [
  {
    title: "Analyse complète",
    detail:
      "Diagnostic des forces, fragilités et habitudes de performance sur le terrain et hors terrain.",
    icon: BarChart3,
  },
  {
    title: "Objectifs cibles",
    detail:
      "Définition d'objectifs court, moyen et long terme, alignés avec la réalité du contexte sportif.",
    icon: Flag,
  },
  {
    title: "Plan stratégique",
    detail:
      "Construction d'un plan progressif avec priorités, rituels, séances et indicateurs de progression.",
    icon: Compass,
  },
  {
    title: "Discipline opérationnelle",
    detail:
      "Mise en place de standards de rigueur, routines et responsabilisation individuelle ou collective.",
    icon: Route,
  },
  {
    title: "Suivi continu",
    detail:
      "Ajustements en temps réel, retour d'expérience et recalibrage des actions selon les résultats.",
    icon: TimerReset,
  },
  {
    title: "Mentalité gagnante",
    detail:
      "Ancrage de la confiance, de la résilience et de la constance pour une performance durable.",
    icon: Brain,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="methodologie" className="container py-16 md:py-24">
      <div className="mb-10 text-center md:mb-12">
        <p data-reveal className="section-kicker">Méthode de performance</p>
        <h2 data-reveal data-reveal-delay="1" className="font-title text-balance-pretty text-3xl font-semibold md:text-5xl">
          Une méthodologie d&apos;accompagnement
          <br className="hidden md:block" />
          orientée résultats et progression durable.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {methodSteps.map(({ title, detail, icon: Icon }, index) => (
          <article
            key={title}
            data-reveal
            data-reveal-delay={((index % 4) + 1).toString()}
            className="group relative rounded-3xl border border-border/70 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_42px_-30px_rgba(37,185,255,0.9)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex rounded-xl border border-primary/25 bg-primary/10 p-3">
                <Icon className="size-5 text-primary" />
              </div>
              <span className="font-title text-2xl text-primary/35">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
