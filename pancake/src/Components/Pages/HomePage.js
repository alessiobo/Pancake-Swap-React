import HeroSection from "../HeroSection/HeroSection";
import OrangeSection from "../OrangeSection/OrangeSection";
import BuyCake from "../buyCake-section/buyCake-section";
import TwinSection from "../twin-section/TwinSection";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Link to="swap">HomePage SUCA</Link>
      <HeroSection />
      <TwinSection />
      <OrangeSection/>
      <BuyCake />
    </div>
  );
}

export default HomePage;
