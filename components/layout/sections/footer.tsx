import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";

const links = [
  { href: "#presentation", label: "Présentation" },
  { href: "#methodologie", label: "Méthodologie" },
  { href: "#domaines", label: "Interventions" },
  { href: "#valeurs", label: "Valeurs" },
  { href: "#contact", label: "Contact" },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container pb-8">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[1.9rem] border border-border/70 bg-card/82 px-6 py-4 shadow-[0_20px_55px_-38px_rgba(15,96,148,0.7)] md:px-8 md:py-4"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />

        <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <BrandLogo className="w-[200px]" />

          <nav className="flex flex-wrap gap-2 md:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/55 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-4 border-t border-border/70 pt-3 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Elite Sports Conseils. Tous droits réservés. - Site propulsé par `}
          <a href="https://stillinov.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Still-inov Agency
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
