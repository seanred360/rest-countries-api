import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="navbar flex flex-jc-sb flex-ai-c foreground-color">
      <span className="title">Where in the world?</span>
      <span className="dark-mode">
        <IoMoonOutline className="io-moon-outline" />
        Dark Mode
      </span>
    </nav>
  );
};

export default NavBar;
