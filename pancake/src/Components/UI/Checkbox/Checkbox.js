import "./checkbox.css";

//Icons
import moon from "./Icon/moon.svg";
import sun from "./Icon/sun.svg";

function Checkbox({ mode, setMode }) {
  return (
    <div className="checkbox-btn-container">
      <input
        className="checkbox-btn-input"
        type="checkbox"
        id="switch-button1"
        checked={mode}
        onChange={() => setMode(!mode)}
      />
      <label
        className="checkbox-btn-label footer-label-color"
        for="switch-button1"
      >
        <img
          className="checkbox-btn-icon checkbox-btn-icon-sun"
          src={sun}
          alt=""
        />

        <img
          className="checkbox-btn-icon checkbox-btn-icon-moon"
          src={moon}
          alt=""
        />
      </label>
    </div>
  );
}

export default Checkbox;
