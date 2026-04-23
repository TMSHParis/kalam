import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuSection } from "@/components/MenuSection";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <MenuSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
