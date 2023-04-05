<<<<<<< HEAD
import "./titleNFT.css";
function TitleNFT({ title, subTitle }) {
  return (
    <section className="titleNFT-container">
      <div className="titleNFT-content">
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
=======
import { useContext } from "react";
import "./titleNFT.css";
import { contextDarkMode } from "../../../UI/DarkMode/contextDarkMode";
function TitleNFT({ title, subTitle }) {
  const darkMode = useContext(contextDarkMode);

  return (
    <section
      className={`titleNFT-container ${
        darkMode ? "titleNFT-container-dark" : ""
      }`}
    >
      <div className="titleNFT-content">
        <div>
          <h2>{title}</h2>
          <p
            className={`titleNFT-subtitle ${
              darkMode ? "titleNFT-subtitle-dark" : ""
            }`}
          >
            {subTitle}
          </p>
>>>>>>> develope
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default TitleNFT;
