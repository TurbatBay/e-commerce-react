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