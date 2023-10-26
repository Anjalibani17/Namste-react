import { useEffect } from "react";
import Header from "./Header";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";




const About=()=>
{
   
    useEffect(()=>{

        console.log("useEffect");
        return()=>{
            console.log("useEffect unmount")
        }
        
    },[])
    
    return(<div>
{/* in class based componenent .consumer is used for usecontext */}
       
        <p>this is about page</p>
        <div>
            loggin:
            <userContext.Consumer>
        {({loggedInUser})=>{
            console.log("user:",loggedInUser);
            return <h2 className="text-lg font-bold">user:{loggedInUser}</h2>

        }
    
        }
       </userContext.Consumer>
        </div>
        <UserClass name={"anjali"}/>
    </div>)

}
export default About;