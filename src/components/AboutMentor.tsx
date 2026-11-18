import { CheckCircle2, Youtube, Send, Instagram, Music2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function AboutMentor() {
  const highlights = [
    "5+ years live experience in ICT & Smart Money Concepts",
    "580+ free educational trading videos & 18.9K+ YouTube subscribers",
    "No monthly subscription traps — lifetime mentorship built for real growth",
  ];

  const socialPills = [
    {
      label: "YouTube",
      href: SITE_CONFIG.socials.youtube,
      icon: Youtube,
      color: "hover:border-red-500/40 hover:text-red-400 bg-red-500/10 text-red-300",
    },
    {
      label: "Telegram",
      href: SITE_CONFIG.socials.telegramChannel,
      icon: Send,
      color: "hover:border-cyan-500/40 hover:text-cyan-400 bg-cyan-500/10 text-cyan-300",
    },
    {
      label: "Instagram",
      href: SITE_CONFIG.socials.instagram,
      icon: Instagram,
      color: "hover:border-pink-500/40 hover:text-pink-400 bg-pink-500/10 text-pink-300",
    },
    {
      label: "TikTok",
      href: SITE_CONFIG.socials.tiktok,
      icon: Music2,
      color: "hover:border-teal-500/40 hover:text-teal-400 bg-teal-500/10 text-teal-300",
    },
    {
      label: "X (Twitter)",
      href: SITE_CONFIG.socials.x,
      // Icono X estilizado
      customIcon: (
        <span className="font-mono font-bold text-xs">𝕏</span>
      ),
      color: "hover:border-white/40 hover:text-white bg-white/5 text-slate-300",
    },
  ];

  return (
    <section id="mentor" className="py-16 md:py-24 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="carbon-card rounded-3xl p-3 max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#0b1224]">
                <img
                  src="/images/eduardo-suit.jpg"
                  alt="Eduardo Rincon - Team Profits FX Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
              Meet Your Mentor
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              “I provide the roadmap and personal support. I only ask for your discipline.”
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              My name is <strong className="text-white">Eduardo Rincon</strong>. The trading industry is flooded with expensive recurring monthly fees and mentors who never show a live chart. I changed the game: complete ICT & SMC education, 3x weekly live NY trading, AI trade journaling, and unlimited 1-on-1 calls until you succeed.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm sm:text-base">{text}</span>
                </div>
              ))}
            </div>

            {/* Social Media Showcase */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Official Channels &amp; Community
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialPills.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold transition active:scale-95 ${s.color}`}
                    >
                      {Icon ? <Icon className="w-4 h-4" /> : s.customIcon}
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
