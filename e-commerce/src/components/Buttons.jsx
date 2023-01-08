import React from 'react'
import Button from 'react-bootstrap/Button';


function Buttons(props) {
    return(
        <>
        <style type="text/css">
            {`
            .btn-shop {
            background-color: #EDA415;
            color: white;
            border-radius: 20px;
            font-weight: 600;
            }

            .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            }

            .btn-view {
            background-color: #fff;
            color: #316887;
            border: 1px solid #316887;
            border-radius: 20px;
            font-weight: 600;
            }

            .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            }
            `}
      </style>

        <Button className='btn-shop' variant="shop" size="xxl">Shop now</Button>
        <Button className='btn-view' variant="view" size="xxl">View more</Button>
        </>

    )
}

export default Buttons