import React from 'react'
import Buttons from './Buttons'
import CameraImage from './images/camera.png'

function Promote() {
    return(
        <div className='promote-inner'>
            <div className='promote-left'>
              <h2>Canon camera</h2>
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
                <img src={CameraImage}/>
            </div>
          </div>
    )
}

export default Promote