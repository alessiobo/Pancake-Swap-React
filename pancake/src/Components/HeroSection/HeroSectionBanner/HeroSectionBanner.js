import "./heroSectionBanner.css";
import Button from "../../UI/Buttons/Button";

//Immagini:
import bunny1 from "../images/hero-slidebar-bunny-1.webp";
import bunny2 from "../images/hero-slidebar-bunny-2.webp";
import bunny3 from "../images/hero-slidebar-bunny-3.webp";

function HeroSectionBanner() {
  return (
    <div id="hero-slideBar" className="hero-slideBar">
      <div className="hero-slideBar-content">
        <span>PancakeSwap x Trust Wallet</span>
        <h2>Trade and win $10,000 Prize Pool</h2>
        <div className="hero-slideBar-content-img"></div>
        <div className="hero-slideBar-buttons">
          <Button type="btn" img={"arrR"}>
            Trade now
          </Button>
          <Button type="btn-invert" img={"arrUP"}>
            Download
          </Button>
        </div>
        <div className="hero-slideBar-btnSlider">
          <span id="slider1"></span>
          <span id="slider2"></span>
          <span id="slider3"></span>
        </div>
        <div className="hero-slideBar-img">
          <img
            className="hero-slideBar-img-bunny1"
            src={bunny1}
            alt="hero-slidebar"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSectionBanner;
