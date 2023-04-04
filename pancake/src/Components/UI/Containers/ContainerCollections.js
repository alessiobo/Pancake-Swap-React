import Button from "../Buttons/Button";
import "./containerCollection.css";

function ContainerCollections(props) {
  return (
    <section>
      <div className="containerCollection-title">
        <h2>{props.title}</h2>
        <Button addStyle={{ height: "32px" }} type={"btn-thin"}>
          {props.btnTitle}
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

export default ContainerCollections;
