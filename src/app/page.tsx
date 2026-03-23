import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProgrammableFuture from "@/components/sections/ProgrammableFuture";
import TerminalSection from "@/components/sections/TerminalSection";
import CategorySection from "@/components/sections/CategorySection";
import AddressableEconomy from "@/components/sections/AddressableEconomy";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import MoatsAndFooter from "@/components/sections/MoatsAndFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-surface">
      <Navbar />
      <HeroSection />
      <TerminalSection />
      <ProgrammableFuture />
      <CategorySection />
      <AddressableEconomy />
      <FeaturesGrid />
      <MoatsAndFooter />
    </main>
  );
}
