import Logo from "./Logo"
import Menu from "./Menu"

function Header(){
    return(
        <div className="navbar">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header