import "./App.css";
import NavBar from "./components/Navbar";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import { Route, Routes , Link} from "react-router-dom";
// import About from "./About";
// import SignIn from "./SignIn";
// import Signup from "./SignUp";
// import BookList from "./pages/BookList";
// import Books from "./pages/Books";
// import Home from "./pages/Home";
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Form from "./pages/Form"
// import NotFound from "./pages/NotFound"
// import About from "./About";

function App() {
  return (
    
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>

      <MainMenu /> 


      <div className="footer section">
        <Footer />
      </div>
    </div>
  );
}

export default App;

{
  /* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes> */
}

{
  /* <div className="single-page-section section">{singleData}</div> */
}

{
  
}


{/* <h1>Day 43-React router</h1>
      <div className="navbar">
        <Link to="./about">About</Link>
        <Link to="./login">login</Link>
        <Link to="./register">register</Link>
        <Link to="./form">Form</Link>
        <Link to="./">home</Link>
      </div>
      <Routes>
        

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes> */}