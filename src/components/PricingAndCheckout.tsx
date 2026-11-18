"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  Tag,
  X,
  Wallet,
  CreditCard,
  Copy,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import { PLANS, SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function PricingAndCheckout() {
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<(typeof PLANS)[0] | null>(null);
  const [payTab, setPayTab] = useState<"crypto" | "card">("crypto");
  const [copied, setCopied] = useState(false);

  const handleApplyCoupon = () => {
    if (couponInput.trim().toLowerCase() === SITE_CONFIG.promoCode.code.toLowerCase()) {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("Invalid code. Try '50%foreva'!");
    }
  };

  const getFinalPrice = (plan: (typeof PLANS)[0]) => {
    if (plan.promoEligible && couponApplied) {
      return (plan.price * (1 - SITE_CONFIG.promoCode.discountPercent / 100)).toFixed(2);
    }
    return plan.price.toString();
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-violet-600/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
              Transparent Pricing • Zero Hidden Fees
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Invest once, or start monthly
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Have promo code <code className="text-cyan-300 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">50%foreva</code>? Apply it below for instant 50% off Lifetime Mentorship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="max-w-md mx-auto mb-12">
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0b0e1c] border border-white/15 focus-within:border-cyan-400/60 transition">
              <Tag className="w-4 h-4 text-violet-400 ml-3 shrink-0" />
              <input
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                placeholder="Enter promo code (e.g. 50%foreva)"
                className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none w-full py-2 font-mono"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition active:scale-95 shrink-0"
              >
                Apply
              </button>
            </div>
            {couponApplied && (
              <p className="text-emerald-400 text-xs font-mono text-center mt-2">
                ✓ Code &ldquo;{SITE_CONFIG.promoCode.code}&rdquo; activated! 50% OFF Lifetime Mentorship applied.
              </p>
            )}
            {couponError && (
              <p className="text-rose-400 text-xs font-mono text-center mt-2">{couponError}</p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {PLANS.map((plan, idx) => {
            const isLifetime = plan.id === "lifetime";
            const finalPrice = getFinalPrice(plan);

            return (
              <Reveal key={plan.id} delay={idx * 100}>
                <div
                  className={`rounded-3xl p-7 h-full flex flex-col justify-between relative ${
                    isLifetime
                      ? "border-2 border-violet-500/60 bg-gradient-to-b from-[#11152c] to-[#070913] shadow-[0_0_50px_-12px_rgba(139,92,246,0.35)]"
                      : "carbon-card"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] font-mono px-3 py-1 rounded-full tracking-wider font-semibold ${
                          isLifetime
                            ? "bg-violet-500/20 text-violet-200 border border-violet-400/40"
                            : "bg-white/5 text-slate-300 border border-white/10"
                        }`}
                      >
                        {plan.badge}
                      </span>
                      {isLifetime && (
                        <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2.5 py-0.5 rounded-full">
                          USE &ldquo;50%foreva&rdquo;
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{plan.subtitle}</p>

                    <div className="my-6 flex items-baseline gap-3">
                      {isLifetime && couponApplied && (
                        <span className="text-2xl font-display text-slate-500 line-through">
                          ${plan.price}
                        </span>
                      )}
                      <span className="text-5xl font-display font-bold text-white">
                        ${finalPrice}
                      </span>
                      <span className="text-sm font-mono text-cyan-400 uppercase">
                        USD {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 ${
                      isLifetime
                        ? "btn-cyber text-white"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    Select {plan.name} — ${finalPrice}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl border border-white/15 bg-[#0a0d19] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase">Instant Checkout</p>
                <h4 className="font-display text-xl font-bold text-white">
                  {selectedPlan.name} — ${getFinalPrice(selectedPlan)} USD
                </h4>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-black/40 border border-white/10 my-5">
              <button
                onClick={() => setPayTab("crypto")}
                className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                  payTab === "crypto"
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Wallet className="w-4 h-4" />
                Crypto / Binance (0% Fee)
              </button>
              <button
                onClick={() => setPayTab("card")}
                className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                  payTab === "card"
                    ? "bg-white/15 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Card / PayPal
              </button>
            </div>

            {payTab === "crypto" ? (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 leading-relaxed">
                  <strong>Binance Pay / USDT:</strong> Send exactly{" "}
                  <strong className="text-white">${getFinalPrice(selectedPlan)} USDT</strong> with{" "}
                  <strong>$0 monthly fees</strong>. Next step: we will automate instant verification via NOWPayments / Binance API.
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">BINANCE PAY ID</p>
                    <div className="flex items-center justify-between mt-1">
                      <code className="font-mono text-sm text-cyan-300">
                        {SITE_CONFIG.checkout.binancePayId}
                      </code>
                      <button
                        onClick={() => handleCopy(SITE_CONFIG.checkout.binancePayId)}
                        className="px-2.5 py-1 rounded-lg bg-white/10 text-xs text-white flex items-center gap-1"
                      >
                        {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber w-full py-3.5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2"
                >
                  Confirm Payment on Telegram <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Prefer paying with a Debit/Credit Card or PayPal? Select your method below:
                </p>
                <a
                  href={
                    selectedPlan.id === "lifetime"
                      ? SITE_CONFIG.checkout.stripeLifetimeUrl
                      : SITE_CONFIG.checkout.stripeMonthlyUrl
                  }
                  className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  Pay with Credit / Debit Card (Stripe)
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.checkout.paypalUrl}
                  className="w-full py-3.5 rounded-2xl bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  Pay with PayPal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
