import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { TiTick } from "react-icons/ti";

export default function UploadFile({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, file && 5);
    setSelectedFile(file);
  };

  if (selectedFile !== null) {
    console.log("selectedFile is not null");
  } else {
    console.log("selectedFile is null");
  }

  console.log(selectedFile);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="flex flex-col h-full">
          <div className="flex justify-center items-start h-12">
            <div className="flex rounded justify-center items-center bg-gray-900 w-full h-12">
              <span className="text-white text-lg">Upload</span>
            </div>
          </div>
          <div className="flex flex-grow flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-80 h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className={`w-8 h-8 mb-4 text-gray-500 dark:text-gray-600 ${
                        selectedFile ? "hidden" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <span className="text-3xl font-bold mb-4">Add File</span>
                  </div>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex justify-center"></div>
            </div>
          </div>
          <div className="flex justify-center h-12">
            <button className="block hover:bg-gray-900 py-2 pl-3 pr-4 text-white bg-blue-700 border-2 border-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
              Submit
            </button>
          </div>
        </div>
      </Modal>

      {selectedFile !== null && (
        <div>TEXT</div>
        //   <div className="top-0 right-0 mt-2 mr-2">
        //     <div>TEXT</div>
        //     <TiTick className="w-6 h-6 text-green-500 dark:text-green-600" />
        //   </div>
      )}
    </>
  );
}
