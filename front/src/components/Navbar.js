import React from "react";
import { headerItems, home, navItems } from "../constants/data";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="nav_wrapper">
          <ul className="nav_left">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav_logo">
            <span className="text-4xl font-extrabold">
              <a href="/" className="text-white">
                Eloria
              </a>
            </span>
          </div>
          <ul className="nav_right">
            {headerItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
