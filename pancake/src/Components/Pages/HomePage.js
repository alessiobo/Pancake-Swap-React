import HeroSection from "../HeroSection/HeroSection";
import BuyCake from "../buyCake-section/buyCake-section";
import TwinSection from "../twin-section/TwinSection";
import CardSection from "../CardSection/Card-Section";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <TwinSection />
      <BuyCake />
    </div>
  );
}

export default HomePage;
