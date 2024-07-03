import React from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <nav className="fixed top-16 w-72 h-full p-5 bg-white shadow-lg">
      <ul className="space-y-6">
        <div>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <svg
              className="h-6 w-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block h-9 rounded-md w-full ${
                  isActive ? "bg-gray-200" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
            <svg
              className="h-6 w-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 11h4V7H3v4zm6 0h4V7H9v4zm6 0h4V7h-4v4zM3 17h4v-4H3v4zm6 0h4v-4H9v4zm6 0h4v-4h-4v4zM3 23h4v-4H3v4zm6 0h4v-4H9v4zm6 0h4v-4h-4v4z" />
            </svg>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block h-9 rounded-md w-full ${
                  isActive ? "bg-gray-200" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
              }
            >
              Dashboard
            </NavLink>
          </li>
        </div>
        <div>
          <li className="p-2 text-gray-700 font-bold">Services</li>
          <div>
            <li className="space-y-2 p-2 hover:bg-gray-200 rounded-md">
              <NavLink
                to="/airport"
                className={({ isActive }) =>
                  `block h-9 rounded-md w-full ${
                    isActive ? "bg-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
                }
              >
                <span className="px-2">Airports</span>
              </NavLink>
            </li>
          </div>
          <div>
            <li className="space-y-2 p-2 hover:bg-gray-200 rounded-md">
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  `block h-9 rounded-md w-full ${
                    isActive ? "bg-gray-200" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
                }
              >
                <span className="px-2">Videos</span>
              </NavLink>
            </li>
          </div>
        </div>
        <div>
          <li className="p-2 text-gray-700 font-bold">Others</li>
          <li className="space-y-2 p-2 hover:bg-gray-200 rounded-md">
            <NavLink
              to="/list1"
              className={({ isActive }) =>
                `block h-9 rounded-md w-full ${
                  isActive ? "bg-gray-200" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
              }
            >
              <span className="px-2">List 1</span>
            </NavLink>
          </li>
          <li className="space-y-2 p-2 hover:bg-gray-200 rounded-md">
            <NavLink
              to="/list2"
              className={({ isActive }) =>
                `block h-9 rounded-md w-full ${
                  isActive ? "bg-gray-200" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
              }
            >
              <span className="px-2">List 2</span>
            </NavLink>
          </li>
          <li className="space-y-2 p-2 hover:bg-gray-200 rounded-md">
            <NavLink
              to="/list3"
              className={({ isActive }) =>
                `block h-9 rounded-md w-full ${
                  isActive ? "bg-gray-200" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 flex items-center `
              }
            >
              <span className="px-2">List 3</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default SideNav;
