import React from "react";

function ImagesWrapper() {
  return (
    <div className="images-wrapper">
      <ImgAnim
        src="../Pancake/Components/twin-section/imgs/BNB@2x.png"
        alt="bnb"
        delay="-11s"
      />
      <ImgAnim
        src="../Pancake/Components/twin-section/imgs/BTC@2x.png"
        alt="btc"
        delay="-10s"
      />
      <ImgAnim
        src="../Pancake/Components//twin-section/imgs/CAKE@2x.png"
        alt="cake"
        delay="-9s"
      />
    </div>
  );
}

export default ImagesWrapper;