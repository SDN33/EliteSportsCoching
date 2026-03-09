import { Star, Check } from "lucide-react";

const markers = [
  "Accompagnement logement et installation",
  "Conseil en investissement et gestion patrimoniale",
  "Service de conciergerie premium",
  "Médiation en cas de rupture avec un agent",
  "Soutien dans la vie personnelle et familiale",
  "Préparation de gestion de vie privé",
];

export const CommunitySection = () => {
  return (
    <section id="univers" className="relative py-14 sm:py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end backdrop-blur-xl p-5 sm:p-8 md:p-16 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.04) 100%)`
          }}
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative space-y-12">
            {/* Header */}
            <div className="space-y-6 max-w-4xl">
              <p data-reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60">
                <Star className="size-4 flex-shrink-0" />
                <span>Votre Écosystème de Réussite</span>
              </p>
              <h2
                data-reveal
                data-reveal-delay="1"
                className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance-pretty"
              >
                Vivre Votre Meilleure Carrière.
                <br />
                <span className="text-primary">
                  Sans Stress Administratif.
                </span>
              </h2>
              <p
                data-reveal
                data-reveal-delay="2"
                className="text-base sm:text-lg leading-relaxed text-white/80 max-w-3xl"
              >
                Gestion de carrière, logement, investissement, conciergerie, médiation. Nous gérons la complexité, vous vous concentrez sur vos performances.
              </p>
            </div>

            {/* Markers Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {markers.map((item, index) => (
                <div
                  key={item}
                  data-reveal
                  data-reveal-delay={((index % 4) + 1).toString()}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 sm:p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 -z-10" />

                  <p className="text-sm font-medium leading-relaxed text-white/90 group-hover:text-white transition-colors flex items-start gap-3">
                    <Check className="size-5 text-white/60 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
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
