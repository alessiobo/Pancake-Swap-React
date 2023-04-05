import React, { useState } from "react";

function ThirdRowLi() {
  const [hideClosedPositions, setHideClosedPositions] = useState(false);

  const handleCheckboxChange = (event) => {
    setHideClosedPositions(event.target.checked);
  };

  return (
    <div className="thirdRowLi">
      <label>
        <input type="checkbox" checked={hideClosedPositions} onChange={handleCheckboxChange} />
        Hide closed positions
      </label>
      <div className="switcherLi"></div>
    </div>
  );
}

export default ThirdRowLi;