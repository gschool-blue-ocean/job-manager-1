import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CohortModal from "./CohortModal";
import ReactModal from "react-modal";
import FilterBar from "./FilterBar";
import StudentDisplay from "./StudentDisplay";

export default function Cohorts() {
  const [students, setStudents] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddButtonClick = () => {
    setModalIsOpen(true);
    console.log("hello");
  };

  return (
    <div className="flex w-full bg-gray-900  text-white">
      <div className="w-1/4 h-fit border border-white mt-2 rounded-lg text-center text-2xl flex flex-col items-center bg-gray-800">
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
      <div className="flex w-3/4 flex-col h-screen items-center ">
        <FilterBar />
        <StudentDisplay />
      </div>

      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-0 items-center flex"
        className="p-0 z-30 flex bg-[#141414] rounded-lg h-2/3 w-1/4 text-white justify-center fixed bottom-0 left-0"
        contentLabel="Modal"
      >
        <div className="">
          <CohortModal />
        </div>
      </ReactModal>
    </div>
  );
}
