import Footerlogo from "./Footerlogo"
import Footermenu from "./Footermenu"
import Copyright from "./Copyright"

function Footer(){
    return(
        <div className="wrapper">
            <Footerlogo/>
            <Footermenu/>
            <Copyright/>
        </div>
    )
}

export default Footer