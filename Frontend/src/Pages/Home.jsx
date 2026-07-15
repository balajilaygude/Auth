import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../Utils";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [logUser, setLogUser] = useState("");
  const [products, setProducts] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    setLogUser(localStorage.getItem("name"));
  }, []);

  function handleLogout(e) {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    handleSuccess("user Logout ...");
    setTimeout(() => {
      Navigate("/");
    }, 1000);
  }

  async function fetchProducts() {
    try {
      const url = "https://auth-backend-psi-liart.vercel.app/products";
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      handleError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-sky-100 flex flex-col justify-center items-center">
      <div className="lg:w-3/5 w-4/5 h-92 bg-white flex justify-center items-center flex-col rounded-2xl shadow-2xl shadow-sky-500">
        <h1 className="text-4xl font-semibold my-5 text-sky-500">Welcome {logUser}</h1>
        <button onClick={handleLogout} 
        className="bg-sky-500 w-3/12 mb-2 mx-auto rounded-2xl px-3 py-1 text-white hover:bg-white hover:text-sky-500 border border-sky-500 h-12 cursor-pointer">Logout</button>
        <div className="my-5 text-sky-500 flex gap-2">
          {products &&
            products?.map((item, index) => (
              <ul key={index} className="w-28 h-28 p-2 border border-sky-200">
                {item.name}  :  {item.price}$
              </ul>
            ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
