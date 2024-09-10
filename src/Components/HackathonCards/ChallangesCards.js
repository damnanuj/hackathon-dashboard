import React, { useEffect, useState } from "react";
import "./challangesCards.scss";
import axios from "axios";
import ChallangeCard from "./challangeCard";
import Loader from "../Common/Loader/Loader";

export const baseURL = "https://hackathon-dashboard-backend.onrender.com";

const ChallangesCards = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllDataFromDb() {
      try {
        let get_data = await axios.get(`${baseURL}/get-challenges`);
        let data = get_data.data;
        setHackathons(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    }
    getAllDataFromDb();
  }, []);

  return (
    <div className="challangesCard_container uni_padding">
      {loading ? (
        <Loader />  
      ) : (
        hackathons.length > 0 ? (
          hackathons.map((hackathon) => (
            <ChallangeCard key={hackathon._id} hackathon={hackathon} />
          ))
        ) : (
          <b style={{ color: "#DC1414" }}>No challenges found.</b>
        )
      )}
    </div>
  );
};

export default ChallangesCards;
