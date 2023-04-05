import Button from "../../UI/Buttons/Button"
import "./Liquidity.css";
import ThirdRowLi from "./ThirdRow";
import coniglio from "./bunny.webp"

export const Liquidity = () => {
    return (
        <div className="container">
            <div className="bunnyCard">
                <h1>PancakeSwap v3 Migration</h1>
                <p>Migrate to continue farming CAKE rewards and earning trading fees</p>


            </div>
            <div className="bunnyLiquidBox">
                <img
                    src={coniglio}
                    className="bunnyLiquid"

                />
            </div>
            <div className="buttonLiquidity">
                <Button type={"btn"} img={"arrR"}>Proceed</Button>
                <Button type={"btn"} img={"arrR"}>Guide</Button>
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

    )

}