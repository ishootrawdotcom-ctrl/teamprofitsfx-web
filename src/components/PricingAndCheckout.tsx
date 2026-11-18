"use client";

import { useEffect, useState } from "react";
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
  Flame,
  HelpCircle,
  MessageCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { PLANS, SITE_CONFIG } from "@/data/siteData";
import { Reveal } from "./Reveal";

const TELEGRAM_BOT_TOKEN = "9124891075:AAG1S6XFzMdHyUQQ7_sYiKExGg1vewS_Z_U";
const TELEGRAM_CHAT_ID = "1014774247";

export function PricingAndCheckout() {
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<(typeof PLANS)[0] | null>(null);
  const [payTab, setPayTab] = useState<"binance" | "card">("binance");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isBlackFriday, setIsBlackFriday] = useState(false);

  // Form
  const [studentEmail, setStudentEmail] = useState("");
  const [studentTelegram, setStudentTelegram] = useState("");
  const [txId, setTxId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const checkBF = () => {
      const now = new Date().getTime();
      const startTime = new Date(SITE_CONFIG.blackFriday.startNY).getTime();
      const endTime = new Date(SITE_CONFIG.blackFriday.endNY).getTime();
      setIsBlackFriday(now >= startTime && now <= endTime);
    };
    checkBF();
    const timer = setInterval(checkBF, 5000);
    return () => clearInterval(timer);
  }, []);

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
    if (isBlackFriday && plan.id === "lifetime") {
      return (plan.price * (1 - SITE_CONFIG.blackFriday.discountPercent / 100)).toFixed(2);
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setIsSubmitting(true);

    const method = payTab === "binance" ? "Binance Pay (UID)" : "Card / USDT (TRC20)";
    const bfTag = isBlackFriday ? "🔥 [BLACK FRIDAY 80% DEAL]" : "";
    const textMsg = `🚀 *NUEVO REGISTRO RECIBIDO* ${bfTag}\n\n` +
      `📌 *Plan:* ${selectedPlan.name}\n` +
      `💰 *Monto:* $${getFinalPrice(selectedPlan)} USDT\n` +
      `💳 *Método:* ${method}\n` +
      `✉️
