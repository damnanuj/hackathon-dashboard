import React, { useEffect, useState } from "react";
import GreenBtn from "../Common/GreenButton/GreenBtn";

import { calculateTimeLeft } from "../../functions/calculateTimeLeft";
import { baseURL } from "./ChallangesCards";


const ChallangeCard = ({ hackathon }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const { status, timeLeft } = calculateTimeLeft(hackathon.startDate, hackathon.endDate);
      setStatus(status);
      setTimeLeft(timeLeft);
    };

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [hackathon.startDate, hackathon.endDate]);

  return (
    <div className="card" key={hackathon._id}>
  <div className="cardTop">
    <img
      className="banner"
      src={`${baseURL}${hackathon.image}`}
      alt={hackathon.challangeName}
    />
  </div>

  <div className="cardBottom">
    <div className={`card-status ${status.toLowerCase()}`}>
      {status}
    </div>
    <div className="card-title">{hackathon.challangeName}</div>
    <div className="card-timer">
      {status === "Ended" ? (
        <>
         <span> Ended On</span>
          <br />
          {new Date(hackathon.endDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </>
      ) : status === "Active" ? (
        <>
        
          <span>Ends In</span>
          <br />
          {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m`}
        </>
      ) : (
        <>
        <span>Starts In</span>
          
          <br />
          {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m`}
        </>
      )}
    </div>

    <GreenBtn path={"/"} icon={true} text={"Participate Now"} />
  </div>
</div>

  
  );
};

export default ChallangeCard;
