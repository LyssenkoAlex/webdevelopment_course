import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h3>Welcome to miniDev</h3>
      </NavLink>
    </header>
  );
};

export default Header;
