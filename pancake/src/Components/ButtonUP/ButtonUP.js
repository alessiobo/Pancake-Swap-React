import Button from "../UI/Buttons/Button";
import "./buttonUP.css";

function ButtonUP() {
  return (
    <div className="buttonUP-container">
      <a style={{ textDecoration: "none" }} href="#top">
        <Button type={"btn-square"} link={"#top"}>
          <span style={{ fontSize: "20px" }}> ▲</span>
        </Button>
      </a>
    </div>
  );
}

export default ButtonUP;
