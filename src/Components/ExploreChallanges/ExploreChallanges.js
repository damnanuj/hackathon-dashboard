import React from 'react'
import "./exploreChallanges.scss"
import FilterSearchComponent from '../FilterSearchComponent/FilterSearchComponent'
import ChallangesCards from '../HackathonCards/ChallangesCards'

const ExploreChallanges = () => {
  return (
    <div className='explore_container'>
      <FilterSearchComponent/>
      <ChallangesCards/>
    </div>
  )
}

export default ExploreChallanges
