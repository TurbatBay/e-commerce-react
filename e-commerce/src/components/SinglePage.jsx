import React from "react"
import { Check, Circle, Facebook, Google, Heart, Star, Whatsapp } from "react-bootstrap-icons"
import Buttons from "./Buttons"
import ReactStars from "react-rating-stars-component";
import NavBar from "./Navbar";

function SinglePage(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="navbar">
                <NavBar />
            </div>

            <div className="single-page-container">
                <div className="single-left">
                    <div className="single-top-image">
                        <img src={props.imgURL} alt="" />
                    </div>
                    <div className="single-bottom-images">
                        <div className="single-bottom-first">
                            <img src="https://www.pngall.com/wp-content/uploads/6/Joystick-PNG-Free-Image.png" alt="" />
                        </div>
                        <div className="single-bottom-second">
                            <img src="https://www.pngall.com/wp-content/uploads/6/Joystick-PNG-Free-Image.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="single-right">
                    <p className="single-right-title">{props.title}</p>
                    <p className="single-right-price">{props.price}</p>
                    <div className="single-right-review">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className="single-right-review-text">No review</p>
                    </div>
                    <p className="single-right-available-p">Availlability <span className="single-right-available-span"> <Check /> In stock </span></p>
                    {/* {props.stock === 0 && <div className="team-card-badge">SOLD OUT</div>} */}
                    <p className="single-right-hurry-p">Hurry up! only {props.stock} product left in stock</p>

                    <hr />
                    <br />
                    <div className="single-right-h3 ">
                        <h5>Colors: </h5>
                        <p>{props.color}</p>
                        <input type="radio" />
                        <input type="radio" />
                    </div>
                    <p >Size: {props.size}</p>
                    <p className="single-right-h3 ">Quantity</p>
                    <div>
                        <Buttons />
                        <Heart />
                    </div>
                    <hr />
                    <br />
                    <p>Sku: {props.sku}</p>
                    <p>Category: {props.category}</p>
                    <p>Share: <Facebook /> <Google /> <Whatsapp /></p>

                </div>
            </div>
        </>
    )
}

export default SinglePage