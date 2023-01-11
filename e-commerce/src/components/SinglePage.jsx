import React from "react"
import { Check, Circle, Facebook, Google, Heart, Star, Whatsapp } from "react-bootstrap-icons"
import Buttons from "./Buttons"
import ReactStars from "react-rating-stars-component";

function SinglePage(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return(
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
                <p>{props.title}</p>
                <p>{props.price}0</p>
                <div>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={40}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
                    <p>No review</p>
                </div>
                <p>Availlability <span> <Check/> In stock </span></p>
                <p>Hurry up! only {props.stock} product left in stock</p>
                <hr />
                <br />
                <p>Color <Circle/> <Circle/> </p>
                <p>Size</p>
                <p>Quantity</p>
                <div>
                    <Buttons/>
                    <Heart/>
                </div>
                <hr />
                <br />
                <p>Sku: 01133-9-9</p>
                <p>Category</p>
                <p>Share: <Facebook/> <Google/> <Whatsapp/></p>

            </div>
        </div>
    )
}

export default SinglePage