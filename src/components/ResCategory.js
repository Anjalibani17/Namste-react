import { useState } from "react";
import ItemCards from "./ItemCards.js";


//category vise accordian menu
const ResCategory =({data,showItem,setShowIndex})=>
{  
    const handleClick=()=>{
        //IT is used to hide and show accordian body
        setShowIndex();
    }
    return(<div className="text-center">
    {/* accordina header */}

    <div className=" bg-gray-100 shadow-lg p-4 w-6/12 m-auto  shadow-md">
   <div className="flex justify-between font-bold" onClick={handleClick}>
    <span>
    {data.title}
    ({data.itemCards.length})
    </span>
    <span >🔽</span>
    </div>
    <div>
    {/* this item card used to print accordian body */}
       {showItem && <ItemCards className=" hover:bg-orange-300" item={data.itemCards}/>}
    </div>
    
    </div>
        {/* <div>ResCategory</div> */}
        {/* accordian body  */}
        

    </div>);


}
export default ResCategory;