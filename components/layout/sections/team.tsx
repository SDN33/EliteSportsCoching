import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Trophy, Zap } from "lucide-react";

const values = [
  "Méthodologie",
  "Stratégie",
  "Bienveillance",
  "Transmission",
  "Engagement",
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
  {
    icon: Zap,
    title: "Réactivité & adaptabilité",
    text: "Répondre avec agilité aux changements de contexte pour maintenir le cap vers les objectifs.",
  },
];

export const TeamSection = () => {
  return (
    <section id="valeurs" className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center md:mb-20">
          <p data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60 mb-4">
            <Zap className="size-4 flex-shrink-0" />
            <span>Ce Qui Nous Définit</span>
          </p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance-pretty"
          >
            Une Culture
            <br />
            <span className="text-primary">
              D&apos;Excellence &amp; Transmission
            </span>
          </h2>
        </div>

        {/* Values Tags */}
        <div className="mb-10 sm:mb-16 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {values.map((value, index) => (
            <span
              key={value}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-lg px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white/90 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <span className="relative z-10">#{value}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
            </span>
          ))}
        </div>

        {/* Values Pillars Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              data-reveal
              data-reveal-delay={((index % 4) + 1).toString()}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-5 sm:p-8 transition-all duration-500 hover:border-white/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 -z-10" />

              {/* Icon */}
              <div className="mb-4 sm:mb-6 inline-flex rounded-lg border border-white/20 bg-white/10 p-3 text-white/80 group-hover:border-white/40 group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <Icon className="size-6" />
              </div>

              {/* Content */}
              <h3 className="font-title text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
