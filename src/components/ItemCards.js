// this item card used to print accordian body 

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemCards=({items})=>{
   // console.log(item);
    const dispatch=useDispatch()
    const handleAddItem=(item)=>
    {
        //dispatch action
        console.log(item)
        dispatch(addItem(item))//what is passed(here cart item) here it will go to reducer fun as action payload

    }
    return(<div>
    {items.map((item)=>(
        <div className="text-left p-2 m-2 border-indigo-200 border-b-2 h" key= {item.card.info.id}>
        <div className="flex p-2 justify-between w-12/12">
        <div className="py-2">
            <span className="text-md font-medium">{item.card.info.name}{" - "}</span>
            <span>₹ {(item.card.info.price)||(item.card.info.defaultPrice)/100} </span>
        </div>
        <div className="w-3/12 p-4 relative">
        <div className="absolute h-auto">
        <button className=" bg-black text-white p-1  shadow-lg mx-2" onClick={()=>handleAddItem(item)} >add +</button>
        </div>
        <img src={CDN_URL+ item.card.info.imageId} className="w-full "/> 
    </div>    
        </div>
        <p className="text-xs text-left ">  {item.card.info.description} 
        
     </p>
        </div>
    ))}
    </div>
    )
}
export default ItemCards;