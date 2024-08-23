import React from "react";
import { headerItems, home, navItems } from "../constants/data";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_wrapper">
          <ul className="nav_left">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="logo">
            <span className="text-4xl font-extrabold">
              <a href="/">Eloria</a>
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
