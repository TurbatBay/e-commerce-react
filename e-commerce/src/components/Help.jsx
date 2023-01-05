import React from "react"
import { GeoAltFill, Truck } from "react-bootstrap-icons"

function Help(){
    return (
        <div className="help-container">
            <p>Need help? Call us (+98) 0234 456 789</p>
            <div className="help-rest-flex">
                <div className="our-store">
                    <a href="#"><GeoAltFill /></a>
                    <p>Our store</p>
                </div>
                <div className="track-order">
                    <a href="#"><Truck /></a>
                    <p>Track your order</p>
                </div>
            </div>
        </div>
    )
}
export default Help