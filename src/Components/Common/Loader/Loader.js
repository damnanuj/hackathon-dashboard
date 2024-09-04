import { CircularProgress } from "@mui/material";
import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <CircularProgress />
    </div>
  );
};

export default Loader;
