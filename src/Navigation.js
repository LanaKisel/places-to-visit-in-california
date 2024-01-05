import { NavLink } from "react-router-dom";
import "./Navigation.css";
import React from "react";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"        
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/places"
        className="nav-link"
      >
        California Places
      </NavLink>
    </nav>
  );
};

export default Navigation;