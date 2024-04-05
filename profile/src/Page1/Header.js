import React, { useState } from "react";
import Lg from "../Asset/Bacground/UpZero(2).png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative flex items-center justify-between">
      {/* Logo */}
      <div className="flex">
        <div className="w-36">
          <img className="size-36 ml-20" src={Lg} alt="Logo" />
        </div>
        <h1 className="text-5xl font-bold mt-14 ml-10">UPZERO</h1>
      </div>
      {/* Ikon */}
      <div
        className="w-12 h-12 bg-gray-500 flex items-center justify-center cursor-pointer"
        onClick={toggleNav}
      >
        {!isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {/* Navigasi */}
      {isNavOpen && (
        <div className="absolute top-[100px] right-0 bg-white p-4 shadow-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
