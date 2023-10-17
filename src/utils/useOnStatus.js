import React, { useEffect, useState } from "react";
const useOnStatus =()=>{
    const [status,setStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        })

    },[])
    return status;


}
export default useOnStatus;