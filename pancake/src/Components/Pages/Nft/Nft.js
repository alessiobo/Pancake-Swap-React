import "./nft.css";

import CardsCollection from "../../CardsCollection/CardsCollection";
import TitleNFT from "./TitleNFT/TitleNFT";

function Nft() {
  return (
    <section className="nft-container">
      {/* Navbar */}
      {/* Title */}
      <TitleNFT
        title={"NFT Marketplace"}
        subTitle={"Buy and Sell NFTs on BNB Smart Chain"}
      />
      <CardsCollection title={"Newest Collections"} />
      <CardsCollection title={"Hot Collections"} />
    </section>
  );
}

export default Nft;
