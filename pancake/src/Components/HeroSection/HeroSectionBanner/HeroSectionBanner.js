function HeroSectionBanner() {
  return (
    <div id="hero-slideBar" class="hero-slideBar">
      <div class="hero-slideBar-content">
        <span>PancakeSwap x Trust Wallet</span>
        <h2>Trade and win $10,000 Prize Pool</h2>
        <div class="hero-slideBar-content-img"></div>
        <div class="hero-slideBar-buttons">
          <button class="btn">
            <div>
              <span>Trade now</span>
              <span>
                <img
                  class="hero-slideBar-buttons-icons hero-icon"
                  src="./Components/HeroSection/images/Icons/icon-arr-r.svg"
                  alt="icon-arrow-right"
                />
              </span>
            </div>
          </button>
          <button class="btn">
            <div>
              <span>Download</span>
              <span>
                <img
                  class="hero-icon"
                  src="./Components/HeroSection/images/Icons/icon-arrow-up.svg"
                  alt="icon-arrow-up"
                />
              </span>
            </div>
          </button>
        </div>
        <div class="hero-slideBar-btnSlider">
          <span id="slider1"></span>
          <span id="slider2"></span>
          <span id="slider3"></span>
        </div>
        <div class="hero-slideBar-img">
          <img
            class="hero-slideBar-img-bunny1"
            src="./Components/HeroSection/images/hero-slidebar-bunny1.webp"
            alt="hero-slidebar"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSectionBanner;
