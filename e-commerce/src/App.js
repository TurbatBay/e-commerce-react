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

function App() {
  const sliderData = cardData.map(data => {
    return (
      <SmallCard
        img = {data.imgURL}
        title = {data.title}
        items = {data.items}
      />
    )
  })

  const popData = popularData.map(data => {
    return(
      <Cart 
      className= {data.className}
      imgURL = {data.imgURL}
      title = {data.title}
      price = {data.price}
      rating = {data.rating}

      />
    )
  })

  const carouselData = carousData.map(data => {
    return (
      <Promote
        img = {data.img}
        title = {data.title}
      />
    )
  })
  return (
    <div className="App">
      <div className='header'>
        <div className='help'><Help /></div>
        <div className='navbar'><NavBar /></div>
        <div className='submenu'><SubMenu /></div>

        
      </div>
      <div className='main'>
        <div className='first-promote-section section'>
          <AliceCarousel>
            {carouselData}
          </AliceCarousel>
        </div>

        <div className='second-slider-section section'>
          <div className='smallCard'>
            {sliderData}
          </div>
        </div>
        <div className='third-popular-section section'>
        <div className='popular-product'>
          <h1>Popular Products Here</h1>
          <div className='cards'>
            {popData}
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
          <h1>Added Trust section to test branch</h1>
        </div>
        <div className='seventh-trust-section section'></div>
        <div className='eighth-team-section section'></div>
        <div className='nineth-partner-section section'></div>
        <div className='tenth-news-section section'></div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
