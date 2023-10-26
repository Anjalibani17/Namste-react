import { useContext, useState } from "react";
import { LOGO_URLS } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnStatus from "../utils/useOnStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const status = useOnStatus();
    const {loggedInUser}=useContext(userContext); //we extacct data from usercontext file
    // console.log(loggedInUser)
    // console.log("refresh");
    /*suscribe to the store using selector 
    here cartItems will get the data of the store items 
    */
    
    const cartItems= useSelector((store)=>store.cart.items);
    console.log("cartItems",cartItems)
    return (
        <div className="flex justify-between bg-orange-300 shadow-lg rounded-lg sm:bg-orange-100, w-auto ">
            <div className="p-4 items-center ">
                <img className="w-40" src={LOGO_URLS} />
            </div>   
            <div >
                <ul className="flex p-4 m-4 cursor-pointer font-bold">
                { /*console.log(status)*/}
                
                    <li className="p-4  hover:bg-slate-200 rounded-md">Status:{status}</li>
                    <li className="p-4  hover:bg-slate-200 rounded-md"><Link to="/">Home</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/about">About Us</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/UserClass">User</Link></li>
                    <li className="p-4 hover:bg-slate-200 rounded-md"><Link to="/Grocery">Grocery</Link> </li>
                    <li className="p-4 hover:bg-slate-200 rounded-md font-bold ">
                    {/* cartitems lenght is items store length */}
                    <Link to="/Cart">
                    Cart({cartItems.length} items)</Link></li>
                  
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
                    <li className="p-4 hover:bg-slate-200 rounded-md">user:{loggedInUser} </li>
                
                </ul>
            </div>
        </div>
    );
};
export default Header;
