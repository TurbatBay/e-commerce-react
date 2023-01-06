import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Buttons from './Buttons'
import CameraImage from './images/camera.png'
import carousData from '../data/carousData'

function Promote(props) {

  const carouselData = carousData.map(data => {
    return (
      <Promote
        img = {data.img}
        title = {data.title}
      />
    )
  })

    return(
        <div className='promote-inner'>
            <div className='promote-left'>
              <h2>{props.title}</h2>
              <div className='promote-btns'>
                <Buttons 
                    id="1"
                    title= "Shop now"
                    backgroundColor= "warning"
                    color="#fff"
                />
                <Buttons 
                    id="2"
                    title= "View more"
                    backgroundColor= "outline-secondary"
                    color="#316887"
                />
                
              </div>
            </div>
            <div className='promote-right'>
                <img src={props.img}/>
            </div>
          </div>
    )
}

export default Promote