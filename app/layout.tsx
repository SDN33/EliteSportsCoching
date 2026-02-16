import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elite Sports Coaching & Conseils | Coaching Sportif Haut Niveau",
    template: "%s | Elite Sports Coaching & Conseils",
  },
  description:
    "Coaching sportif, conseil strategique multisport et accompagnement de la performance durable pour athletes, clubs et structures de haut niveau.",
  keywords: [
    "coaching sportif",
    "conseil sportif",
    "performance sportive",
    "strategie sportive",
    "preparation mentale",
    "accompagnement athletes",
    "accompagnement clubs",
    "developpement du potentiel",
    "haut niveau",
    "coaching multisport",
  ],
  applicationName: "Elite Sports Coaching & Conseils",
  authors: [{ name: "Eddy Saint-Cyr" }],
  creator: "Eddy Saint-Cyr",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Elite Sports Coaching & Conseils",
    title: "Elite Sports Coaching & Conseils | Coaching Sportif Haut Niveau",
    description:
      "Expert en performance, strategie sportive, preparation mentale et structuration de projet sportif.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Elite Sports Coaching & Conseils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Sports Coaching & Conseils",
    description:
      "Coaching sportif haut niveau, conseil strategique et accompagnement de la performance.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
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
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
