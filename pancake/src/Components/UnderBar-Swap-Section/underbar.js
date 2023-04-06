// import { useEffect, useState } from "react"
import { useContext } from "react"
import "./underbar.css"
import { Link, useLocation } from "react-router-dom"
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode"

function Underbar() {
    const location = useLocation()
    const darkMode = useContext(contextDarkMode)
    return (
        <div id={darkMode ? "underbar-dark" : "underbar"}>
            <div className={location.pathname === "/swap" ? "clicked_wrapper" : ""} >
                <Link to="/swap" className="underbar_link">
                    Swap
                </Link>
                <div className="colored_bar" />
            </div>
            <div className={location.pathname === "/limit" ? "clicked_wrapper" : ""}>
                <Link className="underbar_link" to="/limit">
                    Limit
                </Link>
                <div className="colored_bar" />
            </div>
            <div className={location.pathname === "/liquidity" ? "clicked_wrapper" : ""}>
                <Link className="underbar_link" to="/liquidity">
                    Liquidity
                </Link>
                <div className="colored_bar" />
            </div>
            <div className={location.pathname === "/perpetual" ? "clicked_wrapper" : ""}>
                <Link className="underbar_link " to="/perpetual">
                    Perpetual
                </Link>
                <div className="colored_bar" />
            </div>
            <div className={location.pathname === "/bridge" ? "clicked_wrapper" : ""}>
                <Link className="underbar_link" to="/bridge">
                    Bridge
                </Link>
                <div className="colored_bar" />
            </div>
        </div>
    )
}

export default Underbar