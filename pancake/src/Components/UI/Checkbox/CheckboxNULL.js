import { useContext } from "react";
import { contextDarkMode } from "../DarkMode/contextDarkMode";
import "./checkbox.css";

function CheckboxNULL() {
  const darkMode = useContext(contextDarkMode);
  return (
    <div class={`checkbox-btn ${darkMode ? "checkbox-btn-dark" : ""}`}>
      <label
        class={`checkbox-btn-point ${
          darkMode ? "checkbox-btn-point-dark" : ""
        }`}
      >
        <input type="checkbox" class="checkbox-btn-input" />
      </label>
    </div>
  );
}

export default CheckboxNULL;
