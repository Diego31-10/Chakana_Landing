import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import Download from "@/app/components/Download";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Download />
      <Footer />
    </main>
  );
}
