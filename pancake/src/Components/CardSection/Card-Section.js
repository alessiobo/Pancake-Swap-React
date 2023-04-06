import React from "react";
import "./card-section.css";
import bunnyImage from "./img-icons/bunny-viola.png";
import usersIcon from "./img-icons/users.png";
import frecceIcon from "./img-icons/frecce.png";
import graficoIncon from "./img-icons/grafico.png";

import { useContext } from "react";
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";

export default function CardSection() {
  const darkMode = useContext(contextDarkMode);

  const cardData = [
    {
      logo: usersIcon,
      firstTitle: "1.6 million",
      secondTitle: "users",
      span: "in the last 30 days",
    },
    {
      logo: frecceIcon,
      firstTitle: "22 million",
      secondTitle: "trades",
      span: "made in the last 30 days",
    },
    {
      logo: graficoIncon,
      firstTitle: "$3.3 billion",
      secondTitle: "staked",
      span: "Total Value Locked",
    },
  ];

  const getColor = (title) => {
    switch (title) {
      case "trades":
        return "#007aff";
      case "staked":
        return "#ed4b9e";
      default:
        return "#7645d9";
    }
  };

  return (
    <section>
      <div className={`card-section ${darkMode ? "card-section-dark" : ""}`}>
        <img src={bunnyImage} alt="bunny" className="bunny-viola" />
        <h2 className={`card-title-h2 ${darkMode ? "title-h2-dark" : ""}`}>
          Used by millions.
          <br />
          Trusted with billions.
        </h2>
        <p className="card-mini-p">
          PancakeSwap has the most users of any decentralized platform, ever.
          <br />
          And those users are now entrusting the platform with over $3.3 billion
          in funds.
        </p>
        <br />
        <b className="bold-text">Will you join them?</b>
        <div className="card-container">
          {cardData.map((data, index) => (
            <div
              className={`card-all ${darkMode ? "card-bg-dark" : ""}`}
              key={index}
            >
              <img src={data.logo} alt="logo" className="card-logo" />
              <h2 className={`first-h2 ${darkMode ? "first-h2-dark" : ""}`}>
                {data.firstTitle}
              </h2>
              <br />
              <h2
                className="card-section-h2"
                style={{ color: getColor(data.secondTitle) }}
              >
                {data.secondTitle}
              </h2>

              <br />
              <span className="span-cards">{data.span}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
