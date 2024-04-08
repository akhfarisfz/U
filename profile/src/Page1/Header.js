import React, { useState } from "react";
import Lg from "../Asset/Bacground/UpZero(2).png";
import { Link } from 'react-scroll';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="relative flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-24 md:w-36">
          <img className="size-24 md:size-36 ml-4 md:ml-20" src={Lg} alt="Logo" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-6 md:mt-14 ml-4 md:ml-10">UPZERO</h1>
      </div>
      {/* Ikon */}
      <div
        className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 flex items-center justify-center cursor-pointer"
        onClick={toggleNav}
      >
        {!isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-white"
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
            className="h-6 w-6 md:h-8 md:w-8 text-white"
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
        <div className="absolute top-[100px] md:top-[80px] right-0 bg-white p-4 shadow-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
            <Link
                to="Services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >Services</Link>
            </li>
            <li>
              
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >Our Products</Link>
            </li>
            <li>
              <Link
                to="contactUs"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >Contact US</Link>
            </li>
          </ul>
        </div>
      )}
    </div>

  );
}

export default Header;
