import React, { useState } from "react";
import "./thirdRow.css"

function ThirdRowLi() {
  const [hideClosedPositions, setHideClosedPositions] = useState(false);

  const handleCheckboxChange = (event) => {
    setHideClosedPositions(event.target.checked);
  };

  return (
    <div className="thirdRowLi">
      <label style={{ color: "#7A6EAF" }} className="containerCheck" >.Hide closed positions
        <input type="checkbox" checked={hideClosedPositions} onChange={handleCheckboxChange} />
        <span class="checkmark"></span>
      </label>
      <div className="switcherLi">
        <div className="firstBt">
          <button type="submit">All</button>
        </div>
        <div className="secondBt">
          <button type="submit">V3</button>
        </div>
        <div className="thirdBt">
          <button type="submit">StableSwap</button>
        </div>
        <div className="fourthBt">
          <button type="submit">V2</button>
        </div>
      </div>
    </div>
  );
}

export default ThirdRowLi;