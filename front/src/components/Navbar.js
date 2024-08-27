import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { headerItems, navItems } from "../constants/data";
import "./navbar.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return; // 메인 페이지가 아닌 경우 스크롤 이벤트를 설정하지 않음
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsDark(scrollY > 600); //높이 수정 가능
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav className={isHomePage ? "home-nav" : "other-nav"}>
      <div className="nav_container">
        <div className="nav_wrapper">
          <ul className="nav_left">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={
                  isHomePage ? (isDark ? "dark-hover" : "light-hover") : ""
                }
              >
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div
            className={`nav_logo ${
              isHomePage ? (isDark ? "dark" : "light") : "default"
            }`}
          >
            <span className="text-4xl font-extrabold">
              <a href="/" className="logo-text">
                Eloria
              </a>
            </span>
          </div>
          <ul className="nav_right">
            {headerItems.map((item, idx) => (
              <li
                key={idx}
                className={
                  isHomePage ? (isDark ? "dark-hover" : "light-hover") : ""
                }
              >
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
