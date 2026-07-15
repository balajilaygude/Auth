import React from "react";
import image1 from "../assets/login.png"
import image2 from "../assets/signup.png"


export default function Intro() {
  return (
    <div className="w-full p-2 mt-5 flex md:flex-row flex-col sm:gap-2 gap-10">
      <div className="md:w-3/6 w-full  pt-10 md:min-h-[calc(100vh-130px)] rounded-2xl flex  items-center flex-col px-5 gap-4 shadow-2xl shadow-sky-700 ">
        <h1 className="text-2xl text-sky-500  font-semibold">
          Secure Authentication for Modern Web Applications
        </h1>
        <p className="lg:px-8">
          A full-stack <span className="text-sky-600">MERN application</span>{" "}
          that delivers secure user authentication, protected dashboard access.
          From registration to login, every step follows modern security
          standards to keep user data protected.
        </p>
        <p className="lg:px-8">
          Powered by React, Node.js, Express, MongoDB Atlas, JWT, bcrypt, and
          Tailwind CSS, this project showcases best practices in authentication,
          authorization, protected routing, API security, and responsive
          full-stack application development.
        </p>
        <h3 className="lg:px-8 self-start text-xl text-sky-500 font-semibold ">Key Features</h3>
        <ul className="lg:px-8 self-start">
          <li>🔐 JWT Authentication & Authorization</li>
          <li>👤 User Registration & Login</li>
          <li>🛡️ Protected Dashboard</li>
          <li>🔒 bcrypt Password Hashing</li>
          <li>✅ Joi Form Validation</li>
          <li>📦 Secure REST APIs</li>
          <li>⚡ Fast React Frontend</li>
          <li>📱 Fully Responsive Design</li>
        </ul>
        <a href="https://www.linkedin.com/in/balajilaygude" target="_blank" className="pb-5">Created By: <span className="text-sky-600 ">Balaji Laygude</span></a>
      </div>
      <div className="md:w-3/6 w-full  pt-10 md:min-h-[calc(100vh-130px)] rounded-2xl flex  items-center flex-col px-5 gap-4 shadow-2xl shadow-sky-700 pb-5 ">
      <h1 className="text-2xl text-sky-500  font-semibold">Demo Images</h1>
        <img src={image1} alt="" className="w-9/10 h-56 rounded-2xl hover:scale-105"/>
        <img src={image2} alt="" className="w-9/10 h-56 rounded-2xl hover:scale-105"/>
      </div>
    </div>
  );
}
