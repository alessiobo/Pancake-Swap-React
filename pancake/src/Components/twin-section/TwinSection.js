import React from "react";
import "./twin-section.css";
import Button from "../UI/Buttons/Button";
import Section4 from "./Section4";
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";
import { useContext } from "react";

// images
import svg40 from "./icons/svgexport-40.svg";
import BNB from "./imgs/BNB@2x.png";
import BTC from "./imgs/BTC@2x.png";
import CAKE from "./imgs/CAKE@2x.png";

function TwinSection() {
  const darkMode = useContext(contextDarkMode);
  return (
    <div className="twin-section">
    <div className={`section3-wrapper ${darkMode ? "section3-wrapper-dark" : ""}`}>
      <div className="text-box">
        <h2 className={`twin-section-title ${darkMode ? "twin-section-title-dark" : ""}`}>
          <span className="secondary">Trade</span> anything. No <br />
          registration, no hassle.
        </h2>
        <p className="paragraph">
          Trade any token on BNB Smart Chain in seconds, just by <br />
          connecting your wallet
        </p>

        <div className="btn-wrapper">
          <Button type={"btn"}>Trade Now</Button>
          <a href="#" className="link">
            Learn
            <img src={svg40} className="arrow" alt="icon" />
          </a>
        </div>
      </div>
      <div className="images-wrapper">
        <img
          src={BNB}
          className="img-anim"
          style={{ animationDelay: "-11s" }}
          alt="bnb"
        />
        <img
          src={BTC}
          className="img-anim"
          style={{ animationDelay: "-10s" }}
          alt="btc"
        />
        <img
          src={CAKE}
          className="img-anim"
          style={{ animationDelay: "-9s" }}
          alt="cake"
        />
      </div>
    </div>
    <Section4 />
    </div>
  );
}

export default TwinSection;
