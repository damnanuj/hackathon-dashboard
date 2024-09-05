import React, { useEffect, useState } from "react";
import "./challangesCards.scss";

import img1 from "../../assets/cardimage/Group 1000002466.png";
import img2 from "../../assets/cardimage/Group 1000002766.png";
import img3 from "../../assets/cardimage/Group 1000002767.png";
import img4 from "../../assets/cardimage/Group 1000002771.png";
import img5 from "../../assets/cardimage/Group 1000002772.png";
import img6 from "../../assets/cardimage/Group 1000002773.png";
import GreenBtn from "../Common/GreenButton/GreenBtn";
import axios from "axios";
export const baseURL = "https://hackathon-dashboard-backend.onrender.com";

const hackathonsData = [
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
  const [hackathons, setHackathons] = useState([]);
  useEffect(() => {
    async function get_all_data_from_db() {
      let get_data = await axios.get(`${baseURL}/get-challenges`);
      setHackathons(get_data.data);
      console.log(get_data.data);
    }
    get_all_data_from_db();
  }, []);
  let url = hackathons.length ? hackathons[0].image : "Empty";
  console.log(url);
  console.log(hackathons);
  return (
    <div className="challangesCard_container uni_padding">
      {hackathons.length > 0 ? (
        hackathons.map((hackathon) => (
          <div className="card" key={hackathon._id}>
            <div className="cardTop">
              <img
                className="banner"
                src={`${baseURL}${hackathon.image}`}
                alt={hackathon.challangeName}
              />
            </div>


            <div className="cardBottom">
              <div className={`card-status ${hackathonsData[4].status.toLowerCase()}`}>
            {hackathonsData[4].status}
          </div>
              <div className="card-title">{hackathon.challangeName}</div>
              <div className="card-timer">
                {hackathonsData[2].status === "Upcoming" ? "Starts in" : "Ended on"}{" "}
                <br/>
                {hackathonsData[2].startTime}
              </div>

              <GreenBtn path={"/"} icon={true} text={"Participate Now"} />
            </div>
          </div>
        ))
      ) : (
        <h1>No Data Found...</h1>
      )}
    </div>
  );
};

export default ChallangesCards;
