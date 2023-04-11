import Cardswap from "../Cardswap-section/Cardswap"

import Underbar from "../UnderBar-Swap-Section/underbar"
function SwapPage() {
    return (
        <div className="swappage">
            <Underbar slot1="Swap" slot2="Liquidity" slot3=""/>
            <Cardswap />
        </div>
    )
}

export default SwapPage