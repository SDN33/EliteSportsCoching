const markers = [
  "Accompagnement logement et installation",
  "Conseil en investissement et gestion patrimoniale",
  "Service de conciergerie et chauffeur privé",
  "Médiation en cas de rupture avec un agent",
  "Soutien dans la vie personnelle et familiale",
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
          <p data-reveal className="section-kicker">Accompagnement global</p>
          <h2 data-reveal data-reveal-delay="1" className="font-title text-balance-pretty text-3xl font-semibold text-slate-50 md:text-5xl">
            Un soutien complet,
            <br className="hidden md:block" />
            sur et en dehors du terrain.
          </h2>
          <p data-reveal data-reveal-delay="2" className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Au-delà du conseil sportif, Elite Sports Conseils accompagne les
            athlètes dans tous les aspects de leur vie: logement, investissement,
            conciergerie premium, et médiation en cas de conflit avec un agent.
            Une présence totale pour que vous puissiez vous concentrer sur votre performance.
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
