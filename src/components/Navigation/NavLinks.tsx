import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex items-center space-x-6">
      <li>
        <NavLink to="/about-us">About Us &nbsp; /</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact &nbsp; /</NavLink>
      </li>
      <li>
        <button className="hover:bg-gray-300 rounded-full">USD</button>
      </li>
      <li>
        <button className="hover:bg-gray-300 rounded-full">
          <img
            src="https://www.usaflagco.com/cdn/shop/files/usflag-america-coloring-book.jpg"
            className="rounded-full w-5 h-5 mt-1"
            alt="Language"
          />
        </button>
      </li>
      <li>
        <button className="bg-purple-900 hover:bg-purple-500 text-white py-2 px-5 text-center rounded">
          List Your Property
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;
