import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

export default function Cohorts() {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState(null);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setStudents(data); // Save the data in the state
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="flex bg-gray-900 justify-center h-screen shadow-2xl text-white">
      <div className="mr-20 w-64 h-fit border border-white mt-2 rounded-lg text-center text-2xl flex flex-col items-center bg-gray-800">
        <h1 className="text-center">Your Cohorts</h1>
        <button className="w-56 h-fit rounded-lg text-center text-xl mb-2 bg-gray-700">
          MCSP-21
        </button>
        <button className="w-56 h-fit rounded-lg text-center text-xl mb-2 bg-gray-700">
          MCSP-22
        </button>
        <button className="w-56 h-fit rounded-lg text-center text-xl mb-2 bg-gray-700">
          MCSP-23
        </button>
        <button className="w-56 h-fit rounded-lg text-center text-xl mb-2 bg-gray-700">
          MCSP-24
        </button>
        <button
          onClick={handleAddButtonClick}
          className="w-fit h-fit rounded-lg text-center text-3xl mb-2 bg-gray-700"
        >
          +
        </button>
      </div>
      <div className="flex w-2/3 h-auto border border-white mt-2 rounded-lg justify-center">
        <h1 className="w-56 h-fit text-center text-2xl mb-2">Students</h1>
        {/* {students.map((student) => (
          <div
            key={student.id}
            className="border border-white mt-2 rounded-lg h-20 flex justify-between items-center"
          >
            <span className="mr-auto">{student.name}</span>
            <button className="border border-white rounded-md">View</button>
          </div>
        ))} */}
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="Modal"
          overlayClassName="Overlay"
        ></ReactModal>
      </div>
    </div>
  );
}
