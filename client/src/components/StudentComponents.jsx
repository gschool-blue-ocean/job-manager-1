import React, { useState } from "react";
import axios from "axios";

export default function StudentComponents() {
  const [name, setName] = useState("");
  const [resumeInputValue, setResumeInputValue] = useState("");
  const [coverLetterInputValue, setCoverLetterInputValue] = useState("");
  const [personalNarrativeInputValue, setPersonalNarrativeInputValue] =
    useState("");
  const [linkedinInputValue, setLinkedinInputValue] = useState("");

  const handleResumeInputChange = (e) => {
    setName("resume");
    setResumeInputValue(e.target.value);
  };

  const handleCoverLetterInputChange = (e) => {
    setName("cover_letter");
    setCoverLetterInputValue(e.target.value);
  };

  const handlePersonalNarrativeInputChange = (e) => {
    setName("personal_narrative");
    setPersonalNarrativeInputValue(e.target.value);
  };

  const handleLinkedinInputChange = (e) => {
    setName("linkedin")
    setLinkedinInputValue(e.target.value);
  };

  const handleUploadButtonClick = async (inputValue) => {
    try {
      const currToken = JSON.parse(localStorage.getItem("token"));
      console.log(name)
      await axios.post("/api/deliverables", {
        name: name,
        url: inputValue,
      },{headers:{Authorization: `Bearer ${currToken}`}});
      console.log("Data uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen pt-4 bg-gray-900">
      <div className="p-2 pt-10 mb-4 h-28 w-1/2 bg-white border-gray-200 dark:bg-gray-600 dark:border-gray-700 rounded relative ">
        <div className="mb-6">
          <input
            type="text"
            id="resume-input"
            className="flex justify-center items-center bg-gray-50 border border-gray-300 bg-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            value={resumeInputValue}
            onChange={handleResumeInputChange}
          />
        </div>
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={() => handleUploadButtonClick(resumeInputValue)}
        >
          Upload
        </button>
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Resume
        </p>
      </div>

      <div className="p-2 mb-4 h-28 w-1/2 pt-10 bg-white border-gray-200 dark:bg-gray-600  dark:border-gray-700 rounded relative">
        <div className="mb-6">
          <input
            type="text"
            id="cover-letter-input"
            className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            value={coverLetterInputValue}
            onChange={handleCoverLetterInputChange}
          />
        </div>
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={() => handleUploadButtonClick(coverLetterInputValue)}
        >
          Upload
        </button>
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Cover Letter
        </p>
      </div>

      <div className="p-2 mb-4 h-28 w-1/2 pt-10 bg-white border-gray-200 dark:bg-gray-600  dark:border-gray-700 rounded relative">
        <div className="mb-6">
          <input
            type="text"
            id="personal-narrative-input"
            className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            value={personalNarrativeInputValue}
            onChange={handlePersonalNarrativeInputChange}
          />
        </div>
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={() => handleUploadButtonClick(personalNarrativeInputValue)}
        >
          Upload
        </button>
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          Personal Narrative
        </p>
      </div>

      <div className="p-2 mb-4 h-28 w-1/2 pt-10 bg-white border-gray-200 dark:bg-gray-600  dark:border-gray-700 rounded relative">
        <div className="mb-6">
          <input
            type="text"
            id="linkedin-input"
            className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            value={linkedinInputValue}
            onChange={handleLinkedinInputChange}
          />
        </div>
        <button
          className="block absolute top-9 right-2 hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          onClick={() => handleUploadButtonClick(linkedinInputValue)}
        >
          Upload
        </button>
        <p className="absolute top-10 left-2 text-white text-xl font-bold">
          LinkedIn
        </p>
      </div>
    </div>
  );
}
