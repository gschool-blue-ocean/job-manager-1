import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import StudentModalInfo from "./StudentModalInfo";
import { useStudents } from "../context/StudentProvider";
export default function StudentDisplay() {
  const { students } = useStudents();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const options = [
    { value: "I/P", label: "I/P" },
    { value: "US", label: "US" },
    { value: "CW", label: "CW" },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.allUsers);
  //       setStudents(data.allUsers); // Save the data in the state
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="bg-gray-800 flex flex-col w-2/3 h-auto mt-2 rounded-lg p-2.5">
      <h1 className="text-center text-2xl mb-2">Students</h1>
      <div>
        {students.map((student, index) => (
          <div
            id={`accordion-collapse-${index}`}
            data-accordion="collapse"
            key={student.id}
          >
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className="bg-gray-700 mb-2 flex items-center justify-between w-full p-5 font-medium text-left text-gray-400 rounded-lg"
                data-accordion-target={`#accordion-collapse-body-${index}`}
                aria-expanded="true"
                aria-controls={`accordion-collapse-body-${index}`}
                onClick={() => toggleAccordion(index)} // Add event handler to toggle visibility
              >
                <span>{student.name}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-180 shrink-0 ${
                    activeAccordion === index ? "expanded" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${activeAccordion === index ? "" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className="p-5 bg-gray-800 rounded-lg mb-2 ">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <StudentModalInfo student={student} />
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 h-10 mr-auto"
        >
          Save
        </button>
      </div>

      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center"
        className="p-0 z-30 flex bg-[#141414] rounded-lg h-2/3 w-1/3 text-white justify-center fixed"
        contentLabel="Modal"
      >
        <div className="">
          <StudentModalInfo />
        </div>
      </ReactModal>
    </div>
  );
}
