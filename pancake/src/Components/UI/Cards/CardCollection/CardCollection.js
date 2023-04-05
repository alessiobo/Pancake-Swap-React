import "./cardCollection.css";

//images Placheolder
import banner from "./cardImages/bannerImages/banner-sm.webp";
import circle from "./cardImages/circleImages/avatar.png";

function CardCollection() {
  return (
    <div className="cardCollection-padding ">
      <div className="cardCollection-container">
        <div className="cardCollection-banner">
          <img src={banner} alt="banner_image" />
        </div>
        <div className="cardCollection-circle">
          <img src={circle} alt="circle_image" />
          <div className="cardCollection-description">
            <h4>Lil Pudgys BNB Chain</h4>
            <h6>Volume 0</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
