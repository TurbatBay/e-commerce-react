import "./App.css";
import NavBar from "./components/Navbar";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        {" "}
        <NavBar />{" "}
      </div>

      <MainMenu />

      <div className="footer section">
        {" "}
        <Footer />{" "}
      </div>
      {/* <div className="single-page-section section">{singleData}</div> */}
    </div>
  );
}

export default App;
