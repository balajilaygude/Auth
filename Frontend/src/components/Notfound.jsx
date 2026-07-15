import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className=' w-4/5 h-56 bg-gray-100 rounded-2xl flex flex-col justify-center items-center px-5 text-center gap-4 shadow-2xl shadow-sky-700'>
            <h1 className="text-2xl text-sky-500  font-semibold">404 Page Not Found</h1>
            <p >Page does not exist or You are not allow to access</p>
            <Link to="/">
            <p className='bg-sky-500 px-3 py-1 text-white rounded-md hover:bg-white border hover:text-sky-500 cursor-pointer'>Go To Home</p></Link>
      </div>
    </div>
  )
}
