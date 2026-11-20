import { BlackFridayBanner } from "@/components/BlackFridayBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { PartnersSection } from "@/components/PartnersSection";
import { AboutMentor } from "@/components/AboutMentor";
import { Reviews } from "@/components/Reviews";
import { PricingAndCheckout } from "@/components/PricingAndCheckout";
import { FaqAndFooter } from "@/components/FaqAndFooter";
import { JournalModal } from "@/components/JournalModal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-carbon bg-carbon-grid relative">
      <BlackFridayBanner />
      <Navbar />
      <Hero />
      <Ecosystem />
      <PartnersSection />
      <AboutMentor />
      <Reviews />
      <PricingAndCheckout />
      <FaqAndFooter />
      <JournalModal />
    </main>
  );
}
