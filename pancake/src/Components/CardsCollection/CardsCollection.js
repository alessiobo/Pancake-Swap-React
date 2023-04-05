import CardCollection from "../UI/Cards/CardCollection/CardCollection";
import ContainerCollections from "../UI/Containers/ContainerCollections";
import "./cardsCollection.css";

function CardsCollection({ title }) {
  return (
    <ContainerCollections title={title}>
      <div className="cardsCollection-container">
        <CardCollection />
        <CardCollection />
        <CardCollection />
        <CardCollection />
        <CardCollection />
        <CardCollection />
      </div>
    </ContainerCollections>
  );
}

export default CardsCollection;
