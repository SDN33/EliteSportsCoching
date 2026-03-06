const markers = [
  "Accompagnement logement et installation",
  "Conseil en investissement et gestion patrimoniale",
  "Service de conciergerie et chauffeur privé",
  "Médiation en cas de rupture avec un agent",
  "Soutien dans la vie personnelle et familiale",
];

export const CommunitySection = () => {
  return (
    <section id="univers" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end backdrop-blur-xl p-8 md:p-16 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(29, 78, 216, 0.1) 100%)`
          }}
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/10 to-amber-500/10 blur-3xl" />

          <div className="relative space-y-12">
            {/* Header */}
            <div className="space-y-6 max-w-4xl">
              <p data-reveal className="text-xs uppercase tracking-widest font-bold text-blue-300">
                💙 Votre Univers de Performance
              </p>
              <h2
                data-reveal
                data-reveal-delay="1"
                className="font-title text-4xl md:text-5xl font-bold leading-tight text-white"
              >
                Un Soutien Complet,
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-300 to-amber-200 bg-clip-text text-transparent">
                  Sur et Hors du Terrain
                </span>
              </h2>
              <p
                data-reveal
                data-reveal-delay="2"
                className="text-lg leading-relaxed text-white/80 max-w-3xl"
              >
                Au-delà du conseil sportif, Sport Synergie Consulting accompagne les athlètes dans tous les aspects de leur vie: logement, investissement, conciergerie premium, et médiation. Une présence totale pour performer.
              </p>
            </div>

            {/* Markers Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {markers.map((item, index) => (
                <div
                  key={item}
                  data-reveal
                  data-reveal-delay={((index % 4) + 1).toString()}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-blue-400/50 hover:bg-white/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:to-amber-500/10 transition-all duration-500 -z-10" />

                  <p className="text-sm font-medium leading-relaxed text-white/90 group-hover:text-white transition-colors flex items-start gap-3">
                    <span className="text-blue-400 font-bold text-lg mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
