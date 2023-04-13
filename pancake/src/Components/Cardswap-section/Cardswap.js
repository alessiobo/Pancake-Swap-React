import "./cardswap.css"
import Card from "./Card/Card"
import Image_Text_Wrapper from "./Image_Text_Wrapper/Image_Text_Wrapper"
function Cardswap() {
    return (
        <div className="card_swap">
            <div className="element_wrapper">
                <Card />
                <Image_Text_Wrapper />
            </div>
        </div>
    )
}

export default Cardswap