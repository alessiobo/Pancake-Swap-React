import React from "react";

const TwinSectionTitle = ({ mainText, secondaryText }) => {
  return (
    <h2 className="twin-section-title">
      <span className="secondary">{secondaryText}</span> {mainText}
    </h2>
  );
};

export default TwinSectionTitle;
