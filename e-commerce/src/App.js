import './App.css';
// import MainMenu from './components/MainMenu'
import Help from './components/Help';
import NavBar from './components/Navbar';
import Card from './components/Card';
import SmallCard from './components/SmallCard';
import SubMenu from './components/SubMenu';
import Promote from './components/Promote';
import Sale from './components/Sale';
// import ImagesData from './data/ImagesData.json'
function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='help'><Help /></div>
        <div className='navbar'><NavBar /></div>
        <div className='submenu'><SubMenu /></div>

        
      </div>
      <div className='main'>
        <div className='first-promote-section section'>
          <Promote />
        </div>















        <div className='second-slider-section section'>
          <div className='smallCard'>
            <h1>Slider Here</h1>
            <SmallCard
              img= "..."
              title= "laptop"
              items= "2 items"
            />
            <SmallCard
              img
              title= "TV"
              items= "12 items"
            />
            <SmallCard
              img= "..."
              title= "IMAC"
              items= "2 items"
            />
          </div>
        </div>
        <div className='third-popular-section section'>
        <div className='popular-product'>
          <h1>Popular Products Here</h1>
          <div className='cards'>
          <Card 
            className="Card"
            img= "laptop.png"
            title= "I watch"
            price= "$12.70"
            rating="..."
          />
          <Card  
            className="Card"
            img= "laptop.png"
            title= "TV"
            price= "$200"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "Laptop"
            price= "$999"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "I watch"
            price= "$12.70"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "TV"
            price= "$200"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "Laptop"
            price= "$999"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "I watch"
            price= "$12.70"
            rating="..."
          />
          <Card 
            className="Card"
            img= "laptop.png"
            title= "TV"
            price= "$200"
            rating="..."
          />
          </div>
          
    
        </div>
        </div>
        <div className='fourth-sale-section section'>
          <Sale />
        </div>
        <div className='fifth-add-to-cart-section section'></div>
        <div className='sixth-trust-section section'></div>
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
