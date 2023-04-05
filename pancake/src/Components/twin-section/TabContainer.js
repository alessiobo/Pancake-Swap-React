import React, { useState, useEffect } from "react";
import "./twin-section.css";
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";
import { useContext } from "react";

function TabContainer() {
  const darkMode = useContext(contextDarkMode);
  const [isFarmsDataVisible, setIsFarmsDataVisible] = useState(true);

  function handleClick() {
    setIsFarmsDataVisible((prevIsFarmsDataVisible) => !prevIsFarmsDataVisible);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFarmsDataVisible(
        (prevIsFarmsDataVisible) => !prevIsFarmsDataVisible
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tab-container">
      <div className="title-container">
        <h4 className={`tab-title ${darkMode ? "tab-title-dark" : ""}`}>
          Top
          <span className="mobile-span secondary">
            {" "}
            {isFarmsDataVisible ? "Farms" : "Syrup Pools"}
          </span>
        </h4>
        <button className="click-data" onClick={handleClick}>
          <svg
            viewBox="0 0 24 25"
            height="24px"
            width="24px"
            color="textSubtle"
            xmlns="http://www.w3.org/2000/svg"
            className={`click-btn ${darkMode ? "click-btn-dark" : ""}`}
          >
            <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path>
          </svg>
        </button>
      </div>
      <div className="data-container inter-table">
        {isFarmsDataVisible ? (
          <div className="farms-data">
            <div className="data-item1">
              <h5 className="small-title">
                <span className="secondary">WMX-BUSD LP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>130.320%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item2">
              <h5 className="small-title">
                <span className="secondary">KRS-BUSD LP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>122.320%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item3">
              <h5 className="small-title">
                <span className="secondary">MGP-BUSD LP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>116.840%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item4">
              <h5 className="small-title">
                <span className="secondary">ARV-BNB LP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>102.034%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item5">
              <h5 className="small-title">
                <span className="secondary">HOOP-BUSD LP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>98.997%</p>
              <p className="data-initials">APR</p>
            </div>
          </div>
        ) : (
          <div className="syrup-data">
            <div className="data-item1">
              <h5 className="small-title">
                <span className="secondary">Stake CAKE</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>59.14%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item2">
              <h5 className="small-title">
                <span className="secondary">Stake CAKE - Earn KRS</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>6.216%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item3">
              <h5 className="small-title">
                <span className="secondary">Stake CAKE - Earn XCAD</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>6.203%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item4">
              <h5 className="small-title">
                <span className="secondary">State CAKE - Earn MGP</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>6.089%</p>
              <p className="data-initials">APR</p>
            </div>
            <div className="data-item5">
              <h5 className="small-title">
                <span className="secondary">State CAKE - Earn WMX</span>
              </h5>
              <p className={`data-paragraph ${darkMode ? "data-paragraph-dark" : ""}`}>5.686%</p>
              <p className="data-initials">APR</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabContainer;
