import { NavLink } from "react-router-dom";
import "./Navigation.css";
import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* define the NavBar component */
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
        to="/places"
        className="nav-link"
      >
        California Places
      </NavLink>
      {/* <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink> */}
    </nav>
  );
};

export default Navigation;