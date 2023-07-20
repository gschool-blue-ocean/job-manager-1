import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import StudentModalInfo from "./StudentModalInfo";
import { useStudents } from "../context/StudentProvider";
import ProgressBar from "./Progress";

export default function StudentDisplay() {
  const { students } = useStudents();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [completedDeliverables, setCompletedDeliverables] = useState({});

  const fetchCompletedDeliverables = async () => {
    try {
      // Loop through each student to fetch their completed deliverables count
      const completedDeliverablesData = await Promise.all(
        students.map(async (student) => {
          const response = await fetch(
            `/api/studentInfo/${student.id}/deliverables/completed`
          );
          const data = await response.json();
          return {
            studentId: student.id,
            count: data.completedDeliverablesCount,
          };
        })
      );

      // Convert the data into an object for easy access (studentId as key)
      const completedDeliverablesObject = completedDeliverablesData.reduce(
        (acc, item) => {
          acc[item.studentId] = item.count;
          return acc;
        },
        {}
      );

      setCompletedDeliverables(completedDeliverablesObject);
    } catch (error) {
      console.error("Error fetching completed deliverables:", error);
    }
  };

  useEffect(() => {
    fetchCompletedDeliverables(students, setCompletedDeliverables);
  }, [students]);

  const handleSaveButtonClick = () => {
    fetchCompletedDeliverables();
  };

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-800 flex flex-col w-2/3 h-auto mt-2 rounded-lg p-2.5 overflow-auto">
      <h1 className="flex justify-center text-2xl mb-2">Students</h1>
      <div>
        {students.map((student, index) => (
          <div
            id={`accordion-collapse-${index}`}
            data-accordion="collapse"
            key={student.id}
          >
            <h2
              id={`accordion-collapse-heading-${index}`}
              className="flex items-center"
            >
              <button
                type="button"
                className="bg-gray-700 mb-2 flex items-center justify-between w-full p-5 font-medium text-left text-gray-400 rounded-lg"
                data-accordion-target={`#accordion-collapse-body-${index}`}
                aria-expanded="true"
                aria-controls={`accordion-collapse-body-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{student.name}</span>

                <ProgressBar
                  progressPercentage={
                    (completedDeliverables[student.id] / 8) * 100
                  }
                />
                <div>{(completedDeliverables[student.id] / 8) * 100}%</div>
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
          type="button"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 h-10 "
          onClick={handleSaveButtonClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}
