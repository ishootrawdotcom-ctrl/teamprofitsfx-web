"use client";

import { useState } from "react";
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Mentor", href: "#mentor" },
    { label: "Reviews (4.9★)", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#05060b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Team Profits FX Logo"
              className="h-9 w-auto object-contain rounded-md transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-white">
                TEAM PROFITS <span className="text-cyan-400">FX</span>
              </span>
              <span className="text-[10px] font-mono text-violet-400 tracking-widest uppercase">
                ICT • SMC TERMINAL
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-300 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-cyan-500/20 transition-all"
            >
              <Terminal className="w-3.5 h-3.5" />
              AI Journal
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#pricing"
              className="btn-cyber px-4 py-2 rounded-xl text-xs font-bold text-white tracking-wide"
            >
              Join Mentorship
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 active:scale-95 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#070912]/95 backdrop-blur-2xl px-4 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-200 font-medium active:bg-violet-500/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Open AI Trade Journal
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 rounded-2xl border border-white/15 bg-[#0a0d18]/90 backdrop-blur-xl p-2 flex items-center gap-2 shadow-2xl shadow-black">
        <a
          href={SITE_CONFIG.journalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-cyan-300 flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <Terminal className="w-3.5 h-3.5" />
          AI Journal
        </a>
        <a
          href="#pricing"
          className="flex-[1.5] py-2.5 px-3 rounded-xl btn-cyber text-xs font-bold text-white flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Get Lifetime ($399)
        </a>
      </div>
    </>
  );
}
