import "./heroSection.css";
import HeroSectionBanner from "./HeroSectionBanner/HeroSectionBanner";

function HeroSection() {
  return (
    <section id="hero-section" class="hero-section">
      <div class="hero-section-content">
        <HeroSectionBanner />

        <div class="hero-homepage">
          <div class="hero-homepage-text">
            <h1 class="hero-homepage-text-title">
              The moon is made of pancakes.
            </h1>
            <p class="hero-homepage-text-parag">
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>
            <div class="hero-homepage-buttons">
              <button class="btn">Connect Wallet</button>
              <button class="btn-thin">Trade Now</button>
            </div>
          </div>
          <div class="hero-homepage-images">
            <img
              class="img-anim astronaut-bunny-img"
              src="./Components/HeroSection/images/astronaut-bunny.webp"
              alt=""
            />
            <img
              class="astronaut-bunny-img-star hero-anim-star-2"
              src="./Components/HeroSection/images/star-left.webp"
              alt=""
            />
            <img
              class="astronaut-bunny-img-star hero-anim-star-5"
              src="./Components/HeroSection/images/star-right.webp"
              alt=""
            />
            <img
              class="astronaut-bunny-img-star hero-anim-star-3"
              src="./Components/HeroSection/images/star-top-r.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="hero-bg-wave">
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
