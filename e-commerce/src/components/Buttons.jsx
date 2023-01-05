import React from 'react'
import Button from 'react-bootstrap/Button';


function Buttons(props) {
    return(
        <Button variant={props.backgroundColor}>{props.title}</Button>
        // must add bg color and font color also button style ask from teacher
        

    )
}

export default Buttons