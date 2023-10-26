import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore({
    //modify store it contain reducer which is usde to modify store it is combination of slice's reducer

    //here store's reducer contain differnt slice's reducer
    reducer:{
        cart:cartReducer,
        /*if there is multiple slice so we import user slice like
        ex- 
        user:userReducer
        */
    }
});
export default appStore;