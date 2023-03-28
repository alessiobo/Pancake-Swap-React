import React from "react";

function Button(props) {
  return (
    <button className="btn">
      <a href={props.href}>{props.text}</a>
    </button>
  );
}

export default Button;
