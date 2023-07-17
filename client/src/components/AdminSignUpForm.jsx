import React, { useState } from "react";
import axios from "axios";

export default function AdminSignUpForm() {
  const [adminForm, setAdminForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmitAdminForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/api/signup/admin",
        adminForm
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("adminForm", adminForm);

  return (
    <div className="bg-gray-700 relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white underline">
          Admin Sign up
        </h1>
        <form onSubmit={handleSubmitAdminForm} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white"
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
              value={adminForm.name}
            />
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
              className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
              value={adminForm.email}
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
              className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
              value={adminForm.password}
            />
          </div>
          <a href="#" className="text-xs text-white hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
