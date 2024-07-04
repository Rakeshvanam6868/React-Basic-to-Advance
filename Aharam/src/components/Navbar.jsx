import logo from "../../assets/logo.png";
import { nav_Icon } from "../utils/constants";
const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
                <h1>AHARAM</h1>
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="nav-icon">
                <img src={nav_Icon} alt="" className="icon-img" />
            </div>
        </div>
    )
}

export default Navbar;