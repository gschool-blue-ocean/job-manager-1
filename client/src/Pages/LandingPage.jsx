import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col items-start justify-center justify-left mx-40">
          <div className="max-w-md space-y-6">
            <p className="text-center text-white">
              Welcome to our platform! Sign up as a student or an admin to get
              started.
            </p>
            <div className="space-y-4 text-2xl">
              <Link to="/studentsignup">

              <button  className="bg-blue-500 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md border border-blue-600 h-24 w-full">
                Student Signup
              </button>
              </Link>
              <Link to="/adminsignup">

              <button className="bg-green-500 mt-6 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-md border border-green-600 h-24 w-full">
                Admin Signup
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-1/2 h-1/2 ml-auto ">
          <img
            src="https://media.glassdoor.com/sqll/843406/hack-reactor-squarelogo-1427844676793.png"
            
            className="rounded-3xl pt-60 mx-60"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
