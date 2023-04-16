// import { useEffect, useState } from "react"
import "./underbar.css"
import { Link, useLocation } from "react-router-dom"
// function Underbar() {
//     const [isHidden, setisHidden] = useState(false)
//     useEffect(() =>
//         function HandleScroll() {
//             if (window.scrollY > Underbar.offsetTop) {
//                 setisHidden(true)
//             } else {
//                 setisHidden(false)
//             }

//             window.addEventListener("scroll", HandleScroll);
//             return () => {
//                 window.removeEventListener("scroll", HandleScroll)
//             };
//         }, []);

function Underbar() {
    const location = useLocation()
    return (
        <div id="underbar">
            <div className={location.pathname === "/swap" ? "clicked_wrapper" : ""}>
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