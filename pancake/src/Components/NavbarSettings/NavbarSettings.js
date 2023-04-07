import "./navbarSettings.css";

import x from "./icon-x.svg";
import Checkbox from "../UI/Checkbox/Checkbox";
import CheckboxNULL from "../UI/Checkbox/CheckboxNULL";

function NavbarSettings({ isHidden, setHidden, mode, setMode }) {
  isHidden
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflowY = "visible");

  return (
    <section
      style={!isHidden ? { display: "none" } : { display: "flex" }}
      class="nav-settings-section"
    >
      <div class="nav-settings-section-cont">
        <div class="nav-settings-title">
          <h3>Settings</h3>
          <button
            style={{ background: "transparent", border: 0 }}
            class="nav-settings-icon-x"
            onClick={() => setHidden(!isHidden)}
          >
            <img src={x} alt="x" />
          </button>
        </div>
        <div class="nav-settings-list">
          <div class="nav-settings-list-title">GLOBAL</div>

          <div className="nav-settings-content">
            <div>
              <h4>Dark mode</h4>
              <Checkbox mode={mode} setMode={setMode} />
            </div>
            <div>
              <h4>Subgraph Health Indicator</h4> <CheckboxNULL />
            </div>
            <div>
              <h4>Show username</h4> <CheckboxNULL />
            </div>
            <div>
              <h4>Token Risk Scanning</h4> <CheckboxNULL />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarSettings;
