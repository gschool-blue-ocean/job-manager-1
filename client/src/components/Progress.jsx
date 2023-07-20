import React from "react";

const ProgressBar = ({ progressPercentage }) => {
  let colorClass;
  if (progressPercentage === NaN) {
    colorClass = "bg-gray-300";
  }
  if (progressPercentage >= 100) {
    colorClass = "bg-green-600";
  } else if (progressPercentage >= 50) {
    colorClass = `bg-gradient-to-r from-red-600 to-yellow-400`;
  } else {
    colorClass = `bg-gradient-to-r from-red-600 to-red-600`;
  }

  return (
    <div className="h-3 w-2/3 rounded-lg bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full rounded-lg ${colorClass}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
