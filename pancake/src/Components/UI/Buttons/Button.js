import "./button.css";

import iconArrowUP from "./Icons/icon-arrow-up.svg";
import iconArrowR from "./Icons/icon-arr-r.svg";
import { contextDarkMode } from "../DarkMode/contextDarkMode";
import { useContext } from "react";

function Button(props) {
  const darkMode = useContext(contextDarkMode);

  let imgSrc = "";

  if (props.img === "arrUP") {
    imgSrc = iconArrowUP;
  } else if (props.img === "arrR") {
    imgSrc = iconArrowR;
  }

  return (
    <button style={props.addStyle} className={props.type}>
      <span
        style={
          darkMode && props.type !== "btn-thin" ? { color: "#191326" } : {}
        }
      >
        {props.children}
      </span>

      {imgSrc !== "" && (
        <img
          style={
            darkMode
              ? {
                  filter:
                    "invert(8%) sepia(36%) saturate(787%) hue-rotate(217deg) brightness(97%) contrast(99%)",
                }
              : {}
          }
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
