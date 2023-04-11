
import { useContext } from "react"
import "./underbar.css"
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode"
import LinkUnderbarSlot from "./link_underbar_slot"

function Underbar() {
    //variabile che controlla url
    const darkMode = useContext(contextDarkMode)
   
    return (
        <div id={darkMode ? "underbar-dark" : "underbar"}>
            {/* <div className={location.pathname === "/swap" ? "clicked_wrapper" : ""} >
                <Link to="/swap" className="underbar_link">
                    {slot1}
                </Link>
                <div className="colored_bar" />
            </div> */}
            <LinkUnderbarSlot slot="Swap"/>
            <LinkUnderbarSlot slot="Limit"/>
            <LinkUnderbarSlot slot="Liquidity"/>
            <LinkUnderbarSlot slot="Nfts"/>
            
        </div>
    )
}

export default Underbar