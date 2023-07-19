import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudentModalInfo({ student }) {
  const options = [
    { value: "US", label: "US" },
    { value: "CW", label: "CW" },
  ];

  const [deliverables, setDeliverables] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/deliverables/${student.id}`)
      .then((response) => {
        setDeliverables(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving deliverable:", error);
      });
  }, [student.id]);

  return (
    <div className="text-white rounded-lg">
      <h1 className="font-bold text-2xl">{student.name}</h1>
      <ul className="flex ml-auto">
        {deliverables.map((deliverable, index) => (
          <li key={index}>
            <p>{deliverable.name}</p>
            <a href={deliverable.url} target="_blank" rel="noopener noreferrer">
              {deliverable.url}
            </a>
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                CW
              </label>

              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                NCW
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const renderListItem = (text, name) => {
//   return (
//     <li className="flex justify-between items-center mb-4 bg-gray-700 rounded-lg">
//       <div className="mr-24">{text}</div>
//       <div className="flex">
//         {options.map((option) => (
//           <React.Fragment key={option.value}>
//             <input type="radio" name={name} id={`${name}-${option.value}`} />
//             <label className="mr-2" htmlFor={`${name}-${option.value}`}>
//               {option.label}
//             </label>
//           </React.Fragment>
//         ))}
//       </div>
//     </li>
//   );
// };
