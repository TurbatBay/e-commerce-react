import "./App.css";
import NavBar from "./components/Navbar";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import { Route, Routes, Link } from "react-router-dom";
// import BookList from "./pages/BookList";
// import Books from "./pages/Books";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./About";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>

      {/* <MainMenu />  */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/detail/:id" element={<SinglePage />} />
      </Routes>
      {/* <div className="footer section">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;

{
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>;
}

{
  /* <div className="single-page-section section">{singleData}</div> */
}

{
}
