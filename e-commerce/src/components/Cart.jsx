import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  let Icon = props.isWishlisted ? "heart-regular.svg" : "heart-solid.svg";
  function toggleWishlist() {
    console.log("Toggle Wishlist");
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="popular-card">
      <div className="popular-flex">
        <Link to={`/detail/${props.id}`}>
          <img src={props.imgURL} className="popular-card-img" alt="image" />
        </Link>
        <div>
          <p className="popular-card-p1">{props.title}</p>
          <p className="popular-card-p2">{props.price}</p>
          <div>
            <img
              src={`./images/images/${Icon}`}
              width="50px"
              onClick={toggleWishlist}
            />
          </div>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;

// <Card className='popular-card' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={props.imgURL} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//             <Card.Text>
//             {props.price}
//             </Card.Text>
//             <Star />
//         <Star />
//         <Star />
//         <Star />
//         <Star />

//       </Card.Body>

//       <Card.Body>

//       </Card.Body>
//     </Card>
