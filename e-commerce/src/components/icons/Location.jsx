import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";
import { IconContext } from "react-icons";



function LocationIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'black', size: '100px' }}
      >
        <div>
          < GeoAltFill/>
        </div>
      </IconContext.Provider>
    );
  }

  export default LocationIcon