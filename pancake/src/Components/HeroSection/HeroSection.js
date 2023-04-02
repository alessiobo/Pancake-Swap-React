import "animate.css";
import Button from "../UI/Buttons/Button";
import "./heroSection.css";

import HeroSectionBanner from "./HeroSectionBanner/HeroSectionBanner";

//Immagini:
import astronautBunny from "./images/astronaut-bunny.webp";
import starL from "./images/star-left.webp";
import starR from "./images/star-right.webp";
import starTR from "./images/star-top-r.webp";
import wave from "./images/wave-bg.svg";

function HeroSection() {
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-section-content">
        <HeroSectionBanner />

        <div className="hero-homepage">
          <div className="hero-homepage-text">
            <h1 className="hero-homepage-text-title">
              The moon is made of pancakes.
            </h1>
            <p className="hero-homepage-text-parag">
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>
            <div className="hero-homepage-buttons">
              <Button type={"btn"} img={"arrR"}>
                Connect Wallet
              </Button>
              <Button type="btn-thin">Trade Now</Button>
            </div>
          </div>
          <div className="hero-homepage-images">
            <img
              className="img-anim astronaut-bunny-img"
              src={astronautBunny}
              alt="astronaut bunny"
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-2"
              src={starL}
              alt="star"
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-5"
              src={starR}
              alt="star"
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-3"
              src={starTR}
              alt="star"
            />
          </div>
        </div>
      </div>
      <div className="hero-bg-wave">
        <img id="hero-wave" src={wave} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
