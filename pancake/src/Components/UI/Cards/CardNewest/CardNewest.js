import "./cardNewest.css";

import cactus from "./images/cacti-club-3704-1000.png";
import i_vol from "./images/i_volume.svg";

function CardNewest() {
  return (
    <section className="cardNewest-padding">
      <div className="cardNewest-container">
        <div>
          <img
            style={{ height: "255px", borderRadius: "8px" }}
            src={cactus}
            alt="cactus"
          />
        </div>
        <div className="cardNewest-description">
          <h6>Cacti Club</h6>
          <h3>Cacti Club #0000</h3>
          <hr></hr>
          <div className="cardNewest-price">
            <h6>Asking price</h6>
            <div>
              <h6>($156,01)</h6>
              <img src={i_vol} alt="" />
              <h3>0,5</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardNewest;
