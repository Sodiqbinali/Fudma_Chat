import React from 'react'
import './NavIcon.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import {Link} from 'react-router-dom'

const NavIcon = () => {
  return (
    <div className="navIcons">
      <div className="home">
         <Link to="../home">
        <img src={Home} alt="" />
      </Link>

      {/* <UilSetting /> */}
      <img src={Noti} alt="" />
      </div>
    </div>
  )
}

export default NavIcon
