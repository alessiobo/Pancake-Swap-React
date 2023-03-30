import "animate.css";
import "./heroSectionBanner.css";
import Button from "../../UI/Buttons/Button";

//Immagini:
import bunny1 from "../images/hero-slidebar-bunny-1.webp";
import bunny2 from "../images/hero-slidebar-bunny-2.webp";
import bunny3 from "../images/hero-slidebar-bunny-3.webp";
import { useCallback, useMemo, useRef, useState } from "react";
import { useEffect } from "react";

function HeroSectionBanner() {
  const bannerRef = useRef();
  const intervallID = useRef(0);

  const [slide, setSlide] = useState(1);

  const [banner, setBanner] = useState(1);

  const [int, setInt] = useState(2);

  const sliderHandler = useCallback((num) => {
    bannerRef.current.className =
      "hero-slideBar animate__animated animate__bounceOutLeft";

    setTimeout(() => {
      bannerRef.current.className =
        "hero-slideBar animate__animated animate__bounceInRight";
      setSlide(num);
    }, 350);
  }, []);

  const sliderClickHandler = (num) => {
    sliderHandler(num);
    clearInterval(intervallID.current);
    setTimeout(() => {
      const numInt = num + 1 === 4 ? 1 : num + 1;
      setInt(numInt);
    }, 3000);
  };

  const banner1 = useMemo(() => {
    return {
      id: 1,
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
  }, []);

  const banner2 = useMemo(() => {
    return {
      id: 2,
      subTitle: "PancakeSwap x APTOS",
      title: "Hello Aptos Project Teams!",
      buttons: [{ type: "btn", img: "arrUP", bntTitle: "👋 Get in Touch!" }],
      img: bunny2,
      styleBG: {
        background: "linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)",
      },
    };
  }, []);

  const banner3 = useMemo(() => {
    return {
      id: 3,
      subTitle: "Perpetual Futures",
      title: "UP TO 100x LEVERAGE",
      buttons: [{ type: "btn", img: "arrR", bntTitle: "Trade now" }],
      img: bunny3,
      styleBG: {
        background:
          "-webkit-linear-gradient(top, rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%)",
      },
    };
  }, []);

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

  useEffect(() => {
    intervallID.current = setInterval(() => {
      slideLoop();
    }, 5000);

    return () => clearInterval(intervallID.current);
  }, [int]);

  const slideLoop = () => {
    sliderHandler(int);
    setInt((i) => (i === 3 ? 1 : i + 1));
  };
  return (
    <div
      ref={bannerRef}
      style={banner.styleBG}
      className="hero-slideBar animate__animated animate__bounce"
    >
      <div className="hero-slideBar-content">
        <span>{banner.subTitle}</span>
        <h2>{banner.title}</h2>

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
          <span
            className={banner.id === 1 ? "slidebarSpan1" : ""}
            onClick={() => sliderClickHandler(1)}
          ></span>
          <span
            className={banner.id === 2 ? "slidebarSpan2" : ""}
            onClick={() => sliderClickHandler(2)}
          ></span>
          <span
            className={banner.id === 3 ? "slidebarSpan3" : ""}
            onClick={() => sliderClickHandler(3)}
          ></span>
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
