import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-div">
      <h2 className="logo">
        Crework<span className="icon-dot">.</span>
      </h2>
      <ul>
        <li>
          <Link to="/">
            <h4 className="nav-items">Home</h4>
          </Link>
        </li>
        <li>
          <Link to="/ready">
            <h4 className="nav-items">Ready</h4>
          </Link>
        </li>
        <li>
          <Link to="/forWhom">
            <h4 className="nav-items">ForWhom</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
