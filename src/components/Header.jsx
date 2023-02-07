import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className=" px-6 py-2 md:py-4 w-fill mx-auto bg-[#E6DAD0] md:h-[6vh]">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:justify-around">
        <Link to="/" className="text-xl md:text-2xl hover:text-gray-400">
          TC HAIRCUTS
        </Link>
        <BurgerMenu className="md:hidden" />
        <ul className="text-lg md:text-2xl md:flex gap-12 hidden">
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
