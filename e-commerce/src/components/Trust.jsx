import React from "react"


function TrustSection() {




    return(
        <div className="trust-section-container">
            <div className="trust-main-contents">
                <div className="trust-card">
                    <div className="trust-image">
                        <img src={props.img}/>
                    </div>
                    <div className="trust-text-1">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="trust-text-2"></div>
                </div>
            </div>

        </div>
    )
}
export default TrustSection