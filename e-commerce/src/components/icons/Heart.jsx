import React from "react";
import { Heart } from "react-bootstrap-icons";
import { IconContext } from "react-icons";



function HeartIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'black', size: '100px' }}
      >
        <div>
          < Heart/>
        </div>
      </IconContext.Provider>
    );
  }

  export default HeartIcon