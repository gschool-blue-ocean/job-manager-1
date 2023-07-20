import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export default function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmitLoginForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "/api/login",
        loginForm
      );
      console.log(response);

      if(response.status !== 200) {
        throw new Error("Something went wrong");
      }

      localStorage.setItem("token", JSON.stringify(response.data.token));

      console.log(response.data.userInfo[0].is_admin)
      if(response.data.userInfo[0].is_admin){
       return navigate("/adminhome");
      }

      navigate("/studenthome");
        

    } catch (error) {
      console.log(error);
    }
  };
  console.log("loginForm", loginForm);

  return (
    <div className="bg-gray-700 relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white underline">
          Welcome Back 😁!
        </h1>
        <form onSubmit={(e) => handleSubmitLoginForm(e)} className="mt-6">
          <div className="mb-2">
            
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              value={loginForm.email}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              value={loginForm.password}
            />
          </div>
          <a href="#" className="text-xs  text-white hover:underline">
            Forget Password?
          </a>
          
            <button className="w-full mt-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login 
            </button>
        </form>
      </div>
    </div>
  );
}
