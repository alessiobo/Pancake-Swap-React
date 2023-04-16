import { useEffect, useState } from "react";
import Button from "../UI/Buttons/Button";
import "./buttonUP.css";

function ButtonUP() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = currentScrollPos > 500;
      setIsVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`buttonUP-container ${isVisible ? "visible" : "hidden"}`}>
      <a style={{ textDecoration: "none" }} href="#top">
        <Button type={"btn-square"} link={"#top"}>
          <span style={{ fontSize: "20px" }}> ▲</span>
        </Button>
      </a>
    </div>
  );
}

export default ButtonUP;
