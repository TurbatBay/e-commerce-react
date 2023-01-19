import "./App.css";
import NavBar from "./components/Navbar";
import "react-alice-carousel/lib/alice-carousel.css";
import { Route, Routes, Link } from "react-router-dom";
// import BookList from "./pages/BookList";
// import Books from "./pages/Books";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./About";
import SinglePage from "./components/SinglePage";
import ToasterPage from "./pages/ToasterPage";
import MainMenu from "./components/MainMenu";
import { useState } from "react";

function App() {
  const [wishlist, setWishlist] = useState([]);
  return (
    <div className="App">
      <div className="navbar">
        <NavBar wishlist={wishlist} setWishlist={setWishlist} />
      </div>

      {/* <MainMenu />  */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<Home wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="/detail/:id" element={<SinglePage />} />
        <Route path="/toaster" element={<ToasterPage />} />
      </Routes>
      {/* <div className="footer section">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
