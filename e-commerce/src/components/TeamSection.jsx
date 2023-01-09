
import teamData from "../data/teamCardData";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// import "./styles.css";


function TeamSection(props) {

    // <Swiper
    //     slidesPerView={3}
    //     spaceBetween={30}
    //     slidesPerGroup={3}
    //     loop={true}
    //     loopFillGroupWithBlank={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Pagination, Navigation]}
    //     className="mySwiper"
    //   ></Swiper>

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