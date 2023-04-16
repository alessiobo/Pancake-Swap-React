import Button from "../../UI/Buttons/Button";
import "./Liquidity.css";
import ThirdRowLi from "./ThirdRow";
import coniglio from "./bunny.webp";

export const Liquidity = () => {
  return (
    <div className="containerLiquid">
      <div className="liquidContent">
        <div className="liquidCardT">
          <div className="firstRowBu">
            <h1>PancakeSwap v3 Migration</h1>
          </div>
          <div className="secondRowBu">
            <p>
              Migrate to continue farming CAKE rewards and earning trading fees
            </p>
          </div>
          <div className="buttonLiquidity">
            <Button type={"btn"} img={"arrR"}>
              Proceed
            </Button>
            <Button type={"btn"} img={"arrR"}>
              Guide
            </Button>
          </div>
          <img src={coniglio} className="bunnyLiquid" />
        </div>
        <div></div>
        <div className="liquidityCard">
          <div className="firstRowLi">
            <h2>Your Liquidity</h2>
            <i class="gg-spinner"></i>
           
          </div>
          <div className="secondRowLi">
            <p>List of your liquidity positions</p>
          </div>
          <hr></hr>
          <ThirdRowLi />
          <div className="fourthRowLi">
            <p>No liquidity found.</p>
          </div>
          <div className="btnBottom">
          <Button type={"btnLiq"} img={"arrR"} >
              Add Liquidity
            </Button>
            </div>
        </div>
      </div>
    </div>
  );
};
