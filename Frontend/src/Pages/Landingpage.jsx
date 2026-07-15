import React from 'react'
import { SiAuth0 } from "react-icons/si";
import { GiSolidLeaf } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6";
import Intro from '../components/Intro';
import { Link } from 'react-router-dom';

export default function Landingpage() {
  return (
    <div className='w-full'>
      <div className='mx-2 sm:my-4 my-2 h-16 rounded-2xl flex justify-between px-3 sm:px-10 shadow-2xl shadow-sky-700'>
        <div className='flex justify-center sm:gap-2 gap-1  items-center text-2xl font-semibold text-sky-500
         hover:scale-110'>
            <GiSolidLeaf />
            <h1>Auth</h1>
        </div>
        <div className='flex justify-center gap-2 md:pr-20  items-center  font-semibold text-sky-500'>
            <Link to={"/signup"}>
            <p className='bg-sky-500 px-3 py-1 text-white rounded-md hover:bg-white border hover:text-sky-500 cursor-pointer'>Signup </p></Link>
             <Link to={"/login"}>
            <p className='bg-sky-500 px-3 py-1 text-white rounded-md hover:bg-white border hover:text-sky-500 cursor-pointer'>Login </p></Link>
        </div>
      </div>
      <Intro/>
    </div>
  )
}
