import React from 'react'
import './RightSide.css'
import NavIcon from '../NavIcon/NavIcon'
import TrendCard from '../TrendCard/TrendCard'

function RightSide() {
  return (
    <div className="RightSide">
    {/* Side Navbar */}
      <NavIcon />

   {/* TrendCard */}
      <TrendCard/>

   {/* Share buttong */}
   <button className="button r-button" onClick={() => {}}>
        Share
      </button>

 </div>
  )
}

export default RightSide
