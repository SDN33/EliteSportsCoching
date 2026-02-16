const markers = [
  "Lecture du jeu et intelligence collective",
  "Culture de centre de formation et progression individuelle",
  "Décision sous pression et adaptation tactique",
  "Leadership terrain et cohésion de groupe",
  "Vision à long terme de la performance",
];

export const CommunitySection = () => {
  return (
    <section id="univers" className="container py-16 md:py-24">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(132deg,rgba(9,17,30,0.97),rgba(14,26,45,0.82))] p-7 shadow-[0_24px_65px_-45px_rgba(56,189,248,0.9)] md:p-10"
      >
        <div className="pointer-events-none absolute -left-14 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative">
          <p className="section-kicker">Culture de performance</p>
          <h2 className="font-title text-balance-pretty text-3xl font-semibold text-slate-50 md:text-5xl">
            L&apos;ADN du football moderne
            <br className="hidden md:block" />
            au service d&apos;une vision multisport.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Sans enfermer l&apos;accompagnement dans une seule discipline, Elite
            Sports Coaching & Conseils mobilise les codes du football de haut
            niveau: intelligence collective, vision tactique, lecture du jeu et
            maîtrise des moments décisifs.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {markers.map((item, index) => (
              <div
                key={item}
                data-reveal
                data-reveal-delay={((index % 4) + 1).toString()}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/45 px-4 py-4 text-sm leading-relaxed text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
