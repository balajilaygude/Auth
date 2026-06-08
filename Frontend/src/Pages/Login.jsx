import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { handleError, handleSuccess } from "../Utils";

export default function Login() {

    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:""
    })

    const Navigate=useNavigate()

    function handleChange(e){
        const {name,value}=e.target
        const copyLoginInfo={...loginInfo}
        copyLoginInfo[name]=value
        setLoginInfo(copyLoginInfo)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const {email,password}=loginInfo;
        if( !email || !password){
            return handleError("All fields are requierd")
        }


        try {
            const url="http://localhost:3000/auth/login";
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },body:JSON.stringify(loginInfo)
        });
        const result=await response.json();
        console.log(result)
        const {success,message,error,name,jwtToken}=result
        if(success){
            handleSuccess(message);
            localStorage.setItem("token",jwtToken);
            localStorage.setItem("name",name);
            setTimeout(()=>{
                Navigate("/home")
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
        <h2 className="text-4xl font-semibold my-5 text-white">Login</h2>
        <form className="flex flex-col w-4/5 " onSubmit={handleSubmit}>
            <input onChange={handleChange} value={loginInfo.email}
          className="mb-3 p-2 border-2 placeholder:text-white
           text-white outline-none border-white rounded-lg" type="email" name="email" placeholder="Email" />
          <input onChange={handleChange} value={loginInfo.password}
          className="mb-3 p-2 border-2 placeholder:text-white
           text-white outline-none border-white rounded-lg" type="password" name="password" placeholder="Password" />
            <button className="bg-white w-3/12 mb-2 mx-auto rounded-2xl h-12 cursor-pointer"> Login</button>
        </form>
        <p className="text-white">Don't Have an Account ? 
            <span className="cursor-pointer hover:text-pink-200"><Link to="/signup"> Sign Up</Link></span></p>
      </div>
      <ToastContainer />
    </div>
  );
}

