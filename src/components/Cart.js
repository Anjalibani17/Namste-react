import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems= useSelector((store)=>store.cart.items);
    console.log("abc",cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
      

    }
    return(<>

<div className="text-center m-4p-4  ">
<h1 className="font-bold m-auto text-xl">cart</h1>
<div className="w-6/12 m-auto ">
<button className="bg-green-300 rounded-lg p-2 m-2" onClick={handleClearCart}>clear cart</button>
{cartItems.length==0?<h1>cart is empty add items </h1>:
<ItemCards items={cartItems}/>}
</div>
</div>

    </>);
}
export default Cart;