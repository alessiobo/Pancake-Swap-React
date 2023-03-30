import "animate.css";
import "./heroSectionBanner.css";
import Button from "../../UI/Buttons/Button";

import useHeroBannerHook from "./useHeroBannerHook";

function HeroSectionBanner() {
  const { bannerRef, banner, slide, sliderClickHandler } = useHeroBannerHook();

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
