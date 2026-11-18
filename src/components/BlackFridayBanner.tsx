"use client";

import { useEffect, useState } from "react";
import { Flame, Timer, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function BlackFridayBanner() {
  const [status, setStatus] = useState<"upcoming" | "active" | "ended">("upcoming");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startTime = new Date(SITE_CONFIG.blackFriday.startNY).getTime();
    const endTime = new Date(SITE_CONFIG.blackFriday.endNY).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();

      if (now < startTime) {
        setStatus("upcoming");
        const diff = Math.max(0, startTime - now);
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else if (now >= startTime && now <= endTime) {
        setStatus("active");
        const diff = Math.max(0, endTime - now);
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setStatus("ended");
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (status === "ended") return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-red-950 via-black to-red-950 border-b border-red-500/40 text-white shadow-[0_4px_30px_rgba(239,68,68,0.35)]">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        {/* Titular Oferta */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-red-600/30 border border-red-500/50 text-red-400 shrink-0">
            <Flame className="w-4 h-4 animate-bounce" />
          </span>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-red-600 text-white">
                BLACK FRIDAY EXCLUSIVE
              </span>
              <span className="text-xs font-bold text-amber-300">
                80% OFF LIFETIME MENTORSHIP
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5 hidden sm:block">
              {status === "upcoming"
                ? "Drops tonight at 12:00 AM NY Time — Get Lifetime for only $79.80 USD!"
                : "Limited time offer ending Nov 27 at midnight (NY Time) — Just $79.80 USD!"}
            </p>
          </div>
        </div>

        {/* Contador + Botón */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <Timer className="w-4 h-4 text-red-400 shrink-0" />
            <div className="flex gap-1 text-[11px] font-bold">
              <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40">
                {String(timeLeft.days).padStart(2, "0")}d
              </span>
              :
              <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40">
                {String(timeLeft.hours).padStart(2, "0")}h
              </span>
              :
              <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40">
                {String(timeLeft.minutes).padStart(2, "0")}m
              </span>
              :
              <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400">
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
          </div>

          <a
            href="#pricing"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-1 hover:brightness-110 active:scale-95 transition shrink-0 shadow-lg shadow-red-600/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Claim $79.80 Deal
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
