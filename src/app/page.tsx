import About from "@/components/About";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center p-8 pb-16 gap-8 sm:p-20 sm:pb-20 sm:gap-12 text-gray-900">
      <HeroSection />
      <About />
    </div>
  );
}
