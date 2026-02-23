import Image from "next/image";

export const SponsorsSection = () => {
  return (
    <section id="identite" className="container py-16 md:py-24">
      <div data-reveal className="section-shell relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_86%_0%,rgba(232,200,122,0.16),transparent_30%)]" />

        <div className="relative mb-8 text-center md:mb-10">
          <p data-reveal className="section-kicker">Positionnement</p>
          <h2 data-reveal data-reveal-delay="1" className="font-title text-balance-pretty text-3xl font-semibold md:text-5xl">
            Conseiller Sportif Multisport
            <br className="hidden md:block" />
            & Accompagnement Global de Carrière
          </h2>
          <p data-reveal data-reveal-delay="2" className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Elite Sports Conseils se positionne sur l&apos;accompagnement global
            des athlètes: conseil sportif pur, gestion de carrière et soutien
            dans la vie personnelle et professionnelle.
          </p>
        </div>

        <article
          data-reveal
          data-reveal-delay="1"
          className="relative mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card/82 p-4 shadow-[0_20px_50px_-30px_rgba(25,100,150,0.6)] sm:p-6"
        >
          <div className="flex min-h-[230px] items-center justify-center rounded-2xl border border-border/40 bg-gradient-to-b from-white to-slate-100 p-6 dark:from-slate-950 dark:to-black sm:min-h-[310px] md:min-h-[360px]">
              <Image
                src="/dsc01673.jpg"
                alt="Elite Sports Conseils"
                width={780}
                height={280}
                priority
                className="w-full max-w-[780px] object-cover"
              />
          </div>
        </article>
      </div>
    </section>
  );
};
