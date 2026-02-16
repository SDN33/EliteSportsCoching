import { HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const values = [
  "Depassement de soi",
  "Perseverance",
  "Methodologie",
  "Strategie",
  "Discipline",
  "Bienveillance",
  "Transmission",
  "Engagement",
  "Vision long terme",
  "Excellence",
];

const valuePillars = [
  {
    icon: Trophy,
    title: "Exigence de haut niveau",
    text: "Des standards eleves pour transformer la rigueur quotidienne en resultats concrets.",
  },
  {
    icon: ShieldCheck,
    title: "Cadre structure",
    text: "Une methode lisible qui securise la progression et evite la dispersion.",
  },
  {
    icon: HeartHandshake,
    title: "Relation de confiance",
    text: "Une approche humaine et engagee pour faire emerger un potentiel durable.",
  },
  {
    icon: Lightbulb,
    title: "Vision strategique",
    text: "Anticiper, prioriser et decider avec clarte dans des environnements competitifs.",
  },
  {
    icon: Sparkles,
    title: "Culture de transmission",
    text: "Faire progresser les individus pour renforcer la performance du collectif.",
  },
];

export const TeamSection = () => {
  return (
    <section id="valeurs" className="container py-16 md:py-24">
      <div className="mb-10 text-center md:mb-12">
        <p className="section-kicker">ADN de l&apos;accompagnement</p>
        <h2 className="font-title text-3xl font-semibold md:text-5xl">
          Des valeurs fortes pour
          <br className="hidden md:block" />
          une performance sportive durable.
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm font-medium"
          >
            {value}
          </span>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {valuePillars.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-border/70 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_42px_-30px_rgba(37,185,255,0.85)]"
          >
            <div className="mb-4 inline-flex rounded-xl border border-primary/25 bg-primary/10 p-3">
              <Icon className="size-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
