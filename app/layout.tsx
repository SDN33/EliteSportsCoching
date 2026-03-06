import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sport Synergie Consulting | Conseiller Sportif Multisport",
    template: "%s | Sport Synergie Consulting",
  },
  description:
    "Conseiller sportif multisport, gestion de carrière des joueurs et accompagnement global: sur et en dehors du terrain, logement, investissement, conciergerie et médiation.",
  keywords: [
    "conseiller sportif",
    "conseil sportif",
    "gestion de carrière sportive",
    "accompagnement athlètes",
    "conciergerie sportive",
    "aide logement sportif",
    "investissement sportif",
    "médiation agent sportif",
    "haut niveau",
    "conseiller sportif multisport",
  ],
  applicationName: "Sport Synergie Consulting",
  authors: [{ name: "Eddy Saint-Cyr" }],
  creator: "Eddy Saint-Cyr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sport Synergie Consulting",
    title: "Sport Synergie Consulting | Conseiller Sportif Multisport",
    description:
      "Conseiller sportif multisport, gestion de carrière et accompagnement global pour athlètes: sur et en dehors du terrain.",
    images: [
      {
        url: "/logo.png",
        width: 2000,
        height: 2000,
        alt: "Logo Sport Synergie Consulting",
      },
      {
        url: "/dsc01673.jpg",
        width: 1280,
        height: 853,
        alt: "Sport Synergie Consulting - conseiller sportif et accompagnement de carrière",
      },
      {
        url: "/Depassement-de-soi.webp",
        width: 1200,
        height: 630,
        alt: "Dépassement de soi - Sport Synergie Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sport Synergie Consulting",
    description:
      "Conseiller sportif multisport, gestion de carrière et accompagnement global sur et en dehors du terrain.",
    images: ["/logo.png", "/dsc01673.jpg", "/Depassement-de-soi.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ScrollReveal />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
