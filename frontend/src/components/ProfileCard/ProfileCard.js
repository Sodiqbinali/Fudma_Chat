import React from 'react'
import Cover from '../../img/defaultCover.jpg'
import Profile from '../../img/defaultProfile.png'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Sodiq Bin Aliu</span>
        <span>Write about yourself</span>
      </div>
      
    </div>
  )
}

export default ProfileCard
