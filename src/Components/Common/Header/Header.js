import React from "react";
import "./header.scss";
import logo from "../../../assets/icons/main_logo.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <img onClick={handleClick} src={logo} alt="logo" />
    </header>
  );
};

export default Header;
