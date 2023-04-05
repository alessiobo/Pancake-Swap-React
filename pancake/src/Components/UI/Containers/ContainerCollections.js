import { useContext } from "react";
import Button from "../Buttons/Button";
import "./containerCollection.css";
import { contextDarkMode } from "../DarkMode/contextDarkMode";

function ContainerCollections(props) {
  const darkMode = useContext(contextDarkMode);

  return (
    <section>
<<<<<<< HEAD
      <div className="containerCollection-title">
        <h2 style={{ color: "#280d5f" }}>{props.title}</h2>
=======
      <div className="containerCollection-container">
        <h2
          className={`containerCollection-title ${
            darkMode ? "containerCollection-title-dark" : ""
          }`}
        >
          {props.title}
        </h2>
>>>>>>> develope
        <Button addStyle={{ height: "32px" }} type={"btn-thin"}>
          View All
        </Button>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

export default ContainerCollections;
