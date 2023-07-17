import React from "react";
import StudentSignUpForm from "../components/StudentSignUpForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StudentSignUp() {
  return (
    <div className="bg-gray-900">
      <Header />
      <StudentSignUpForm />
      <Footer />
    </div>
  );
}
