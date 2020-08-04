import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./styles/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <header className={`header ${theme}-theme`}>
      <nav className="nav-bar">
        <NavLink className="logo" to="/">
          Dark theme tutorial
        </NavLink>
        <div className="links">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </div>
      </nav>
      <Toggle
        className="toggle"
        checked={theme === "dark"}
        icons={{
          checked: <span className="toggle-icons moon"></span>,
          unchecked: <span className="toggle-icons sun"></span>,
        }}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </header>
  );
};

export default Header;
