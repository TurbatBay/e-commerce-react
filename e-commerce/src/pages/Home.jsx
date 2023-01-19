import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
export default function Home(props) {
  return (
    <>
      <MainMenu wishlist={props.wishlist} setWishlist={props.setWishlist} />

      <div className="footer section">
        <Footer />
      </div>
    </>
  );
}
