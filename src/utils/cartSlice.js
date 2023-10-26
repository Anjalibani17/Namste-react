import { createSlice } from "@reduxjs/toolkit";
//it si function
const cartSlice = createSlice({
    //it takes configuration like this....
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        /*it is obj which contain fun according  to each action 
        here add item is action and reducer is fun which take two para state and action
        so here state is [](items) and  it modify state based on action items is array
        */
        addItem:(state,action)=>{
            //mutating state here direct
            state.items.push(action.payload);
        },
        //another reducer here there is no need of action
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            //for clear all cart items we set lenght 0
            state.items.length=0; //[]
        }
    }

})
   //we export action and reducer 
   export const { addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;