import "./card.css"
import svg12 from "./icons/svgexport-12.svg"
import svg13 from "./icons/svgexport-13.svg"
import svg7 from "./icons/svgexport-7.svg"
import svg14 from "./icons/svgexport-14.svg"
import svg15 from "./icons/svgexport-15.svg"
import bnb_golden from "./icons/bnb-golden.svg"
import purple_input_arrow from "./icons/purple_input_arrow.svg"
import green_arrow_bottom from "./icons/green_arrow_bottom.svg"
import rabbit_blue_icon from "./icons/rabbit_blue_icon.svg"
import copy_paste_icon from "./icons/copy_paste_icon.svg"
import pen_green from "./icons/pen_green.svg"
import question_mark_white from "./icons/question_mark_white.svg"

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
                        <img src={svg12} alt="svg12" />
                    </div>
                    <div>
                        <img src={svg13} alt="svg13" />
                    </div>
                    <div>
                        <img src={svg7} alt="svg7" />
                    </div>
                    <div>
                        <img src={svg14} alt="svg14" />
                    </div>
                    <div>
                        <img src={svg15} alt="svg15" />
                    </div>
                </div>
            </div>
            <div className="Lower-Card-Container">
                <div>
                    <div className="upper_input_wrapper">
                        <img src={bnb_golden} alt="bnb_golden" id="bnb_golden" />
                        <p>BNB</p>
                        <img src={purple_input_arrow} alt="purple_input_arrow" id="purple_input_arrow" />
                    </div>
                </div>
                <div id="upper_input_text_wrapper">
                    <input type="text" placeholder="0.0"/>
                </div>
                <div id="arrow_down_wrapper">
                    <button id="arrow_down"><img src={green_arrow_bottom}></img></button>
                </div>
                <div>
                    <div id="lower_input_wrapper">
                        <img src={rabbit_blue_icon} alt="rabbit_blue_icon"></img>
                        <p>CAKE</p>
                        <img src={purple_input_arrow} alt="purple_input_arrow"></img>
                        <img src={copy_paste_icon} alt="copy_paste_icon"></img>
                    </div>
                </div>
                <div>
                    <input type="text" id="lower_input_text" placeholder="0.0"/>
                </div>
                <div id="low_risk_wrapper">
                    <button className="btn lowrisk">Low Risk<img src={question_mark_white}  alt="question mark white"></img></button>
                </div>
                <div className="slippage_tolerance_wrapper">
                    <div>Slippage Tolerance <img src={pen_green} alt="pen_green"></img></div>
                    
                    <div id="p_percent">
                        <p>0.5%</p>
                    </div>
                    </div>
                
                <div>
                    <button className="btn connect_wallet">Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Card
