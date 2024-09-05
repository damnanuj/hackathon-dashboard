import React from "react";
import "./DataCount.scss";
import groupAi from "../../assets/icons/Group AI.svg";

const groupsData = [
  {
    groupIcon: groupAi,
    dataCount: "100K+",
    text: "AIModel Submissions",
  },
  {
    groupIcon: groupAi,
    dataCount: "50K+",
    text: "Data Scientists",
  },
  {
    groupIcon: groupAi,
    dataCount: "100+",
    text: "AI Challenges Hosted",
  },
];

const DataCount = () => {
  return (
    <div className="dataCount_container uni_padding">
      {groupsData.length > 0 ? (
        groupsData.map((item, i) => (
          <div key={i} className="groups_content">
            {item.groupIcon && <img src={item.groupIcon} alt="icon" />}
            <div>
              <h2>{item.dataCount || "N/A"}</h2>
              <span>{item.text || "No description available"}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DataCount;
