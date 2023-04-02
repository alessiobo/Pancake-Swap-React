import "./buyCake.css";
import bottomR2 from "./images/bottom-right@2x.webp";
import topR2 from "./images/top-right@2x.webp";
import coin from "./images/coin@2x.webp";
import topL2 from "./images/top-left@2x.webp";
import topLeft1 from "./images/top-left-1.webp";
import topLeft2 from "./images/top-left-2.webp";
import topLeft3 from "./images/top-left-3.webp";

import bottomRight1 from "./images/bottom-right-1.webp";
import bottomRight2 from "./images/bottom-right-2.webp";
import bottomRight3 from "./images/bottom-right-3.webp";



const BuyCake = () => {
    return (
        <section className="buyCake-section">
            <div className="buyCake-wrapper">
                <div className="buyCake-top">
                    <div className="buyCake-textBox">
                        <h3 className="buyCake-smallTitle">
                            <span className="buyCake-divColor">CAKE</span>
                            <div className="buyCake-div1">makes our world</div>
                            <div className="buyCake-mini">go round</div>
                        </h3>
                        <p className="buyCake-paragraphTop">
                            CAKE token is at the heart of the PancakeSwap ecosyst.<br /> Buy it,
                            win it, farm it, spend it, stake it... heck, you can even <br /> vote
                            with it!
                        </p>
                        <div className="buyCake-link">
                            <a href="" className="buyCake-link"
                            ><button className="btn">Buy CAKE</button>
                            </a>
                            <a href="" className="buyCake-link buyCake-aColor">Learn</a>
                        </div>
                    </div>
                    <div className="buyCake-animationBox Buycake-and-pancakes">
                        <img
                            src={bottomR2}
                            className="img-anim buyAnimation Buypancake"

                        />
                        <img
                            src={topR2}
                            className="img-anim buyAnimation Buypancake"

                        />
                        <img
                            src={coin}
                            className="img-anim buyAnimation Buypancake"

                        />
                        <img
                            src={topL2}
                            className="img-anim buyAnimation Buypancake"

                        />
                    </div>
                </div>
                <div className="buyCake-data">
                    <div className="buyCake-dataCont1">
                        <p className="buyCake-paragraph">Circulating Supply</p>
                        <p className="buyCake-big-data">145,764,388</p>
                    </div>
                    <div className="buyCake-dataCont2">
                        <p className="buyCake-paragraph">Market cap</p>
                        <p className="buyCake-big-data">$570 million</p>
                    </div>
                    <div className="buyCake-dataCont3">
                        <p className="buyCake-paragraph">Burned to date</p>
                        <p className="buyCake-big-data">737,187,243</p>
                    </div>
                    <div className="buyCake-dataCont4">
                        <p className="buyCake-paragraph">Burned to date</p>
                        <p className="buyCake-big-data">646,943,269</p>
                    </div>
                    <div className="buyCake-dataCont5">
                        <p className="buyCake-paragraph">Max Supply</p>
                        <p className="buyCake-big-data">750,000,000</p>
                    </div>
                    <div className="buyCake-dataCont6">
                        <p className="buyCake-paragraph">Current emissions</p>
                        <p className="buyCake-big-data">11.16/block</p>
                    </div>
                </div>
            </div>
            <div className="buyCake-purpleSection">
          <div className="purple-container">
            <div className="purple-animationBoxTop">
              <img
                src={topLeft1}
                className="img-anim buyAnimation Buypancake"
                
              />
              <img
                src={topLeft2}
                className="img-anim buyAnimation Buypancake"
                
              />
              <img
                src={topLeft3}
                className="img-anim buyAnimation Buypancake"
               
              />
            </div>
            <div className="purple-texBox">
              <h3 className="purple-h3">Start in seconds.</h3>
              <p className="purple-p">
                Connect your crypto wallet to start using the app in seconds.
              </p>
              <p className="purple-p">No registration needed.</p>
              <div className="purple-linkContainer">
                <a
                  className="buyCake-link buyCake-aColor"
                  href="https://www.google.it/"
                  >Learn how to start
                </a>
                <button
                 
                 className="btn buyCake-btn"
                  type="submit"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="purple-animationBoxBottom">
              <img
                src={bottomRight1}
                className="img-anim buyAnimation Buypancake"
                
              />
              <img
                src={bottomRight2}
                className="img-anim buyAnimation Buypancake"
              
              />
              <img
                src={bottomRight3}
                className="img-anim buyAnimation Buypancake"
           
              />
            </div>
          </div>
        </div>
            
        </section>
    )
}
export default BuyCake