import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";

const links = [
  { href: "#presentation", label: "Presentation" },
  { href: "#methodologie", label: "Methodologie" },
  { href: "#domaines", label: "Interventions" },
  { href: "#valeurs", label: "Valeurs" },
  { href: "#contact", label: "Contact" },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container pb-12">
      <div className="relative overflow-hidden rounded-[1.9rem] border border-border/70 bg-card/82 px-6 py-8 shadow-[0_20px_55px_-38px_rgba(15,96,148,0.7)] md:px-10 md:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandLogo className="w-[220px]" />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Coaching sportif, conseil strategique et accompagnement de la
              performance pour athletes, clubs et structures engagees vers le
              haut niveau.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2.5 md:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/55 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-8 border-t border-border/70 pt-5 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Elite Sports Coaching & Conseils. Tous droits reserves.`}
        </div>
      </div>
    </footer>
  );
};
