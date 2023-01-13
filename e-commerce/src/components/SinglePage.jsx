import React from "react"
import { Check, Circle, Facebook, Google, Heart, Star, Whatsapp } from "react-bootstrap-icons"
import Buttons from "./Buttons"
import ReactStars from "react-rating-stars-component";
import Help from '../components/Help';
import NavBar from '../components/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "../components/Footer";
import SubMenu from '../components/SubMenu';
import dropData from '../data/dropData'

function SinglePage(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const dropDownData = dropData.map(data => {
        return (
            <SubMenu
            title={data.title}
            />
    
        )
        })

    return(
        <>
            <div className='help'><Help /></div>
            <div className='navbar'><NavBar /></div>
            <div className='submenu d-flex'>
            <div className="submenu-first-dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Browse Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
                {dropDownData}
            <div className="submenu-text">30 Days Free Return</div>
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
                    {/* {props.stock === 0 && <div className="team-card-badge">SOLD OUT</div>} */}
                    <p>Hurry up! only {props.stock} product left in stock</p>
                    
                    <hr />
                    <br />
                    <p>Colors: {props.color} <Circle/> <Circle/> </p>
                    <p>Size: {props.size}</p>
                    <p>Quantity</p>
                    <div>
                        <Buttons/>
                        <Heart/>
                    </div>
                    <hr />
                    <br />
                    <p>Sku: {props.sku}</p>
                    <p>Category: {props.category}</p>
                    <p>Share: <Facebook/> <Google/> <Whatsapp/></p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SinglePage