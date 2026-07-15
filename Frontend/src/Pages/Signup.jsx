import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { handleError, handleSuccess } from "../Utils";

export default function Signup({setIsAuth}) {

    const [signupInfo,setSignupInfo]=useState({
        name:"",
        email:"",
        password:""
    })
    const[loading,setLoading]=useState(false)

    const Navigate=useNavigate()

    function handleChange(e){
        const {name,value}=e.target
        const copySignupInfo={...signupInfo}
        copySignupInfo[name]=value
        setSignupInfo(copySignupInfo)
    }
    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        const {name,email,password}=signupInfo;
        if(!name || !email || !password){
            setLoading(false)
            return handleError("All fields are requierd")
        }
        
        
        try {
            const url="https://auth-backend-psi-liart.vercel.app/auth/signup";
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify(signupInfo)
            });
            const result=await response.json();
            const {success,message,error,name,jwtToken}=result
            if(success){
                handleSuccess(message);
                localStorage.setItem("token",jwtToken);
                localStorage.setItem("name",name);
                setTimeout(()=>{
                    setIsAuth(true);  
                    Navigate("/home")
                    setLoading(false)
                },1000)
            }else if(error){
                const detail=error?.details[0].message
                handleError(detail)
                setLoading(false)
            }
            else if(!success){
                const detail=message
                handleError(detail)
                setLoading(false)
            }
        } catch (error) {
            handleError(error) 
            setLoading(false)
        }
    }
  return (
    <div className="min-w-screen min-h-screen bg-sky-100 flex flex-col justify-center items-center">
      <div className="lg:w-3/5 w-4/5 h-92 bg-white flex justify-center items-center flex-col rounded-2xl shadow-2xl shadow-sky-500">
        <h2 className="text-4xl font-semibold my-5 text-sky-500">Sign up</h2>
        <form className="flex flex-col w-4/5 " onSubmit={handleSubmit}>
          <input onChange={handleChange} value={signupInfo.name}
          className="mb-3 p-2 border-2 placeholder:text-sky-500
           text-sky-500 outline-sky-600 border-sky-500 rounded-lg" name="name" placeholder="Name" autoFocus />
          <input onChange={handleChange} value={signupInfo.email}
          className="mb-3 p-2 border-2 placeholder:text-sky-500
           text-sky-500 outline-sky-600 border-sky-500 rounded-lg" type="email" name="email" placeholder="Email" />
          <input onChange={handleChange} value={signupInfo.password}
          className="mb-3 p-2 border-2 placeholder:text-sky-500
           text-sky-500 outline-sky-600 border-sky-500 rounded-lg" type="password" name="password" placeholder="Password" />
            <button className="bg-sky-500 w-3/12 mb-2 mx-auto rounded-2xl px-3 py-1 text-white hover:bg-white hover:text-sky-500 border border-sky-500 h-12 cursor-pointer">{loading?"Loading..": "Sign Up"}</button>
        </form>
        <p className="text-sky-500">Already Hve an Account ? 
            <span className="cursor-pointer hover:text-sky-800"><Link to="/login"> Login</Link></span></p>
      </div>
      <ToastContainer />
    </div>
  );
}
