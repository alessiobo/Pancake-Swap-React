import React from "react"
import "animate.css";
import Button from "../UI/Buttons/Button";
import "./orange-section.css";

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
                                    <h3 style="margin-bottom: 40px">win big with PancakeSwap.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="left-card">
                                <div className="icon-wrapper">
                                    <img
                                        src="../Pancake/Components/orange-section/icons/svgexport-30.svg"
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
                                    <link to="https://www.youtube.com/watch?v=bUcG7vd_7aQ"
                                        className="link_button">
                                        <button className="btn">Play</button></link>
                                </div>
                            </div>
                            <div className="right-card">
                                <div className="icon-wrapper">
                                    <img
                                        src="../Pancake/Components/orange-section/icons/svgexport-32.svg"
                                    />
                                </div>
                                <div className="text-card-wrapper">
                                    <h4>Lottery</h4>
                                    <h2>$87,302</h2>
                                    <h4>in CAKE prizes this round</h4>
                                    <h3>Buy tickets with CAKE, win CAKE if your numbers match</h3>
                                </div>
                                <div className="button-orange-card">
                                    <link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                        target="_blank"
                                        className="link_button"
                                    >
                                        <button className="btn">Buy Tickets</button>
                                    </link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-left-wrapper">
                    <img
                        src="../Pancake/Components/orange-section/imgs/bottom-left@2x.webp"
                    />

                    <img src="../Pancake/Components/orange-section/imgs/green@2x.webp" />

                    <img src="../Pancake/Components/orange-section/imgs/red@2x.webp" />

                    <img
                        src="../Pancake/Components/orange-section/imgs/top-right@2x.webp"
                    />
                </div>
                <div className="top-right-wrapper">
                    <img src="../Pancake/Components/orange-section/imgs/2.webp" />

                    <img src="../Pancake/Components/orange-section/imgs/4.webp" />

                    <img src="../Pancake/Components/orange-section/imgs/6@2x.webp" />

                    <img
                        className="ball7"
                        src="../Pancake/Components/orange-section/imgs/7@2x.webp"
                    />

                    <img src="../Pancake/Components/orange-section/imgs/9@2x.webp" />
                </div>
            </section>
        </div>
    );
}

export default OrangeSection