import ActivitiesSection from "./components/ActivitiesSection";
import Excellence from "./components/Excellence";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <section>
      <div className="motion-preset-slide-right-md" >
        <HeroSection />
        <Excellence />
        <Features />
        <ActivitiesSection />
      </div>
    </section>
  );
}