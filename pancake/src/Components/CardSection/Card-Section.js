import React from "react";
import bunnyImage from "./img-icons/bunny-viola.png";
import usersIcon from "./img-icons/users.png";
import frecceIcon from "./img-icons/frecce.png";
import graficoIncon from "./img-icons/grafico.png";

export default function CardSection() {
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

  return (
    <div className="card-section">
      <img src={bunnyImage} alt="bunny" className="bunny-viola" />
      <h2 className="card-title-h2">
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
          <div className="card-all" key={index}>
            <img src={data.logo} alt="logo" className="card-logo" />
            <h2 className="first-h2">{data.firstTitle}</h2>
            <br />
            <h2 className="card-section-h2">{data.secondTitle}</h2>
            <br />
            <span className="span-cards">{data.span}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
