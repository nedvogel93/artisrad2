import React from "react";
import { Link } from "react-router-dom";
import NavTabsCSS from "./NavTabs.css"

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
        <Link to="" className={
          window.location.pathname === "/catalogue" ? "nav-link active" : "nav-link"
        }>
        Catalogue
        </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Log In/Sign Up
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/catalogue" className={window.location.pathname==="/catalogue" ? "nav-link active":"nav-link"}>
        Browse all works
      </Link>
    </li>




  </ul>
);

export default NavTabs;
