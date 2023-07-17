import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CohortModal from "./CohortModal";
import ReactModal from "react-modal";
import FilterBar from "./FilterBar";
import StudentDisplay from "./StudentDisplay";
import AutoSearch from "./AutoSearch";
import { useStudents } from "../context/StudentProvider";
import axios from "axios";

export default function Cohorts() {
  const { setStudents, students, fetchCohorts } = useStudents();
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { cohorts, setCohorts } = useStudents();

  const handleAddButtonClick = () => {
    setModalIsOpen(true);
    console.log("hello");
  };

  const cohortStudents = async (cohortId) => {
    try {
      const response = await axios.get(`/api/studentInfo/${cohortId}`);
      console.log("students:", response.data);
      setStudents(response.data);
    } catch (error) {
      console.error("Error retrieving students:", error);
    }
  };

  useEffect(() => {
    fetchCohorts();
  }, []);

  return (
    <div className="flex bg-gray-900  text-white p-2.5">
      <div className="w-96 h-fit  mt-2 rounded-lg text-center text-2xl flex flex-col items-center bg-gray-800">
        <h1 className="text-center">Your Cohorts</h1>
        {cohorts.map((cohort) => (
          <button
            onClick={() => cohortStudents(cohort.id)}
            key={cohort.id}
            className="w-80 h-fit rounded-lg text-center text-xl mb-2 bg-gray-700"
          >
            {cohort.name}
          </button>
        ))}
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
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center "
        className="p-0 z-30 flex bg-blue-900 rounded-lg h-2/3 w-2/3 text-white justify-center fixed"
        contentLabel="Modal"
      >
        <div className="w-2/3 h-2/3">
          <CohortModal />
        </div>
      </ReactModal>
    </div>
  );
}
