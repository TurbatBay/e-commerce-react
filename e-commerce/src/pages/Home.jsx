import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
export default function Home() {
    return (
        <>
            <div className="navbar">
                <NavBar />
            </div>
            <MainMenu />

            <div className="footer section">
                <Footer />
            </div>
        </>
    )
}