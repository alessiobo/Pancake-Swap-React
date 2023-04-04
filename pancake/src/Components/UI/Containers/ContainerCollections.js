import Button from "../Buttons/Button";
import "./containerCollection.css";

function ContainerCollections(props) {
  return (
    <section>
      <div className="containerCollection-title">
        <h2>Placheolder</h2>
        <Button addStyle={{ height: "32px" }} type={"btn-thin"}>
          Placheolder
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

export default ContainerCollections;
