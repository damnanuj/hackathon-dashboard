import React from "react";
import "./GreenBtn.scss";
import { useNavigate } from "react-router-dom";
import tickIcon from "../../../assets/icons/circle-tick.svg";
import { CircularProgress } from "@mui/material"; 

const GreenBtn = ({
  path,
  icon,
  text,
  htmlType = "button",
  loading = false, 
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path && !loading) {
     
      navigate(path);
    }
  };

  return (
    <button
      className={`greenBtnContainer ${loading ? "loading" : ""}`} 
      onClick={handleClick}
      type={htmlType} 
      disabled={loading} 
      {...props} 
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" /> 
      ) : (
        <>
          {icon ? <img src={tickIcon} alt="tick" /> : null}
          {text}
        </>
      )}
    </button>
  );
};

export default GreenBtn;
