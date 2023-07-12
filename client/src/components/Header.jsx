import React from "react";

export default function Header() {
  return (
    <nav className="flex bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center p-4">
        <a className="flex items-center">
          <span className="text-3xl font-semibold whitespace-nowrap text-white">
            Blue Ocean
          </span>
        </a>
        <div className="w-full md:w-auto ml-6 items-center">
          <ul className="flex font-medium  ">
            <li className="flex">
              <a className="block py-2 pl-3 pr-4 text-blue-500">
                Home
              </a>
              <a className="block py-2 pl-3 pr-4 text-blue-500">
                Profile
              </a>
              <a className="block py-2 pl-3 pr-4 text-blue-500">
                Documents
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
