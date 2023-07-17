import React from "react";
import LandingPage from "../Pages/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSignUp from "../Pages/StudentSignUp.jsx";
import AdminSignUp from "../Pages/AdminSignUp.jsx";
import AdminHomePage from "../Pages/AdminHome.jsx";
import StudentHomePage from "../Pages/StudentHome.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminhome" element={<AdminHomePage />} />
          <Route path="/studenthome" element={<StudentHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
