"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sloganList = [
  "Comment atteindre le haut niveau",
  "Comment devenir joueur pro",
];

export const HeroSection = () => {
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const cardVideoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const bgVideo = bgVideoRef.current;
    const cardVideo = cardVideoRef.current;
    if (!bgVideo || !cardVideo) return;

    [bgVideo, cardVideo].forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.preload = "auto";
    });

    const syncNow = () => {
      if (bgVideo.readyState < 2 || cardVideo.readyState < 2) return;

      const drift = Math.abs(cardVideo.currentTime - bgVideo.currentTime);
      if (drift > 0.12) {
        cardVideo.currentTime = bgVideo.currentTime;
      }

      if (!bgVideo.paused && cardVideo.paused) {
        void cardVideo.play().catch(() => undefined);
      }
      if (bgVideo.paused && !cardVideo.paused) {
        cardVideo.pause();
      }
    };

    let rafId = 0;
    const loopSync = () => {
      syncNow();
      rafId = requestAnimationFrame(loopSync);
    };

    const tryPlayBoth = async () => {
      try {
        await bgVideo.play();
        cardVideo.currentTime = bgVideo.currentTime;
        await cardVideo.play();
        setVideoReady(true);
      } catch {
        setVideoReady(false);
      }
    };

    const onPlay = () => {
      cardVideo.currentTime = bgVideo.currentTime;
      void cardVideo.play().catch(() => undefined);
    };
    const onPause = () => cardVideo.pause();
    const onSeek = () => {
      cardVideo.currentTime = bgVideo.currentTime;
    };
    const onCanPlay = () => setVideoReady(true);

    bgVideo.addEventListener("play", onPlay);
    bgVideo.addEventListener("pause", onPause);
    bgVideo.addEventListener("seeking", onSeek);
    bgVideo.addEventListener("canplay", onCanPlay);

    tryPlayBoth();
    loopSync();

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void tryPlayBoth();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      bgVideo.removeEventListener("play", onPlay);
      bgVideo.removeEventListener("pause", onPause);
      bgVideo.removeEventListener("seeking", onSeek);
      bgVideo.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-24">
      <video
        ref={bgVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
        className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-30 dark:opacity-45" : "opacity-0"
        }`}
        poster="/hero-image-dark.jpeg"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_12%,rgba(232,200,122,0.16),transparent_38%),linear-gradient(170deg,rgba(255,255,255,0.8),rgba(235,246,255,0.9))] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_18%_18%,rgba(46,196,255,0.24),transparent_45%),radial-gradient(circle_at_80%_12%,rgba(232,200,122,0.18),transparent_36%),linear-gradient(170deg,rgba(5,10,17,0.62),rgba(5,8,14,0.82))] dark:block" />

      <div className="container grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div
          data-reveal="left"
          className="relative space-y-6 rounded-[1.9rem] border border-slate-200/80 bg-white/78 p-5 shadow-[0_25px_60px_-40px_rgba(43,143,194,0.7)] backdrop-blur-md dark:border-border/60 dark:bg-card/45 dark:shadow-[0_25px_60px_-40px_rgba(24,110,162,0.55)] sm:p-6 md:space-y-8 md:p-8"
        >
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
          <Badge
            variant="outline"
            className="border-primary/55 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-700 dark:bg-background/35 dark:text-slate-100"
          >
            Conseiller sportif multisport
          </Badge>

          <div className="space-y-5">
            <h1 className="font-title text-balance-pretty text-3xl font-semibold leading-[1.06] text-slate-900 dark:text-foreground sm:text-4xl md:text-6xl">
              Coaching sportif premium
              <br className="hidden md:block" />
              & conseil de performance durable
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-muted-foreground sm:text-lg md:text-xl">
              Elite Sports Coaching & Conseils accompagne athletes, clubs et
              structures dans la performance sportive, la strategie de jeu et
              le developpement du potentiel a long terme.
            </p>
          </div>

          <ul className="grid gap-2.5 text-[11px] sm:grid-cols-2 sm:gap-3 sm:text-xs">
            {sloganList.map((slogan, index) => (
              <li
                key={slogan}
                data-reveal
                data-reveal-delay={(index + 1).toString()}
                className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background/65 px-3 py-2 text-xs uppercase tracking-[0.13em] text-slate-800 dark:bg-background/35 dark:text-foreground/90"
              >
                <span className="h-px w-8 bg-gradient-to-r from-primary to-[#e8c87a] transition-all duration-300 group-hover:w-12" />
                {slogan}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3">
            <Button
              asChild
              className="w-full justify-center rounded-full px-5 text-xs font-semibold shadow-lg shadow-primary/25 sm:w-auto sm:px-7 sm:text-sm"
            >
              <Link href="#presentation">
                Decouvrir notre methode de performance
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-full justify-center rounded-full border border-border/60 bg-white/80 px-5 text-xs shadow-sm dark:bg-background/45 sm:w-auto sm:px-7 sm:text-sm"
            >
              <Link href="#contact">
                <PlayCircle className="mr-2 size-4" />
                Demarrer un accompagnement strategique
              </Link>
            </Button>
          </div>
        </div>

        <div data-reveal="right" data-reveal-delay="1" className="relative">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
          <article className="overflow-hidden rounded-[1.9rem] border border-border/70 bg-slate-950/65 shadow-[0_30px_65px_-42px_rgba(6,27,44,0.95)] backdrop-blur-sm">
            <video
              ref={cardVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/hero-image-dark.jpeg"
              className="h-[240px] w-full bg-black object-contain sm:h-[320px] lg:h-[430px]"
              aria-label="Video synchronisee avec le fond hero"
            >
              <source src="/videohero.mp4" type="video/mp4" />
            </video>
          </article>
        </div>
      </div>
    </section>
  );
};
