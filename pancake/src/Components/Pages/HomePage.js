import HeroSection from "../HeroSection/HeroSection";
import OrangeSection from "../OrangeSection/OrangeSection";
import BuyCake from "../buyCake-section/buyCake-section";
import TwinSection from "../twin-section/TwinSection";
import { Link } from "react-router-dom";
import CardSection from "../CardSection/Card-Section";

function HomePage() {
  return (
    <div>
      
      <Link to="swap">HomePage SUCA</Link>
      <HeroSection />
      <CardSection />
      <TwinSection />
      <OrangeSection/>
      <BuyCake />
      
    </div>
  );
}

export default HomePage;
