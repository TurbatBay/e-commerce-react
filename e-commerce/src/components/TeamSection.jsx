import React from "react";
import teamData from "../data/teamCardData";


function TeamSection(props) {

    

    return(
        <div className="team-card-container">
                <div className="team-card">
                    <div className="team-card-img-text-flex">
                        <img className="dashed-border" src={props.img} alt="" />
                        <h2>{props.title}</h2>
                    </div>
                    <div className="team-card-text">
                        <p>{props.text}</p>
                    </div>
                </div>
        </div>
    )
}

export default TeamSection