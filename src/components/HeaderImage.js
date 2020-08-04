import React from "react";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import useDarkMode from "../hooks/useDarkMode";
import "./styles/headerImage.css";
import PropTypes from "prop-types";

const HeaderImage = ({ lightText, darkText }) => {
  const [theme] = useDarkMode();
  return (
    <div className={`headerImg ${theme}-theme`}>
      <h1>{theme === "light" ? lightText : darkText}</h1>
      <img className="themeImg" src={theme === "light" ? sun : moon} alt="" />
    </div>
  );
};

HeaderImage.propTypes = {
  lightText: PropTypes.string,
  darkText: PropTypes.string,
};

export default HeaderImage;
