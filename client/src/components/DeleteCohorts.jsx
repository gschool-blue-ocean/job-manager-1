import React, { useState } from 'react';

const CohortButton = ({ cohort, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    onDelete(cohort.id);
  };

  return (
      !isDeleting && (
        <button
          onClick={handleDelete}
          className="absolute top-0 right-0 p-1.5 text-red-500"
        >
          X
        </button>
      )
  );
};

export default CohortButton;
