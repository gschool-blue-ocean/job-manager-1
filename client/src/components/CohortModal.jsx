import React, { useState } from "react";
import AutoSearch from "./AutoSearch";
import { useStudents } from "../context/StudentProvider";
import axios from "axios";

function CohortModal() {
  const { setStudents, students, fetchCohorts, resetStudents, tempStudents } =
    useStudents();
  const [cohortName, setCohortName] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/cohorts", {
        cohortName,
        startDate,
        students: tempStudents,
      });
      console.log(response.data);
      fetchCohorts();

      resetStudents();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      style={{ width: "100%" }}
      className="flex flex-row mt-16 justify-center "
    >
      <div className="flex flex-col">
        <div className="flex justify-center items-center text-2xl font-bold mb-4 mr-12">
          New Cohort
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col text-black"
        >
          <input
            className="mb-4 mr-12 w-52"
            placeholder="Cohort Name"
            value={cohortName}
            onChange={(e) => setCohortName(e.target.value)}
          />
          <input
            className="mb-4 mr-12 w-52"
            placeholder="Start Date: MM/DD/YYYY"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <AutoSearch />
        </form>
      </div>
      <div>
        <div className="flex justify-center items-center text-2xl font-bold mb-4 mr-12">
          Students
        </div>
        <div
          className="flex bg-gray-600 rounded-lg overflow-y-auto"
          style={{ width: "40vw", height: "50vh" }}
        >
          <ul className="flex-col">
            {tempStudents.map((student, index) => (
              <li className="text-xl" key={index}>
                {student.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 h-10"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CohortModal;
