import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
export default function Home() {
  return (
    <>
      <MainMenu />

      <div className="footer section">
        <Footer />
      </div>
    </>
  );
}
