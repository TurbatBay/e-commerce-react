import React from "react";
import { Truck } from "react-bootstrap-icons";
import { IconContext } from "react-icons";



function TrucksIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'black', size: '100px' }}
      >
        <div>
          < Truck/>
        </div>
      </IconContext.Provider>
    );
  }

  export default TrucksIcon