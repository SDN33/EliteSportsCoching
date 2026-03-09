"use client";

import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";

    const tryPlay = async () => {
      try {
        await video.play();
        setVideoReady(true);
      } catch {
        setVideoReady(false);
      }
    };

    const onCanPlay = () => {
      setVideoReady(true);
      void tryPlay();
    };

    video.addEventListener("canplay", onCanPlay);
    void tryPlay();

    return () => {
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <section id="hero" className="relative h-[100svh] min-h-[560px] overflow-hidden flex items-center justify-center">
      {/* Video Background - Now the HERO element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        poster="/hero-image-dark.jpeg"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute inset-0 -z-10 bg-radial-gradient opacity-40 dark:opacity-60" />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal="true"
          className="space-y-5 sm:space-y-8 text-center max-w-3xl"
        >
          {/* Premium Badge */}
          <Badge
            variant="outline"
            className="mx-auto inline-flex items-center gap-2 border-white/20 bg-white/10 backdrop-blur-lg px-3 sm:px-5 py-2 text-xs uppercase tracking-wider sm:tracking-widest text-white/90 hover:bg-white/15 transition-all duration-300"
          >
            Conseiller Sportif Multi-Sports
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1
              data-reveal="true"
              data-reveal-delay="1"
              className="font-title text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
            >
              Transformer votre carrière
              <br />
              <span className="text-white">
                en stratégie gagnante
              </span>
            </h1>

            <p
              data-reveal="true"
              data-reveal-delay="2"
              className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Gestion de carrière, conseil sportif, logement, investissement & conciergerie.{" "}
              <span className="text-white/90 font-semibold">
                L&apos;accompagnement 360° qui accélère votre succès.
              </span>
            </p>
          </div>

          {/* Features Pills */}
          <div
            data-reveal="true"
            data-reveal-delay="3"
            className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2 sm:pt-4"
          >
            {["Multisport", "Confidentiel", "Premium", "Expert"].map((item) => (
              <div
                key={item}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
              >
                <span className="text-xs sm:text-sm text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Pills Style */}
          <div
            data-reveal="true"
            data-reveal-delay="4"
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-4 sm:pt-10 pb-4 sm:pb-8"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 sm:px-8 h-auto py-3 sm:py-3.5 bg-white hover:bg-white/90 text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2 text-sm sm:text-base">
                Commencer mon accompagnement
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 sm:px-8 h-auto py-3 sm:py-3.5 border-2 border-white/40 bg-transparent hover:bg-white/10 text-white font-bold transition-all duration-300"
            >
              <Link href="#presentation" className="text-sm sm:text-base">
                Voir notre approche
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
