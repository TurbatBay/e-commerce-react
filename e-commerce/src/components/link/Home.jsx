
// import MainMenu from './components/MainMenu'
import Help from '../Help';
import NavBar from '../Navbar';
import Cart from '../Cart';
import SmallCard from '../SmallCard';
import SubMenu from '../SubMenu';
import Promote from '../Promote';
import Sale from '../Sale';
// import cardData from '.../components/data.card';
import popularData from '../../data/popularCard';
import dropData from '../../data/dropData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousData from '../../data/carousData';
import TrustSection from '../Trust';
import TeamSection from '../TeamSection';
import teamData from '../../data/teamCardData';
import PartnerSection from '../PartnerSection';
import NewsSection from '../News';
import dataNews from '../../data/newsData';
import Footer from "../Footer";
import Dropdown from "react-bootstrap/Dropdown";
import SinglePage from '../SinglePage';
import { Routes , Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from '../link/Login';
import Register from '../link/Register';
import NotFound from '../link/NotFound';


export default function Home() {


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


  const singleData = popularData.map(data => {
    const children = data.children.map(d => {
      return(
        <SinglePage
        className={d.className}
        imgURL={d.imgURL}
        title={d.title}
        price={d.price}
        rating={d.rating}
        stock = {d.stock}
        color= {d.color}
        category= {d.category}
        size= {d.size}
        sku= {d.sku}

      />
      )
    })
    return (
      <div className='single-biggest-wrap'>
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


  const teamPeopleData = teamData.map(team => {
    const children = team.children.map(f => {
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
      <div className='team-biggest-wrap'>
        {children}
      </div>
    )

  })


  const newsData = dataNews.map(data => {
    const childrenss = data.children.map(dat => {
      return <NewsSection
      date={dat.date}
      img={dat.img}
      title={dat.title}
      text={dat.text}
      author={dat.author}
    />
    })
      return (
        <div className='news-biggest-wrap'>
          {childrenss}
        </div>
      )

  })

  return (
    <div className="App">
      <div className='header'>
        <Link to='./about'>About</Link>
        <Link to='./login'>login</Link>
        <Link to='./register'>register</Link>
        <Link to='./form'>Form</Link>
        <Link to='./'>home</Link>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
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
          <AliceCarousel>
          {teamPeopleData}
          </AliceCarousel>
        </div>
        <div className='eighth-partner-section section'>
          <PartnerSection />
        </div>
        <div className='nineth-news-section section'>
          <AliceCarousel>
          {newsData}
          </AliceCarousel>
        </div>
      </div>
      <div className='footer section'>
        <Footer />
      </div>
      <div className='single-page-section section'>
        {singleData}
      </div>
    </div>
  );
}


