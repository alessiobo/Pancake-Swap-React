import HeroSection from "../HeroSection/HeroSection";
import OrangeSection from "../OrangeSection/OrangeSection";
import BuyCake from "../buyCake-section/buyCake-section";
import TwinSection from "../twin-section/TwinSection";

function HomePage() {
  return (
    <div>
      HomePage SUCA
      <HeroSection />
      <TwinSection />
      <OrangeSection/>
      <BuyCake />
    </div>
  );
}

export default HomePage;
