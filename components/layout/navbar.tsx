"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";
import { BrandLogo } from "./brand-logo";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#identite", label: "Positionnement" },
  { href: "#presentation", label: "Parcours" },
  { href: "#methodologie", label: "Méthodologie" },
  { href: "#domaines", label: "Interventions" },
  { href: "#valeurs", label: "Valeurs" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto mt-2 flex w-[calc(100dvw-1rem)] max-w-[calc(100dvw-1rem)] items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-2.5 py-2 shadow-[0_12px_40px_-22px_rgba(8,22,46,0.55)] backdrop-blur-xl sm:w-[95%] sm:max-w-screen-2xl sm:px-5 lg:px-6">
      <Link href="#" className="inline-flex items-center">
        <BrandLogo
          crop
          className="h-11 w-[126px] min-[360px]:w-[142px] sm:h-14 sm:w-[220px]"
          priority
        />
      </Link>

      <nav className="hidden items-center rounded-full border border-border/70 bg-background/65 p-1.5 lg:flex">
        {routeList.map(({ href, label }) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className="rounded-full px-4 text-sm font-medium text-muted-foreground hover:bg-primary/12 hover:text-foreground"
          >
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        <ToggleTheme className="border border-border/60 bg-background/65" />
        <Button asChild size="sm" className="rounded-full px-6 font-semibold">
          <Link href="#contact">Conseil Sportif Premium</Link>
        </Button>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <ToggleTheme className="border border-border/60 bg-background/65" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-border/70 bg-background/95">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <BrandLogo crop className="h-12 w-[210px]" />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 grid gap-2">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  asChild
                  variant="ghost"
                  className="justify-start rounded-xl py-5 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
              <Button asChild className="mt-3 rounded-xl py-6" onClick={() => setIsOpen(false)}>
                <Link href="#contact">Démarrer mon accompagnement</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
