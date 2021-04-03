import React from "react";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex-nowrap">
      <Link to="/" className="navbar__logo" id="logo">
        Niek's Crypto World
      </Link>
      <Burger />
    </div>
  );
};

export default Navbar;
