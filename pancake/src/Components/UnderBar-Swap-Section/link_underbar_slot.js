import { Link, useLocation } from "react-router-dom"

function Link_underbar_slot(props) {
    const location = useLocation()
    const slot = props.slot
    return (
            <div className={location.pathname === `/${slot}` ? "clicked_wrapper" : ""} >
                <Link to={`/${slot}`} className="underbar_link">
                    {slot}
                </Link>
                <div className="colored_bar" />
            </div>
    )
}
export default Link_underbar_slot