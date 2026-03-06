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
    <header className="sticky top-3 z-50 mx-auto mt-2 flex w-[calc(100dvw-1rem)] max-w-[calc(100dvw-1rem)] items-center justify-between rounded-full border border-white/15 bg-black/40 backdrop-blur-2xl px-2 py-2.5 shadow-2xl sm:w-[95%] sm:max-w-screen-2xl sm:px-6 lg:px-8">
      <Link href="#" className="inline-flex items-center hover:opacity-80 transition-opacity">
        <BrandLogo
          crop
          className="h-10 w-[120px] sm:h-12 sm:w-[200px]"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-1 lg:flex">
        {routeList.map(({ href, label }) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className="rounded-full px-5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </nav>

      {/* Desktop CTA & Theme */}
      <div className="hidden items-center gap-3 lg:flex">
        <ToggleTheme className="border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all" />
        <Button
          asChild
          size="sm"
          className="rounded-full px-7 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="#contact">Consulter</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-2 lg:hidden">
        <ToggleTheme className="border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full text-white hover:bg-white/20"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-white/10 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-white">
                <BrandLogo crop className="h-10 w-[180px]" />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 grid gap-3">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  asChild
                  variant="ghost"
                  className="justify-start rounded-xl py-6 text-base text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
              <Button
                asChild
                className="mt-6 rounded-xl py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:from-blue-600 hover:to-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <Link href="#contact">Consulter maintenant</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
