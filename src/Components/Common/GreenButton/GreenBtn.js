import React from "react";
import "./GreenBtn.scss";
import { useNavigate } from "react-router-dom";
import tickIcon from "../../../assets/icons/circle-tick.svg";

const GreenBtn = ({ path, icon, text, htmlType = "button", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <button
      className="greenBtnContainer"
      onClick={handleClick}
      type={htmlType} // Allows it to act as a submit button when needed
      {...props} // Spread other props like `loading`, `disabled`, etc.
    >
      {icon ? <img src={tickIcon} alt="tick" /> : null}
      {text}
    </button>
  );
};

export default GreenBtn;
