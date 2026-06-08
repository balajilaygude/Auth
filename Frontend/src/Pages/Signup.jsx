import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { handleError, handleSuccess } from "../Utils";

export default function Signup() {

    const [signupInfo,setSignupInfo]=useState({
        name:"",
        email:"",
        password:""
    })

    const Navigate=useNavigate()

    function handleChange(e){
        const {name,value}=e.target
        const copySignupInfo={...signupInfo}
        copySignupInfo[name]=value
        setSignupInfo(copySignupInfo)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const {name,email,password}=signupInfo;
        if(!name || !email || !password){
            return handleError("All fields are requierd")
        }


        try {
            const url="http://localhost:3000/auth/signup";
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify(signupInfo)
        });
        const result=await response.json();
        console.log(result)
        const {success,message,error}=result
        if(success){
            handleSuccess(message);
            setTimeout(()=>{
                Navigate("/login")
            },1000)
        }else if(error){
            const detail=error?.details[0].message
            handleError(detail)
        }
        else if(!success){
            const detail=error?.details[0].message
            handleError(detail)
        }

        } catch (error) {
           handleError(error) 
        }
    }
  return (
    <div className="min-w-screen min-h-screen bg-pink-200 flex flex-col justify-center items-center">
      <div className="lg:w-3/5 w-4/5 h-92 bg-pink-500 flex justify-center items-center flex-col rounded-2xl shadow-2xl shadow-pink-800-">
        <h2 className="text-4xl font-semibold my-5 text-white">Sign up</h2>
        <form className="flex flex-col w-4/5 " onSubmit={handleSubmit}>
          <input onChange={handleChange} value={signupInfo.name}
          className="mb-3 p-2 border-2 placeholder:text-white
           text-white outline-none border-white rounded-lg" type="text" name="name" placeholder="Name" autoFocus />
          <input onChange={handleChange} value={signupInfo.email}
          className="mb-3 p-2 border-2 placeholder:text-white
           text-white outline-none border-white rounded-lg" type="email" name="email" placeholder="Email" />
          <input onChange={handleChange} value={signupInfo.password}
          className="mb-3 p-2 border-2 placeholder:text-white
           text-white outline-none border-white rounded-lg" type="password" name="password" placeholder="Password" />
            <button className="bg-white w-3/12 mb-1 mx-auto rounded-2xl h-12 cursor-pointer"> Sign Up</button>
        </form>
        <p className="text-white">Already Hve an Account ? 
            <span className="cursor-pointer hover:text-pink-200"><Link to="/login"> Login</Link></span></p>
      </div>
      <ToastContainer />
    </div>
  );
}
