import React from "react";
import "../App.css";
import Sale from "./Sale";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TrustSection from "./Trust";
import PartnerSection from "./PartnerSection";
import carousData from "../data/carousData";
import Cart from "./Cart";
import Promote from "./Promote";
import popularData from "../data/popularCard";
import "react-alice-carousel/lib/alice-carousel.css";
import TeamSection from "./TeamSection";
import teamData from "../data/teamCardData";
import NewsSection from "./News";
import dataNews from "../data/newsData";
import SinglePage from "./SinglePage";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard";
import cardData from "../data/card";
function MainMenu(props) {
  const popData = popularData.map((data) => {
    const children = data.children.map((d, index) => {
      console.log(props.wishlist);
      return (
        <Cart
          className={d.className}
          imgURL={d.imgURL}
          title={d.title}
          price={d.price}
          rating={d.rating}
          id={d.id}
          key={index}
          wishlist={props.wishlist}
          setWishlist={props.setWishlist}
        />
      );
    });
    return <div className="popular-biggest-wrap">{children}</div>;
  });

  const singleData = popularData.map((data) => {
    const children = data.children.map((d) => {
      return (
        <SinglePage
          className={d.className}
          imgURL={d.imgURL}
          title={d.title}
          price={d.price}
          rating={d.rating}
          stock={d.stock}
          color={d.color}
          category={d.category}
          size={d.size}
          sku={d.sku}
        />
      );
    });
    return <div className="single-biggest-wrap">{children}</div>;
  });

  const carouselData = carousData.map((data) => {
    return <Promote img={data.img} title={data.title} />;
  });

  const smallCardData = cardData.map((dat) => {
    const children = dat.children.map((data) => {
      return (
        <SmallCard
          id={data.id}
          img={data.imgURL}
          title={data.title}
          items={data.items}
        />
      );
    });
    return <div className="small-card-biggest-wrap">{children}</div>;
  });

  const teamPeopleData = teamData.map((team) => {
    const children = team.children.map((f) => {
      return (
        <TeamSection
          id={f.id}
          img={f.imgURL}
          title={f.title}
          text={f.text}
          openSpot={f.openSpot}
        />
      );
    });
    return <div className="team-biggest-wrap">{children}</div>;
  });
  const newsData = dataNews.map((data) => {
    const childrenss = data.children.map((dat) => {
      return (
        <NewsSection
          date={dat.date}
          img={dat.img}
          title={dat.title}
          text={dat.text}
          author={dat.author}
        />
      );
    });
    return <div className="news-biggest-wrap">{childrenss}</div>;
  });
  return (
    <div className="main">
      <div className="first-promote-section section">
        <AliceCarousel>{carouselData}</AliceCarousel>
      </div>

      <div className="second-slider-section section">
        <div className="smallCard">
          <AliceCarousel>{smallCardData}</AliceCarousel>
        </div>
      </div>
      <div className="third-popular-section section">
        <div className="popular-product">
          <h1>Popular Products Here</h1>
          <div className="cards">
            <AliceCarousel>{popData}</AliceCarousel>
          </div>
        </div>
      </div>
      <div className="fourth-sale-section section">
        <Sale />
      </div>
      <div className="fifth-add-to-cart-section section">
        <Link className="link" to={"/toaster"}>
          Toaster Page
        </Link>
      </div>
      <div className="sixth-trust-section section">
        <TrustSection />
      </div>
      <div className="seventh-team-section section">
        <AliceCarousel>{teamPeopleData}</AliceCarousel>
      </div>
      <div className="eighth-partner-section section">
        <PartnerSection />
      </div>
      <div className="nineth-news-section section">
        <AliceCarousel>{newsData}</AliceCarousel>
      </div>
    </div>
  );
}

export default MainMenu;
