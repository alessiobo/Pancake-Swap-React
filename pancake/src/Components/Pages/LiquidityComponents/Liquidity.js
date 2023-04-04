import Button from "../../UI/Buttons/Button"
import "./Liquidity.css";
import coniglio from "./bunny.webp"

export const Liquidity = () => {
    return (
        <div className="container">
            <div className="BunnyCard">
                <h1>PancakeSwap v3 Migration</h1>
                <p>Migrate to continue farming CAKE rewards and earning trading fees</p>
                <img
                            src={coniglio}
                            className="bunnyLiquid"

                        />
                <div className="buttonLiquidity">
                    <Button type={"btn"} img={"arrR"}>Proceed</Button>
                    <Button type={"btn"} img={"arrR"}>Guide</Button>
                </div>



            </div>
            <div className="LiquidityCard">
                <h2>Your Liquidity</h2>
                <p>List of your liquidity positions</p>
            </div>
        </div>
    )

}