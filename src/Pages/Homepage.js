import React from 'react'
import Header from '../Components/Common/Header/Header'
import LandingPage from '../Components/LandingPage/LandingPage'
import DataCount from '../Components/DataCountComponent/DataCount'

import BenefitsGrid from '../Components/FeaturesSection/FeaturesSection'
import ExploreChallanges from '../Components/ExploreChallanges/ExploreChallanges'



const Homepage = () => {
  return (
    <div>
        <Header/>
        <LandingPage/>
        <DataCount/>
        <BenefitsGrid/>
        <ExploreChallanges/>
        
        
    </div>
  )
}

export default Homepage
