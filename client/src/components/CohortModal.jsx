import React from "react";
import ReactModal from "react-modal";
function CohortModal() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center text-2xl font-bold mb-4">
        New Cohort
      </div>
      <div className="flex flex-col">
        <input className="mb-2 ml-2 text-black" placeholder="Cohort Name" />
        <input className="mb-2 ml-2 text-black" placeholder="Start Date" />
      </div>
      <div className="flex border border-white w-96 h-96 bg-gray-600 rounded-lg justify-center">
        <div>
          <input className="text-black mt-2 " placeholder="Search Students" />
        </div>
      </div>
    </div>
  );
}

export default CohortModal;
