import React from 'react'
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logo.png'

const LogoSearch = () => {
  return (
     <>
    <div className="LogoSearch">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>    
      <div className="Search">
          <input type="text" 
          placeholder="#Explore"
          />
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
    </>
  )
}

export default LogoSearch
