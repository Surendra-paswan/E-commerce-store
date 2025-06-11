// import React from 'react'
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const listItems = () => {
  console.log("List of items");
  
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img src={LOGO_URL} alt="" className="w-20 h-20" />
      </div>
      <div className="flex justify-between list-none w-110 underline">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </div>
      <div
        className="mt-4 flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg font-medium text-base hover:bg-blue-600 transition-colors"
        onClick={listItems}
      >
        Cart
      </div>
    </nav>
  );
};

export default Navbar;
