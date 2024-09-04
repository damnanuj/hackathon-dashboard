import React from "react";
import "./challangesCards.scss";

import img1 from "../../assets/cardimage/Group 1000002466.png";
import img2 from "../../assets/cardimage/Group 1000002766.png";
import img3 from "../../assets/cardimage/Group 1000002767.png";
import img4 from "../../assets/cardimage/Group 1000002771.png";
import img5 from "../../assets/cardimage/Group 1000002772.png";
import img6 from "../../assets/cardimage/Group 1000002773.png";
import GreenBtn from "../Common/GreenButton/GreenBtn";

const hackathons = [
  {
    id: 1,
    title: "Data Science Bootcamp - Graded Datathon",
    status: "Upcoming",
    startTime: "00 : 15 : 22",
    imageUrl: img5,
  },
  {
    id: 2,
    title: "Data Sprint 72 - Butterfly Identification",
    status: "Upcoming",
    startTime: "00 : 12 : 34",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Data Sprint 71 - Weather Recognition",
    status: "Active",
    startTime: "16th May'22 09:00 PM",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    status: "Upcoming",
    startTime: "16th May'22 09:00 PM",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Travel Insurance Claim Prediction",
    status: "Past",
    startTime: "16th May'22 09:00 PM",
    imageUrl: img1,
  },
  {
    id: 6,
    title: "Engineering Graduates Employment Outcomes",
    status: "Active",
    startTime: "16th May'22 09:00 PM",
    imageUrl: img6,
  },
];

const ChallangesCards = () => {
  return (
    <div className="challangesCard_container uni_padding">
      {hackathons.map((hackathon) => (
        <div className="card" key={hackathon.id}>
          <img className="banner" src={hackathon.imageUrl} alt={hackathon.title} />
          <div className={`card-status ${hackathon.status.toLowerCase()}`}>
            {hackathon.status}
          </div>
          <div className="card-title">{hackathon.title}</div>
          <div className="card-timer">
            {hackathon.status === "Upcoming" ? "Starts in" : "Ended on"}{" "}
            {hackathon.startTime}
          </div>

          <GreenBtn
           path={"/"}
            icon={true}
            text={"Participate Now"}
           
          />
        </div>
      ))}
    </div>
  );
};

export default ChallangesCards;
