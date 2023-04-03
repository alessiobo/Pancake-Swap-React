import "./card.css"
import svg12 from "./icons/svgexport-12.svg"
import svg13 from "./icons/svgexport-13.svg"
import svg7 from "./icons/svgexport-7.svg"
import svg14 from "./icons/svgexport-14.svg"
import svg15 from "./icons/svgexport-15.svg"
function Card() {
    return (
    <div className="card">
        <div className="Upper-Card-Container">
            <div>
                Swap
            </div>
            <div>
                Trade tokens in an instant
            </div>
            <div className="Upper-Card-Icons">
                <div>
                <p>🎁</p>
                </div>
                <div>
                <img src={svg12} alt="svg12"/>
                </div>
                <div>
                <img src={svg13} alt="svg13"/>
                </div>
                <div>
                <img src={svg7} alt="svg7"/>
                </div>
                <div>
                <img src={svg14} alt="svg14"/>
                </div>
                <div>
                <img src={svg15} alt="svg15"/>
                </div>
                

            </div>
        </div>
    </div>
    )
}

export default Card
