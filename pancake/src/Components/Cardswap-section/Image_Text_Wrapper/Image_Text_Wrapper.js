import help_img from "./help.png"
import "./Image_Text_Wrapper.css"
import tail_purple from "./tail_purple.svg"
function Image_text_Wrapper() {
    return (
        <div className="Image_Text_Wrapper">
            <div>
                <a href="www.google.com" className="Bridge_assets">Bridge assets to BNB Chain</a>
            </div>
            <div>
            <a className="need_help btn" href="google">Need Help?</a>
            <img src={tail_purple}></img>
            <img src={help_img} alt="help.png"></img>
            </div>
        </div>
    )
}

export default Image_text_Wrapper