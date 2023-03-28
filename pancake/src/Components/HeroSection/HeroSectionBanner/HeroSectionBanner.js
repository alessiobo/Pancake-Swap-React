import "./heroSectionBanner.css";
import Button from "../../UI/Buttons/Button";

//Immagini:
import bunny1 from "../images/hero-slidebar-bunny-1.webp";
import bunny2 from "../images/hero-slidebar-bunny-2.webp";
import bunny3 from "../images/hero-slidebar-bunny-3.webp";
import { useCallback, useState } from "react";
import { useEffect } from "react";

function HeroSectionBanner() {
  const [slide, setSlide] = useState(1);

  const [banner, setBanner] = useState(1);

  const sliderClickHandler = useCallback((num) => {
    setSlide(num);
  }, []);

  const banner1 = {
    subTitle: "PancakeSwap x Trust Wallet",
    title: "Trade and win $10,000 Prize Pool",
    buttons: [
      {
        type: "btn",
        img: "arrR",
        bntTitle: "Trade now",
      },
      {
        type: "btn-invert",
        img: "arrUP",
        bntTitle: "Download",
      },
    ],
    img: bunny1,
    styleBG: {
      background:
        "radial-gradient(104.12% 231.19% at -4.12% -5.83%, rgb(0, 87, 174) 0.52%,rgb(102, 124, 198) 67.41%,rgb(25, 229, 245) 100%)",
    },
  };

  const banner2 = {
    subTitle: "LOL",
    title: "Hello Aptos Project Teams!",
    buttons: [{ type: "btn", img: "arrUP", bntTitle: "👋 Get in Touch!" }],
    img: bunny2,
    styleBG: {
      background: "linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)",
    },
  };

  const banner3 = {
    subTitle: "Perpetual Futures",
    title: "UP TO 100x LEVERAGE",
    buttons: [{ type: "btn", img: "arrR", bntTitle: "Trade now" }],
    img: bunny3,
    styleBG: {
      background:
        "-webkit-linear-gradient(top, rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%)",
    },
  };

  useEffect(() => {
    switch (slide) {
      case 1:
        setBanner(banner1);
        break;
      case 2:
        setBanner(banner2);
        break;
      case 3:
        setBanner(banner3);
        break;
      default:
        break;
    }
  }, [slide]);

  return (
    <div style={banner.styleBG} className="hero-slideBar">
      <div className="hero-slideBar-content">
        <span>{banner.subTitle}</span>
        <h2>{banner.title}</h2>
        {/* <div className="hero-slideBar-content-img"></div> */}
        <div className="hero-slideBar-btn">
          {banner.buttons?.map((el, k) => {
            return (
              <Button key={k} type={el.type} img={el.img}>
                {el.bntTitle}
              </Button>
            );
          })}
        </div>
        <div className="hero-slideBar-btnSlider">
          <span onClick={() => sliderClickHandler(1)}></span>
          <span onClick={() => sliderClickHandler(2)}></span>
          <span onClick={() => sliderClickHandler(3)}></span>
        </div>
        <div className="hero-slideBar-img">
          <img
            className={`hero-slideBar-img-bunny${slide}`}
            src={banner.img}
            alt="hero-slidebar"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSectionBanner;
