import React, { useState, useEffect, useRef } from "react";
import Lg from "../Asset/Bacground/UpZero(2).png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isNavOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

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
        ref={iconRef}
        className="w-12 h-12 bg-slate-600 mr-[20px] flex items-center justify-center cursor-pointer rounded-full"
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
      <div
        className={`absolute top-[48px] right-[70px] bg-slate-200 p-[13px] rounded-l-lg shadow-lg z-10 text-right transition-all duration-500 ${
          isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        ref={navRef}
      >
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          Services
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
