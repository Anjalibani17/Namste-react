import { useState } from "react";
import { LOGO_URLS } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnStatus from "../utils/useOnStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const status = useOnStatus();
    console.log("refresh");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URLS} />
            </div>
         
            <div className="nav-items">
          
        
                <ul>
                { console.log(status)}
                    <li>Status:{status}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/UserClass">User</Link></li>
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
