
import teamData from "../data/teamCardData";

import React, { useRef, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function TeamSection(props) {
    const teamPeopleData = teamData.map(data => {
        return <TeamSection
          id={data.id}
          img={data.imgURL}
          title={data.title}
          text={data.text}
          openSpot={data.openSpot}
        />
    
      })
      const children = teamData.map()
    
    return(
        // <SwiperSlide>
        <div className="team-card-container">
                <div className="team-card">
                    {props.openSpot === 0 && <div className="team-card-badge">SOLD OUT</div>}
                    <div className="team-card-img-text-flex">
                        <img className="dashed-border" src={props.img} alt="" />
                        <h2>{props.title}</h2>
                    </div>
                    <div className="team-card-text">
                        <p>{props.text}</p>
                    </div>
                </div>
        </div>
        // </SwiperSlide>
    )
}

export default TeamSection