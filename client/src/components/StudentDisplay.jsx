import React, { useState, useEffect } from "react";

export default function StudentDisplay() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.allUsers);
        setStudents(data.allUsers); // Save the data in the state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-800 flex flex-col w-2/3 h-auto border border-white mt-2 rounded-lg">
      <h1 className=" text-center text-2xl mb-2">Students</h1>
      <div>
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-gray-700 flex border border-white mt-2 rounded-lg h-20 flex justify-between items-center"
          >
            <span className="mr-auto">{student.name}</span>
            <button className="mr-4 border border-white rounded-md">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
