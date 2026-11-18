"use client";

import { useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import { FAQS, SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function FaqAndFooter() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <section id="faq" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
                Questions & Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.q} className="carbon-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-display font-semibold text-white text-sm sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#030408] pt-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Team Profits FX" className="h-8 w-auto rounded" />
            <div>
              <p className="font-display font-bold text-white text-sm">TEAM PROFITS FX</p>
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Eduardo Rincon. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a
              href={SITE_CONFIG.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 hover:text-cyan-300"
            >
              <Terminal className="w-3.5 h-3.5" /> AI Journal
            </a>
          </div>
        </div>
        <p className="max-w-4xl mx-auto px-4 text-center text-[11px] text-slate-600 mt-8 leading-relaxed">
          Risk Disclaimer: Trading forex, indices, and futures carries a high level of risk and may not be suitable for all investors. Past live performance does not guarantee future results. Team Profits FX provides educational mentorship only.
        </p>
      </footer>
    </>
  );
}
