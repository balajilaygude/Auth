import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RefreshHandler({setIsAuth}) {

    const location=useLocation();
    const Navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setIsAuth(true);
            if(location.pathname==="/" ||
                location.pathname==="/signup"  ||
                location.pathname==="/login"
            ){
                Navigate("/home",{replace:false})
            }
        }
    },[location,Navigate,setIsAuth])

  return (
    null
  )
}
