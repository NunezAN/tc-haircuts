import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" px-6 py-4 w-fill mx-auto bg-[#E6DAD0] h-[6vh]">
      <div className="max-w-7xl mx-auto flex justify-around">
        <Link to="/" className="text-xl md:text-2xl hover:text-gray-400">
          TC HAIRCUTS
        </Link>
        <ul className="text-lg md:text-2xl flex gap-12">
          <li>
            <Link to="/services" className="hover:text-gray-400">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
