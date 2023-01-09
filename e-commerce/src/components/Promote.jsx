import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Buttons from './Buttons'

function Promote(props) {


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