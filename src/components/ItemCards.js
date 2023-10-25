// this item card used to print accordian body 

import { CDN_URL } from "../utils/constant";

const ItemCards=({item})=>{
    console.log(item);
    return(<div>
    {item.map((item)=>(
        <div className="text-left p-2 m-2 border-indigo-200 border-b-2 h" key= {item.card.info.id}>
        <div className="flex p-2 justify-between w-12/12">



        <div className="py-2">
            <span className="text-md font-medium">{item.card.info.name}{" - "}</span>
            <span>₹ {(item.card.info.price)||(item.card.info.defaultPrice)/100} </span>
        </div>
        <div className="w-3/12 p-4 ">
        <div className="absolute">
        <button className=" bg-slate-200  shadow-lg mx-2" >add +</button>
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