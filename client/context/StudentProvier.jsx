import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const StudentContext = createContext()

export function useStudents() {
    return useContext(StudentContext);
  }

  export function StudentProvider({ children }) {
    const [students, setStudents] = useState([]);



      return (
        <StudentContext.Provider
          value={{
            students,
            setStudents
          }}
        >
          {children}
        </StudentContext.Provider>
      );
    }
