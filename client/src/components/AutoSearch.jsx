import React, { useState, useEffect } from "react";

import { useStudents } from "../context/StudentProvider";
const AutoSearch = () => {
  const { setTempStudents, tempStudents } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm && searchTerm.trim().length > 0) {
      fetch(`/api/studentInfo?name=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("search", data);
          setSearchResults(data);
        })
        .catch((error) => {
          console.error(error);
        });
      setShowSuggestions(true);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectSuggestion = (user) => {
    console.log("user name", user.name);
    setTempStudents([{ name: user.name, id: user.id }, ...tempStudents]);
    setSearchTerm("");
  };
  useEffect(() => {
    console.log("updated students", tempStudents);
  }, [tempStudents]);

  return (
    <div>
      <div>
        <input
          className="flex text-black w-52"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Add Student By Name"
        />

        {showSuggestions && (
          <ul className=" bg-white w-52 h-fit ">
            {searchResults.map((user) => (
              <li
                className="cursor-pointer hover:bg-gray-200"
                key={user.id}
                onClick={() => handleSelectSuggestion(user)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoSearch;
