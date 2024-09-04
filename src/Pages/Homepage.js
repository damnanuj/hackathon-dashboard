import React from 'react'
import Header from '../Components/Header/Header'
import LandingPage from '../Components/LandingPage/LandingPage'
import DataCount from '../Components/DataCountComponent/DataCount'

import BenefitsGrid from '../Components/FeaturesSection/FeaturesSection'


const Homepage = () => {
  return (
    <div>
        <Header/>
        <LandingPage/>
        <DataCount/>
        <BenefitsGrid/>
        
    </div>
  )
}

export default Homepage
