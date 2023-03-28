import Button from "../UI/Buttons/Button";
import "./heroSection.css";
// import img from "./images/astronaut-bunny.webp";
import HeroSectionBanner from "./HeroSectionBanner/HeroSectionBanner";

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
              <Button type={"btn"}>Connect Wallet</Button>
              <Button type="btn-thin">Trade Now</Button>
            </div>
          </div>
          <div className="hero-homepage-images">
            <img
              className="img-anim astronaut-bunny-img"
              // src="./Components/HeroSection/images/astronaut-bunny.webp"
              //   src={img["astronaut-bunny.webp"]}
              //   src={img}
              alt=""
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-2"
              src="./Components/HeroSection/images/star-left.webp"
              alt=""
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-5"
              src="./Components/HeroSection/images/star-right.webp"
              alt=""
            />
            <img
              className="astronaut-bunny-img-star hero-anim-star-3"
              src="./Components/HeroSection/images/star-top-r.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hero-bg-wave">
        <img
          id="hero-wave"
          src="./Components/HeroSection/images/wave-bg.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default HeroSection;
