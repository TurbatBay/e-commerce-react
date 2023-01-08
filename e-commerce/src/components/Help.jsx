import React from "react"
import LocationIcon from "./icons/Location"
import TrucksIcon from "./icons/Truck"

function Help(){
    return (

        <div className="help-container">
            <p>Need help? Call us (+98) 0234 456 789</p>
            <div className="help-rest-flex">
                <div className="our-store">
                    <LocationIcon />
                    <p>Our store</p>
                </div>
                <div className="track-order">
                    <TrucksIcon />
                    <p>Track your order</p>
                </div>
            </div>
        </div>
    )
}
export default Help