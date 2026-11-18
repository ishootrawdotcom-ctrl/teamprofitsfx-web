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
  Send,
} from "lucide-react";
import { PLANS, SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

export function PricingAndCheckout() {
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<(typeof PLANS)[0] | null>(null);
  const [payTab, setPayTab] = useState<"binance" | "card">("binance");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [studentEmail, setStudentEmail] = useState("");
  const [studentTelegram, setStudentTelegram] = useState("");
  const [txId, setTxId] = useState("");

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

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleConfirmTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    const method = payTab === "binance" ? "Binance Pay (UID)" : "Card-to-USDT (BEP20)";
    const msg = encodeURIComponent(
      `🔥 NEW ENROLLMENT - TEAM PROFITS FX\n` +
        `Plan: ${selectedPlan.name}\n` +
        `Amount: $${getFinalPrice(selectedPlan)} USDT\n` +
        `Method: ${method}\n` +
        `Email: ${studentEmail}\n` +
        `Telegram: ${studentTelegram}\n` +
        `Order/TxID: ${txId}`
    );
    window.open(`https://t.me/${SITE_CONFIG.checkout.telegramUsername}?text=${msg}`, "_blank");
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
              Have promo code{" "}
              <code className="text-cyan-300 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">
                50%foreva
              </code>
              ? Apply it below for instant 50% off Lifetime Mentorship.
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
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
          <div className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl border border-white/15 bg-[#0a0d19] p-5 sm:p-6 shadow-2xl max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase">Instant Checkout</p>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  {selectedPlan.name} — ${getFinalPrice(selectedPlan)} USDT
                </h4>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-black/40 border border-white/10 my-4">
              <button
                type="button"
                onClick={() => setPayTab("binance")}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                  payTab === "binance"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Wallet className="w-4 h-4" />
                Binance Pay (0% Fee)
              </button>
              <button
                type="button"
                onClick={() => setPayTab("card")}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                  payTab === "card"
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Card / Apple Pay
              </button>
            </div>

            {payTab === "binance" ? (
              <div className="space-y-3 mb-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 leading-relaxed">
                  Open <strong>Binance App → Pay → Send → Binance ID</strong> and send exactly{" "}
                  <strong className="text-white">${getFinalPrice(selectedPlan)} USDT</strong> (0% fee) to{" "}
                  <strong className="text-white">TeamProfitsFX</strong>.
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-slate-400">
                      BINANCE ID (BINANCE APP → PAY → SEND → BINANCE ID)
                    </p>
                    <code className="font-mono text-sm text-amber-300 break-all">
                      {SITE_CONFIG.checkout.binancePayId}
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("payid", SITE_CONFIG.checkout.binancePayId)}
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-xs text-white flex items-center gap-1 shrink-0"
                  >
                    {copiedKey === "payid" ? (
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedKey === "payid" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 mb-4">
                <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-400/30 text-xs text-slate-200 space-y-1.5">
                  <p className="font-bold text-cyan-300">Pay with Visa, Mastercard or Apple Pay in 3 steps:</p>
                  <p>1. Copy our <strong>USDT (BEP20)</strong> address below.</p>
                  <p>2. Open <strong>Paybis</strong> or <strong>MoonPay</strong>, select <strong>USDT (BEP20)</strong> for <strong>${getFinalPrice(selectedPlan)}</strong>, and paste our address as destination.</p>
                  <p>3. Submit your email &amp; confirmation below to unlock access.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-cyan-400">
                      USDT ADDRESS (BNB SMART CHAIN • BEP20)
                    </p>
                    <code className="font-mono text-xs text-white break-all">
                      {SITE_CONFIG.checkout.usdtBep20Address}
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("bep20", SITE_CONFIG.checkout.usdtBep20Address)}
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-xs text-cyan-200 flex items-center gap-1 shrink-0"
                  >
                    {copiedKey === "bep20" ? (
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedKey === "bep20" ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://paybis.com/buy-tether-bep20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                  >
                    Pay via Paybis <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.moonpay.com/buy/usdt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                  >
                    Pay via MoonPay <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleConfirmTelegram} className="space-y-2.5 pt-3 border-t border-white/10">
              <p className="text-[11px] font-mono text-slate-400 uppercase">
                Step Final — Enter details to receive instant access:
              </p>
              <input
                type="email"
                required
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="Your Email (for course & AI Journal)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={studentTelegram}
                  onChange={(e) => setStudentTelegram(e.target.value)}
                  placeholder="Telegram @username"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
                />
                <input
                  type="text"
                  required
                  value={txId}
                  onChange={(e) => setTxId(e.target.value)}
                  placeholder="Order / TxID"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
                />
              </div>
              <button
                type="submit"
                className="btn-cyber w-full py-3.5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 mt-1"
              >
                <Send className="w-4 h-4" />
                Submit &amp; Unlock Access via Telegram
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
