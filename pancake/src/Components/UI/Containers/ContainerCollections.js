import Button from "../Buttons/Button";
import "./containerCollection.css";

function ContainerCollections(props) {
  return (
    <section>
      <div className="containerCollection-title">
        <h2 style={{ color: "#280d5f" }}>{props.title}</h2>
        <Button addStyle={{ height: "32px" }} type={"btn-thin"}>
          View All
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

export default ContainerCollections;
