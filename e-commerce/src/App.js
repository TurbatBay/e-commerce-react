import './App.css';
// import MainMenu from './components/MainMenu'
import Help from './components/Help';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import SmallCard from './components/SmallCard';
import SubMenu from './components/SubMenu';
import Promote from './components/Promote';
import Sale from './components/Sale';
import cardData from './data/card';
import popularData from './data/popularCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousData from './data/carousData';
import dropData from './data/dropData'
import SubDropDown from './components/SubMenuDrop';
import Swipers from './components/Swiper';
import awardsData from './data/awards';
import TrustSection from './components/Trust';
import TeamSection from './components/TeamSection';
import teamData from './data/teamCardData';
import PartnerSection from './components/PartnerSection';
import NewsSection from './components/News';
import dataNews from './data/newsData';
import Footer from "./components/Footer";
import Dropdown from "react-bootstrap/Dropdown";






function App() {
  const sliderData = cardData.map(data => {
    return (
      <SmallCard
        img={data.imgURL}
        title={data.title}
        items={data.items}
      />
    )
  })

  const popData = popularData.map(data => {
    const children = data.children.map(d => {
      return(
        <Cart
        className={d.className}
        imgURL={d.imgURL}
        title={d.title}
        price={d.price}
        rating={d.rating}

      />
      )
    })
    return (
      <div className='popular-biggest-wrap'>
        {children}
      </div>
    )
  })

  const carouselData = carousData.map(data => {
    return (
      <Promote
        img={data.img}
        title={data.title}
      />
    )
  })

  const dropDownData = dropData.map(data => {
    return (
      <SubMenu
        title={data.title}
      />

    )
  })

  const awardsContentData = awardsData.map(data => {
    return (
      <TrustSection
        img={data.img}
        title={data.title}
        text={data.text}
      />
    )
  })

  const teamPeopleData = teamData.map(data => {
    const childrenss = data.children.map(f => {
      return (
        <TeamSection
        id={f.id}
        img={f.imgURL}
        title={f.title}
        text={f.text}
        openSpot={f.openSpot}
    />
      )
    })
    return (
      <div>
        {childrenss}
      </div>
    )

  })
  const newsData = dataNews.map(data => {
    return <NewsSection
      date={data.date}
      img={data.img}
      title={data.title}
      text={data.text}
      author={data.author}
    />

  })

  return (
    <div className="App">
      <div className='header'>
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


      </div>
      <div className='main'>
        <div className='first-promote-section section'>
          <AliceCarousel>
            {carouselData}
          </AliceCarousel>
        </div>

        <div className='second-slider-section section'>
          <div className='smallCard'>
            {/* <Swipers></Swipers> */}
          </div>
        </div>
        <div className='third-popular-section section'>
          <div className='popular-product'>
            <h1>Popular Products Here</h1>
            <div className='cards'>
              <AliceCarousel>
                {popData}
              </AliceCarousel>
            </div>


          </div>
        </div>
        <div className='fourth-sale-section section'>
          <Sale />
        </div>
        <div className='fifth-add-to-cart-section section'>
          <h1>Add to Cart section here</h1>
        </div>
        <div className='sixth-trust-section section'>
          <TrustSection />
        </div>
        <div className='seventh-team-section section'>
          {/* {teamPeopleData} */}
        </div>
        <div className='eighth-partner-section section'>
          <PartnerSection />
        </div>
        <div className='nineth-news-section section'>
          {newsData}
        </div>
      </div>
      <div className='footer section'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
