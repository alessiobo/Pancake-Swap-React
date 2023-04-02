import React from "react"
import "animate.css";
import "./orange-section.css";
import svg30 from "./icons/svgexport-30.svg"
import svg32 from "./icons/svgexport-32.svg"
import img_2 from "./imgs/2.webp"
import img_4 from "./imgs/4.webp"
import img_6 from "./imgs/6@2x.webp"
import ball7 from "./imgs/7@2x.webp"
import ball9 from "./imgs/9@2x.webp"
import bottom_left from "./imgs/bottom-left@2x.webp"
import green from "./imgs/green@2x.webp"
import red from "./imgs/red@2x.webp"
import top_right from "./imgs/top-right@2x.webp"
function OrangeSection() {
    return (
        <div>
            <section className="orange-section">
                <div className="orange-section-container">
                    <div className="section-wrapper">
                        <div className="top-text">
                            <h2><span>Win</span> millions in prizes</h2>
                            <div>
                                <h3>Provably fair, on-chain games.</h3>

                                <div>
                                    <h3>win big with PancakeSwap.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="left-card">
                                <div className="icon-wrapper">
                                    <img
                                        src={svg30}
                                        alt="icon"
                                    />
                                </div>
                                <div className="text-card-wrapper">
                                    <h4>Predition</h4>
                                    <h2>$1.1 billion</h2>
                                    <h4>in BNB + cake won so far</h4>
                                    <h3>Predict the navbar-price trend of BNB or CAKE to win</h3>

                                </div>
                                <div className="button-orange-card">
                                   
                                        <button className="btn large">Play</button>
                                </div>
                            </div>
                            <div className="right-card">
                                <div className="icon-wrapper">
                                    <img
                                        src={svg32}
                                        alt="ticket"
                                    />
                                </div>
                                <div className="text-card-wrapper">
                                    <h4>Lottery</h4>
                                    <h2>$87,302</h2>
                                    <h4>in CAKE prizes this round</h4>
                                    <h3>Buy tickets with CAKE, win CAKE if your numbers match</h3>
                                </div>
                                <div className="button-orange-card">
                                        <button className="btn large">Buy Tickets</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-left-wrapper">
                    <img
                        src={bottom_left}
                        alt="bottom left"
                    />

                    <img src={green}
                        alt="green" />

                    <img src={red}
                    alt="red" />

                    <img
                        src={top_right}
                        alt="top right"
                    />
                </div>
                <div className="top-right-wrapper">
                    <img src={img_2} alt="ball 2" />

                    <img src={img_4} alt="ball 4" />

                    <img src={img_6} alt="ball 6" />

                    <img
                        className="ball7"
                        src={ball7}
                        alt="ball 7"
                    />

                    <img src={ball9} 
                        alt="ball 9"
                    />
                </div>
            </section>
        </div>
    );
}

export default OrangeSection