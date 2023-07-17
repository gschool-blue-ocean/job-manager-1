import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

const StudentContext = createContext();

export function useStudents() {
  return useContext(StudentContext);
}

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [cohorts, setCohorts] = useState([]);

  const fetchCohorts = () => {
    fetch("/api/cohorts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCohorts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        cohorts,
        setCohorts,
        fetchCohorts,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
export default StudentProvider;
