import "./nft.css";

import CardCollection from "../../UI/Cards/CardCollection/CardCollection";
import Button from "../../UI/Buttons/Button";

function Nft() {
  return (
    <section>
      {/* Navbar */}
      {/* Title */}
      <div>
        <div>
          <h3>Newest Collections</h3>
          <Button type={"btn-thin"}>View All</Button>
        </div>

        <div className="nft-container">
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
          <CardCollection />
        </div>
      </div>
    </section>
  );
}

export default Nft;
