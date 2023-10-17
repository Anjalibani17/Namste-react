import { useEffect } from "react";
import Header from "./Header";
import UserClass from "./UserClass";


const About=()=>
{
    useEffect(()=>{

        console.log("useEffect");
        return()=>{
            console.log("useEffect unmount")
        }
        
    },[])
    
    return(<div>
       
        <p>this is about page</p>
        <UserClass name={"anjali"}/>
    </div>)

}
export default About;