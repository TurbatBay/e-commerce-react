import React from "react";


function NewsSection (props) {
    return(
        <div className="news-section-container">
            <div className="news-header-texts">
                <h2>Latest news</h2>
                <p>View all</p>
            </div>
            <div className="news-card-container">
                <div className="news-card-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="news-card-texts">
                    <p className="news-card-date">{props.date}</p>
                    <p className="news-card-h2">{props.title}</p>
                    <p className="news-card-text">{props.text}</p>
                    <p className="news-card-author">{props.author}</p>
                </div>
            </div>
        </div>
    )
}
export default NewsSection