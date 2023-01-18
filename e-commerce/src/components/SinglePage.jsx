import React from "react";
import Cart from "./Cart";
import {
  Check,
  Circle,
  Facebook,
  Google,
  Heart,
  Star,
  Whatsapp,
} from "react-bootstrap-icons";
import Buttons from "./Buttons";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import popularData from "../data/popularCard";

function SinglePage(props) {
  const popData = popularData.map((data) => {
    const children = data.children.map((d) => {
      return (
        <Cart
          className={d.className}
          imgURL={d.imgURL}
          title={d.title}
          price={d.price}
          rating={d.rating}
          id={d.id}
          isWishlisted={d.isWishlisted}
        />
      );
    });
    return <div className="popular-biggest-wrap">{children}</div>;
  });

  const { id } = useParams();
  console.log(id);
  let found = [];

  popularData.filter((m) => {
    const foundChild = m.children.filter((c) => c.id == id);
    if (foundChild.length > 0) {
      found = foundChild;
    }
  });

  const product = found[0];

  console.log(found);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="single-page-container">
        <div className="single-page-top-container">
          <div className="single-left">
            <div className="single-top-image">
              <img src={product.imgURL} alt="" />
            </div>
            <div className="single-bottom-images">
              <div className="single-bottom-first">
                <img
                  src="https://www.pngall.com/wp-content/uploads/6/Joystick-PNG-Free-Image.png"
                  alt=""
                />
              </div>
              <div className="single-bottom-second">
                <img
                  src="https://www.pngall.com/wp-content/uploads/6/Joystick-PNG-Free-Image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="single-right">
            <p className="single-right-title">{product.title}</p>
            <p className="single-right-price">{product.price}</p>
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
            <p className="single-right-available-p">
              Availlability{" "}
              <span className="single-right-available-span">
                {" "}
                <Check /> In stock{" "}
              </span>
            </p>
            {/* {props.stock === 0 && <div className="team-card-badge">SOLD OUT</div>} */}
            <p className="single-right-hurry-p">
              Hurry up! only {product.stock} product left in stock
            </p>

            <hr />
            <br />
            <div className="single-right-h3 ">
              <h5>Colors: </h5>
              <p>{product.color}</p>
              <input type="radio" />
              <input type="radio" />
            </div>
            <p>Size: {product.size}</p>
            <div className="single-quantity-container">
              <p className="single-right-h3 ">Quantity: </p>
              <div className="single-quantity-form-container">
                <form id="myform" method="POST" class="quantity" action="#">
                  <input
                    type="button"
                    value="-"
                    class="qtyminus minus"
                    field="quantity"
                  />
                  <input type="text" name="quantity" value="0" class="qty" />
                  <input
                    type="button"
                    value="+"
                    class="qtyplus plus"
                    field="quantity"
                  />
                </form>
              </div>
            </div>
            <div className="single-add-cart-container">
              <button
                className="single-2-button1 btn-shop"
                variant="shop"
                size="xxl"
              >
                Add to cart
              </button>
              <button
                className="single-2-button2 btn-shop"
                variant="shop"
                size="xxl"
              >
                Buy it now
              </button>

              <div className="heart">
                <Heart />
              </div>
            </div>
            <hr />
            <br />
            <p>Sku: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>
              Share: <Facebook /> <Google /> <Whatsapp />
            </p>
          </div>
        </div>
        <div className="single-desc-rev-btns">
          <button
            className="single-2-button1 btn-shop"
            variant="shop"
            size="xxl"
          >
            Add to cart
          </button>
          <button
            className="single-2-button2 btn-shop"
            variant="shop"
            size="xxl"
          >
            Buy it now
          </button>
        </div>
        <div className="single-review-container  section">
          <div className="single-review-inner-container">
            <p className="single-review-h4">Customer reviews</p>
            <p className="single-review-p">No reviews yet</p>
            <div className="single-review-a-container">
              <a href="#" className="single-review-a">
                Write a review
              </a>
            </div>
          </div>
        </div>
        <div className="single-related-container section">
          <h2>Related product</h2>
          <div>{popData}</div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
