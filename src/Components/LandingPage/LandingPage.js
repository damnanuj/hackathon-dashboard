import React from "react";
import "./LandingPage.scss";
import rocket from "../../assets/icons/rocket.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage_container">
      <div className="left_side">
        <h1 className="heading">
          <div className="yellow_bar"></div>
          Accelerate Innovation with Global AI Challenges
        </h1>
        <p className="para">
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </p>
        <Link to="/create-challange">
          <button className="create_btn">Create Challenge</button>
        </Link>

       
      </div>
      <div className="right_side">
        <img src={rocket} alt="rocket" />
      </div>
    </div>
  );
};

export default LandingPage;
