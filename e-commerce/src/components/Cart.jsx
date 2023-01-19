import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";
import popularData from "../data/popularCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { icons } from "react-icons";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";

function Cart(props) {
  let foundProduct = [];
  popularData.filter((p) => {
    const filtered = p.children.filter((c) => c.id === props.id);

    if (filtered) {
      foundProduct = filtered;
    }
  });

  const product = foundProduct[0];
  console.log(product);
  console.log("wishlist", props.wishlist);
  const liked = props.wishlist.filter((wish) => wish.id === props.id)[0];
  console.log(liked);
  const ratingChanged = (newRating) => {
    console.log(liked);
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
            <a
              className="popular-heart"
              onClick={() => {
                console.log("heart is clicked");

                if (!liked) {
                  const likedProduct = {
                    id: props.id,
                    name: props.title,
                    price: props.price,
                    imgURL: props.imgURL,
                    liked: true,
                  };
                  props.setWishlist([...props.wishlist, likedProduct]);
                } else {
                  props.setWishlist(
                    props.wishlist.filter((w) => w.id !== props.id)
                  );
                }
              }}
            >
              {!liked ? <Heart /> : <HeartFill />}
            </a>
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
