import { useState } from "react";
import { LOGO_URLS } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    console.log("refresh");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URLS} />
            </div>
         
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            btnName == "Log In"
                                ? setBtnName("Log Out")
                                : setBtnName("Log In");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;
