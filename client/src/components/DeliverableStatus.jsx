import React, { useState, useEffect } from "react";
import axios from "axios";

const DeliverableStatus = ({ index, deliverable }) => {
  const [statusData, setStatusData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/deliverable_statuses/${deliverable.id}`)
      .then((response) => {
        setStatusData(response.data[0]);
        setSelectedStatus(
          response.data[0]?.is_completed ? `CW-${index}` : `NCW-${index}`
        );
      })
      .catch((error) => {
        console.error("Error retrieving deliverable status:", error);
      });
  }, [deliverable.id, index]);

  const handleCheckboxChange = (event) => {
    const checkboxId = event.target.id;
    const isCWChecked = checkboxId === `CW-${index}`;

    setSelectedStatus(isCWChecked ? `CW-${index}` : `NCW-${index}`);

    axios
      .patch(`/api/deliverable_statuses/${deliverable.id}`, {
        is_completed: isCWChecked,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating CW:", error);
      });
  };

  if (!statusData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        id={`CW-${index}`}
        type="checkbox"
        value="CW"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        onChange={handleCheckboxChange}
        checked={selectedStatus === `CW-${index}`}
      />
      <label
        htmlFor={`CW-${index}`}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2"
      >
        CW
      </label>

      <input
        id={`NCW-${index}`}
        type="checkbox"
        value="NCW"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        onChange={handleCheckboxChange}
        checked={selectedStatus === `NCW-${index}`}
      />
      <label
        htmlFor={`NCW-${index}`}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        NCW
      </label>
    </div>
  );
};

export default DeliverableStatus;
