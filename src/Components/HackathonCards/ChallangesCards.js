import React, { useEffect, useState } from "react";
import "./challangesCards.scss";
import axios from "axios";
import ChallangeCard from "./challangeCard";


export const baseURL = "https://hackathon-dashboard-backend.onrender.com"; 

const ChallangesCards = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    async function get_all_data_from_db() {
      try {
        let get_data = await axios.get(`${baseURL}/get-challenges`);
        let data = get_data.data;
        setHackathons(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    get_all_data_from_db();
  }, []);

  return (
    <div className="challangesCard_container uni_padding">
      {hackathons.length > 0 ? (
        hackathons.map((hackathon) => (
          <ChallangeCard
            key={hackathon._id}
            hackathon={hackathon}
          />
        ))
      ) : (
        <h1>No Data Found...</h1>
      )}
    </div>
  );
};

export default ChallangesCards;
