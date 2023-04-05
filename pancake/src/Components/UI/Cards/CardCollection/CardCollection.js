import { useContext } from "react";
import { contextDarkMode } from "../../DarkMode/contextDarkMode";
import "./cardCollection.css";

//images Placheolder
import banner from "./cardImages/bannerImages/banner-sm.webp";
import circle from "./cardImages/circleImages/avatar.png";
import i_vol from "./cardImages/i_volume.svg";

function CardCollection() {
  const darkMode = useContext(contextDarkMode);
  return (
    <div
      className={`cardCollection-padding ${
        darkMode ? "cardCollection-padding-dark" : ""
      } `}
    >
      <div
        className={`cardCollection-container ${
          darkMode ? "cardCollection-container-dark" : ""
        } `}
      >
        <div className="cardCollection-banner">
          <img src={banner} alt="banner_image" />
        </div>
        <div className="cardCollection-circle">
          <img src={circle} alt="circle_image" />
        </div>
        <div className="cardCollection-description">
          <h4 style={darkMode ? { color: "#fff" } : {}}>
            Lil Pudgys BNB Chain
          </h4>
          <div>
            <p style={darkMode ? { color: "#b8add2" } : {}}>Volume</p>{" "}
            <img src={i_vol} alt="icon" />
            <span style={darkMode ? { color: "#fff" } : {}}>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
