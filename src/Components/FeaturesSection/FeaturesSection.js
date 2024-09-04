import React from 'react';
import './BenefitsGrid.scss';
import icon1 from "../../assets/icons/carbon_notebook-reference.svg"
import icon2 from "../../assets/icons/group.svg"
import icon3 from "../../assets/icons/Robot.svg"
import icon4 from "../../assets/icons/IdentificationCard.svg"


const benefitsData = [
  {
    icon: icon1,
    title: 'Prove your skills',
    description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
  },
  {
    icon: icon2,
    title: 'Learn from community',
    description: 'One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.',
  },
  {
    icon: icon3,
    title: 'Challenge yourself',
    description: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
  },
  {
    icon: icon4,
    title: 'Earn recognition',
    description: 'You will stand out from the crowd if you do well in AI challenges; it not only helps you shine in the community but also earns rewards.',
  },
];

const BenefitsGrid = () => {
  return (
       <div className='BenifitsContainer uni_padding'>
        <h2>Why Participate in <span>AI Challenges?</span></h2>
            <div className="benefits-grid ">
            {benefitsData.map((benefit, index) => (
                <div key={index} className="benefit-item">
                <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                </div>
            ))}
            </div>
        </div>
  );
};

export default BenefitsGrid;
