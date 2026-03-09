import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import InstagramIcon from "@/components/icons/instagram-icon";
import FacebookIcon from "@/components/icons/facebook-icon";

const links = [
  { href: "#presentation", label: "Présentation" },
  { href: "#methodologie", label: "Méthodologie" },
  { href: "#domaines", label: "Interventions" },
  { href: "#valeurs", label: "Valeurs" },
  { href: "#contact", label: "Contact" },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="relative overflow-hidden py-10 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 shadow-2xl"
        >
          {/* Decorative element */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative space-y-8">
            {/* Top Section - Logo and Navigation */}
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-4">
                <BrandLogo className="w-[200px]" />
                <p className="text-sm text-white/60 max-w-xs">
                  Gestion de carrière, conseil sportif, logement & investissement. Votre succès, notre mission.
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 px-4 py-2 text-xs font-medium text-white/70 hover:text-white transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

            {/* Bottom Section - Social & Credits */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-white/70">Connectez-vous&nbsp;:</span>
                <div className="flex gap-2">
                  <button
                    disabled
                    title="Instagram – lien bientôt disponible"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 opacity-60 hover:opacity-100 transition-all cursor-default"
                  >
                    <InstagramIcon width="16px" height="16px" />
                  </button>
                  <button
                    disabled
                    title="Facebook – lien bientôt disponible"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 opacity-60 hover:opacity-100 transition-all cursor-default"
                  >
                    <FacebookIcon width="16px" height="16px" />
                  </button>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-xs text-white/50">
                {`© ${new Date().getFullYear()} Sport Synergie Consulting. Tous droits réservés.`}
              </p>
            </div>

            {/* Credits */}
            <div className="text-xs text-white/40 border-t border-white/10 pt-4">
              Site propulsé par{" "}
              <a
                href="https://stillinov.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/80 transition-colors"
              >
                Still-inov Agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
