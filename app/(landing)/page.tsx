import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <Navbar />
      <HeroSection />
    </div>

  );
}
