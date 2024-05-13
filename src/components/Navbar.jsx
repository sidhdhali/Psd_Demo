import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white mt-2">
      <ul className="flex justify-between items-center py-6 px-40">
        <li><a className="text-gray-900 px-4 py-2 rounded-lg" href="/">Home</a></li>
        <li><a className="text-gray-400" href="/guides">Guides</a></li>
        <li><a className="text-gray-400" href="/flights">Flights</a></li>
        <li><a className="text-gray-400" href="/about">About</a></li>
        <li className="contact-us ml-40">
          <a className="border border-gray-900 text-gray-900 px-10 py-2 rounded-lg" href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
