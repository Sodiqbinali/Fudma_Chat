import React from 'react'
import ProfileLeft from '../components/ProfileLeft/ProfileLeft'
import PostSide from '../components/PostSide/PostSide'
import RightSide from '../components/RightSide/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <ProfileLeft/>
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
