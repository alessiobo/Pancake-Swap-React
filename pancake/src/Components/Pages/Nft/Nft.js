import "./nft.css";

import CardCollection from "../../UI/Cards/CardCollection/CardCollection";
import Button from "../../UI/Buttons/Button";
import ContainerCollections from "../../UI/Containers/ContainerCollections";

function Nft() {
  return (
    <section>
      {/* Navbar */}
      {/* Title */}
      <div>
        <ContainerCollections
          title={"Newest Collections"}
          btnTitle={"View All"}
        >
          <div className="nft-container">
            <CardCollection />
            <CardCollection />
            <CardCollection />
            <CardCollection />
            <CardCollection />
            <CardCollection />
          </div>
        </ContainerCollections>
      </div>
    </section>
  );
}

export default Nft;
