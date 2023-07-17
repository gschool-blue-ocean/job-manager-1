import React from "react";

export default function StudentModalInfo({ student }) {
  const options = [
    { value: "I/P", label: "I/P" },
    { value: "US", label: "US" },
    { value: "CW", label: "CW" },
  ];

  const renderListItem = (text, name) => {
    return (
      <li className="flex justify-between items-center mb-4 bg-gray-700 rounded-lg">
        <div className="mr-24">{text}</div>
        <div className="flex">
          {options.map((option) => (
            <React.Fragment key={option.value}>
              <input type="radio" name={name} id={`${name}-${option.value}`} />
              <label className="mr-2" htmlFor={`${name}-${option.value}`}>
                {option.label}
              </label>
            </React.Fragment>
          ))}
        </div>
      </li>
    );
  };

  return (
    <div className="text-white rounded-lg">
      <h1 className="font-bold text-2xl">{student.name}</h1>
      <ul className="ml-auto">
        {renderListItem("Resume", "resume")}
        {renderListItem("LinkedIn", "LinkedIn")}
        {renderListItem("Cover Letter", "Cover Letter")}
        {renderListItem("Personal Narrative", "Personal Narrative")}
      </ul>
    </div>
  );
}
