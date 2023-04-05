import React from "react";
import "./twin-section.css";
import Button from "../UI/Buttons/Button";
import TabContainer from "./TabContainer";
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";
import { useContext } from "react";

// images
import svg41 from "./icons/svgexport-41.svg";
import pie from "./imgs/pie@2x.png";
import folder from "./imgs/folder@2x.png";
import stonks from "./imgs/stonks@2x.png";


function Section4() {
  const darkMode = useContext(contextDarkMode);
  return (
    <div className={`section4 ${darkMode ? "section4-dark" : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        className={`svg-divider ${darkMode ? "svg-divider-dark" : ""}`}
        color="text"
        preserveAspectRatio="none"
        viewBox="0 0 1660 48"
      >
        <path d="M1660 48C1139.02 46.189 336.256 15.245 0 0h1660v48Z" />
      </svg>
      <div className="section4-wrapper">
        <div className="text-box2">
          <h2 className={`twin-section2-title ${darkMode ? "twin-section2-title-dark" : ""}`}>
            <span className="secondary">Earn</span> passive income <br />
            with crypto
          </h2>
          <p className="paragraph2">
            PancakeSwap makes it easy to make your crypto work for <br />
            you.
          </p>
          <div className="btn-wrapper2">
            <Button type={"btn"}>Explore</Button>
            <a href="#" className="link">
              Learn
              <img src={svg41} className="arrow" alt="icon" />
            </a>
          </div>
        </div>
        <div className="images-wrapper2">
          <img
            src={pie}
            className="img-anim"
            style={{ animationDelay: "-11s" }}
            alt="pie"
          />
          <img
            src={stonks}
            className="img-anim"
            style={{ animationDelay: "-10s" }}
            alt="stonks"
          />
          <img
            src={folder}
            className="img-anim"
            style={{ animationDelay: "-9s" }}
            alt="fldr"
          />
        </div>
      </div>  
      <TabContainer />   
    </div>
  );
}

export default Section4;
