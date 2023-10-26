import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserClass from "./components/UserClass";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(()=>import("./components/Grocery")); //lazy loading
const AppLayout = () => {
    const [userName,setUserName]=useState();
  const{loggedInUser}=useContext(userContext);
    // useEffect(()=>{
    //     const data={
    //         name:"anjali",
    //     }
    //     setUserName(data.name)
        
    // },[])
    
    return (
        /* here we are wrapping redux store into app if we want to provide small portiono of 
        app uses store so we wrap that component inside provider */
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userName,setUserName}}>
        {/* here i'm passing setusername fun to body  */}
        <div className="w-[100%]">
            <Header />
            <Outlet/> 
             {/* here it will render children and replace outlet with child */}
        </div>
        </userContext.Provider>
        </Provider>
    );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>, //according to path it will render childern inside applayout header compo.
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/Restaurant/:resId",
                element:<ResMenu/>
            },
            {
                path:"/UserClass",
                element:<UserClass/>
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h2>loading...</h2>}><Grocery/></Suspense>
            },
            {
                path:"/Cart",
                element:<Cart/>
            }
        ]
        
    },

]);

root.render(<RouterProvider router={appRouter} />);
