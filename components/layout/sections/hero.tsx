"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center pt-20">
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
          className="space-y-8 text-center max-w-3xl"
        >
          {/* Premium Badge */}
          <Badge
            variant="outline"
            className="mx-auto inline-block border-amber-500/40 bg-white/10 backdrop-blur-lg px-5 py-2 text-xs uppercase tracking-widest text-white/90 hover:bg-white/15 transition-all duration-300"
          >
            ✨ Conseil Sportif Premium
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1
              data-reveal="true"
              data-reveal-delay="1"
              className="font-title text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
            >
              Sport Synergie
              <span className="block bg-gradient-to-r from-blue-400 via-amber-300 to-blue-400 bg-clip-text text-transparent">
                Consulting
              </span>
            </h1>

            <p
              data-reveal="true"
              data-reveal-delay="2"
              className="text-lg md:text-2xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Accompagnement global des athlètes:
              <br className="hidden sm:block" />
              <span className="text-amber-300 font-medium">gestion de carrière, conseil, logement & investissement</span>
            </p>
          </div>

          {/* Features Pills */}
          <div
            data-reveal="true"
            data-reveal-delay="3"
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            {["Multisport", "Confidentiel", "Premium", "Expert"].map((item, i) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
              >
                <span className="text-sm text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            data-reveal="true"
            data-reveal-delay="4"
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <Link href="#presentation" className="flex items-center gap-2">
                Découvrir notre approche
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white/30 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 hover:border-white/50 font-bold transition-all duration-300"
            >
              <Link href="#contact">
                Démarrer un accompagnement
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          data-reveal="true"
          data-reveal-delay="5"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
