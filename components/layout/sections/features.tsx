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
    <section id="methodologie" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-blue-500/5 via-amber-500/5 to-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <p data-reveal className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-4">
            📊 Approche Structurée
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-title text-4xl md:text-6xl font-bold leading-tight text-foreground"
          >
            Méthodologie
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              D&apos;Accompagnement Premium
            </span>
          </h2>
          <p data-reveal data-reveal-delay="2" className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            6 étapes éprouvées pour transformer les ambitions en résultats durables
          </p>
        </div>

        {/* Grid of Method Steps */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {methodSteps.map(({ title, detail, icon: Icon }, index) => (
            <article
              key={title}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-8 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-500 -z-10" />

              {/* Step number and icon container */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="inline-flex rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-blue-400 group-hover:border-blue-400/60 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="size-6" />
                </div>
                <span className="text-4xl font-title font-bold text-white/20 group-hover:text-blue-400/40 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-title text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">
                {detail}
              </p>

              {/* Animated border accent on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300 -z-10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
