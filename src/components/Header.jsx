import React from "react";

const Header = () => {
  return (
    <div className=" p-4 w-fill mx-auto bg-[#E6DAD0]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <a href="" className="text-xl md:text-2xl">
          TC HAIRCUTS
        </a>
        <ul className="text-lg md:text-2xl flex gap-4">
          <li>
            <a className="hover:text-gray-600" href="#menu">
              SERVICES
            </a>
          </li>
          <li>
            <a className="hover:text-gray-600s" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
