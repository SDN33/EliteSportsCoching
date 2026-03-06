import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const values = [
  "Dépassement de soi",
  "Persévérance",
  "Méthodologie",
  "Stratégie",
  "Discipline",
  "Bienveillance",
  "Transmission",
  "Engagement",
  "Gestion de carrière",
  "Excellence",
];

const valuePillars = [
  {
    icon: Trophy,
    title: "Exigence de haut niveau",
    text: "Des standards élevés pour transformer la rigueur quotidienne en résultats concrets.",
  },
  {
    icon: ShieldCheck,
    title: "Cadre structuré",
    text: "Une méthode lisible qui sécurise la progression et évite la dispersion.",
  },
  {
    icon: HeartHandshake,
    title: "Relation de confiance",
    text: "Une approche humaine et engagée pour soutenir l'athlète dans sa carrière et sa vie personnelle.",
  },
  {
    icon: Lightbulb,
    title: "Vision stratégique",
    text: "Anticiper, prioriser et décider avec clarté dans des environnements compétitifs.",
  },
  {
    icon: Sparkles,
    title: "Culture de transmission",
    text: "Faire progresser les individus pour renforcer la performance du collectif.",
  },
];

export const TeamSection = () => {
  return (
    <section id="valeurs" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <p data-reveal className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-4">
            ⚡ Nos Valeurs Fondamentales
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-title text-4xl md:text-6xl font-bold leading-tight text-foreground"
          >
            Des Valeurs Fortes
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              Pour la Durabilité
            </span>
          </h2>
        </div>

        {/* Values Tags */}
        <div className="mb-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {values.map((value, index) => (
            <span
              key={value}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-lg px-5 py-2.5 text-sm font-bold text-white/90 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <span className="relative z-10">#{value}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-300" />
            </span>
          ))}
        </div>

        {/* Values Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-8 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-500 -z-10" />

              {/* Icon */}
              <div className="mb-6 inline-flex rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-blue-400 group-hover:border-blue-400/60 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="size-6" />
              </div>

              {/* Content */}
              <h3 className="font-title text-lg font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
