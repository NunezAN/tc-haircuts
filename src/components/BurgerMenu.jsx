import { Icon, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden block">
      <IconButton>
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl"
          onClick={() => setOpen(true)}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        on
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-left py-2 pl-2 block text-2xl text-white"
            />
          </IconButton>
        </div>
        <Divider />
        <ul className="text-lg flex flex-col gap-4 p-4 font-italiana font-bold text-white">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400"
              onClick={() => setOpen(false)}
              s
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-gray-400"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </SwipeableDrawer>
    </div>
  );
};

export default BurgerMenu;
