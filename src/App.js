import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserClass from "./components/UserClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/> 
             {/* here it will render children and replace outlet with child */}
        </div>
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
            }
        ]
        
    },

]);

root.render(<RouterProvider router={appRouter} />);
