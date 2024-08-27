import React, { useEffect, useState } from "react";
import { headerItems, navItems } from "../constants/data";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 스크롤 위치에 따라 로고 색상 결정 (값은 필요에 따라 조정) -gpt 사용
      setIsDark(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className={`nav_logo ${isDark ? "dark" : "light"}`}>
            <span className="text-4xl font-extrabold">
              <a href="/" className="logo-text">
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
