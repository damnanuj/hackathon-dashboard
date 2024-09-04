import React from "react";
import "./DataCount.scss";
import groupAi from "../../assets/icons/Group AI.svg";

const groupsData = [
  {
    groupIcon: groupAi,
    dataCount: "100K+",
    text : "AIModel Submissions"
  },
  {
    groupIcon: groupAi,
    dataCount: "50K+",
     text : "Data Scientists"
  },
  {
    groupIcon: groupAi,
    dataCount: "100+",
     text : "AI Challanges Hosted"
  },
];

const DataCount = () => {
  return (
    <div className="dataCount_container uni_padding">
     
        {groupsData.map((item, i) => {
          return (
           
             <div key={i} className="groups_content">
              <img src={item.groupIcon} alt="img" />
              <div>
                <h2>{item.dataCount}</h2>
                <span>{item.text}</span>
              </div>
              </div>
          
          );
        })}
      
    </div>
  );
};

export default DataCount;
