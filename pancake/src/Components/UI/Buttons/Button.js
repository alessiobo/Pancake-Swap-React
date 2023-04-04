import "./button.css";

import iconArrowUP from "./Icons/icon-arrow-up.svg";
import iconArrowR from "./Icons/icon-arr-r.svg";

function Button(props) {
  let imgSrc = "";

  if (props.img === "arrUP") {
    imgSrc = iconArrowUP;
  } else if (props.img === "arrR") {
    imgSrc = iconArrowR;
  }

  return (
    <button style={props.addStyle} className={props.type}>
      {props.children}
      {imgSrc !== "" && (
        <img
          className={
            props.type === "btn-invert"
              ? "btn-class-img-invert"
              : "btn-class-img"
          }
          src={imgSrc}
          alt="button"
        />
      )}
    </button>
  );
}

export default Button;
