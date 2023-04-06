import "./cardswap.css"
import Card from "./Card/Card"
import Image_Text_Wrapper from "./Image_Text_Wrapper/Image_Text_Wrapper"
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";
import { useContext } from "react";
function Cardswap() {
    const darkMode = useContext(contextDarkMode)
    return (
        <div className={darkMode ? "card_swap_dark" : "card_swap"}>
            <div className={darkMode ? "element_wrapper_dark" : "element_wrapper"}>
                <Card />
                <Image_Text_Wrapper />
            </div>
        </div>
    )
}

export default Cardswap