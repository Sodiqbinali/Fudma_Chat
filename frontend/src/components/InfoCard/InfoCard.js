import { React} from 'react'
import './infoCard.css'
import { UilPen } from '@iconscout/react-unicons'


const InfoCard = () => {

  return (
     <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => {}}
              
            />
          
          </div>
      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Department: </b>
        </span>
        <span>test</span>
      </div>
      
      <div className="info">
        {/* */}
        <span>
          <b>Status: </b>
        </span>
        <span>test</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>test</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>test</span>
      </div>

      <button className="button logout-button" >Log Out</button>
    </div>
  )
}

export default InfoCard
