import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function StudentSignUpForm() {
  const [studentForm, setStudentForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmitStudentForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "/api/signup/student",
        studentForm
      );
      console.log(response);

        if(response.status !== 200) {
            throw new Error("Something went wrong");
        }

        navigate("/studenthome");
    } catch (error) {
      console.log(error);
    }
  };
  console.log("studentForm", studentForm);

  return (

    <div className="bg-gray-700 relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white underline">
          Student Sign up
        </h1>
        <form onSubmit={handleSubmitStudentForm} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white"
            >
              Name
            </label>
            <input
              type="name"

            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) =>
                setStudentForm({ ...studentForm, name: e.target.value })
              }
              value={studentForm.name}
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
              onChange={(e) =>
                setStudentForm({ ...studentForm, email: e.target.value })
              }
              value={studentForm.email}
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
              onChange={(e) =>
                setStudentForm({ ...studentForm, password: e.target.value })
              }
              value={studentForm.password}
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
