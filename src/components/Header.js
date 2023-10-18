import { useState } from "react";
import { LOGO_URLS } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnStatus from "../utils/useOnStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const status = useOnStatus();
    // console.log("refresh");
    return (
        <div className="flex justify-between bg-orange-300 shadow-lg rounded-lg ">
            <div className="p-4 items-center ">
                <img className="w-40" src={LOGO_URLS} />
            </div>   
            <div >
                <ul className="flex p-4 m-4 cursor-pointer font-bold">
                { console.log(status)}
                
                    <li className="p-4  hover:bg-slate-200 rounded-md">Status:{status}</li>
                    <li className="p-4  hover:bg-slate-200 rounded-md"><Link to="/">Home</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/about">About Us</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/UserClass">User</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/Grocery">Grocery</Link> </li>
                    <button
                        className="p-4 hover:bg-green-200 rounded-md"
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
