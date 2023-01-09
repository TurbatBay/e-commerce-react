import React from "react";
import img1 from "../components/images/partner-1.png"
import img2 from "../components/images/partner-2.png"
import img3 from "../components/images/partner-3.png"
import img4 from "../components/images/partner-4.png"
import img5 from "../components/images/partner-5.png"

function PartnerSection (props) {
    return(
        <div className="partner-container">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    )
}
export default PartnerSection