import Button from "../../UI/Buttons/Button"
import "./Liquidity.css";
import ThirdRowLi from "./ThirdRow";
import coniglio from "./bunny.webp"

export const Liquidity = () => {
    return (
        <div className="container">
            <div className="bunnyContent">
                <div className="bunnyCard">
                    <div className="firstRowBu">
                    <h1>PancakeSwap v3 Migration</h1>
                    </div>
                    <div className="secondRowLi">
                    <p>Migrate to continue farming CAKE rewards and earning trading fees</p>
                    </div>
                    <div className="buttonLiquidity">
                    <Button type={"btn"} img={"arrR"}>Proceed</Button>
                    <Button type={"btn"} img={"arrR"}>Guide</Button>
                </div>
                <img
                        src={coniglio}
                        className="bunnyLiquid"

                    />
                </div>
               
                
                <div className="liquidityCard">
                    <div className="firstRowLi">
                        <h2>Your Liquidity</h2>
                        <p className="firstRowP">icona</p>
                    </div>
                    <div className="secondRowLi">
                        <p>List of your liquidity positions</p>
                    </div>
                    <hr></hr>
                    <ThirdRowLi />
                    <div className="fourthRowLi">
                        <h1>No liquidity found.</h1>
                    </div>
                </div>


            </div>
        </div>

    )

}