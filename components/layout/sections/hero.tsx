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
            className="mx-auto inline-block border-orange-500/40 bg-white/10 backdrop-blur-lg px-5 py-2 text-xs uppercase tracking-widest text-white/90 hover:bg-white/15 transition-all duration-300"
          >
            🏆 Accompagnement Premium
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1
              data-reveal="true"
              data-reveal-delay="1"
              className="font-title text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
            >
              Transformer votre carrière
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                en stratégie gagnante
              </span>
            </h1>

            <p
              data-reveal="true"
              data-reveal-delay="2"
              className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Gestion de carrière, conseil sportif, logement, investissement & conciergerie.
              <br className="hidden sm:block" />
              <span className="text-orange-400 font-semibold">L'accompagnement 360° qui accélère votre succès.</span>
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

          {/* CTA Buttons - Pills Style */}
          <div
            data-reveal="true"
            data-reveal-delay="4"
            className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-auto py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="#contact" className="flex items-center gap-2 text-base">
                Commencer mon accompagnement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-auto py-3.5 border-2 border-white/40 bg-transparent hover:bg-white/10 text-white font-bold transition-all duration-300"
            >
              <Link href="#presentation" className="text-base">
                Voir notre approche
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
