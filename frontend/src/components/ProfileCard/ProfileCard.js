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
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>23</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>30</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
           
              <div className="vl"></div>
              <div className="follow">
                <span>5</span>
                <span>Posts</span>
              </div>{" "}
           
        </div>
        <hr />
      </div>

    </div>
  )
}

export default ProfileCard
