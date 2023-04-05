import "./nft.css";

import CardsCollection from "../../CardsCollection/CardsCollection";
import TitleNFT from "./TitleNFT/TitleNFT";
import CardNewest from "../../UI/Cards/CardNewest/CardNewest";
import ContainerCollections from "../../UI/Containers/ContainerCollections";
import { useContext } from "react";
import { contextDarkMode } from "../../UI/DarkMode/contextDarkMode";

function Nft() {
  const darkMode = useContext(contextDarkMode);

  return (
<<<<<<< HEAD
    <section className="nft-container">
=======
    <section
      className={`nft-container ${darkMode ? "nft-container-dark" : ""}`}
    >
>>>>>>> develope
      {/* Navbar */}

      <TitleNFT
        title={"NFT Marketplace"}
        subTitle={"Buy and Sell NFTs on BNB Smart Chain"}
      />
      <CardsCollection title={"Newest Collections"} />
      <CardsCollection title={"Hot Collections"} />

      <ContainerCollections title={"Newest Arrivals"}>
        <div className="newestCollections-container">
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
          <CardNewest />
        </div>
      </ContainerCollections>
    </section>
  );
}

export default Nft;
