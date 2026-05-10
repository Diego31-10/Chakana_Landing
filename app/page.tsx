"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TechStrip from "@/app/components/TechStrip";
import HowItWorks from "@/app/components/HowItWorks";
import Download from "@/app/components/Download";
import Footer from "@/app/components/Footer";
import { useLang } from "@/app/lib/i18n";

export default function Home() {
  const { animKey } = useLang();

  return (
    <>
      <Header />
      <main key={animKey}>
        <Hero />
        <TechStrip />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </>
  );
}
