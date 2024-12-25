import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pb-16 gap-8 sm:p-20 sm:pb-20 sm:gap-12 text-gray-900">
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />  
    </div>
  );
}
