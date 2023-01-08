import React from "react";
import { Basket } from "react-bootstrap-icons";
import { IconContext } from "react-icons";



function BasketIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'black', size: '100px' }}
      >
        <div>
          < Basket/>
        </div>
      </IconContext.Provider>
    );
  }

  export default BasketIcon