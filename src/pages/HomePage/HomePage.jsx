import "./HomePage.css";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/video3.mp4";
import SignUpModal from "../../components/Modal/SignUpModal";
import Cards from "../../components/Card&Carrusel/Cards";
import ImageHome from "../../assets/planes.jpeg";
import Carrusel from "../../components/Card&Carrusel/Carrusel";
import CardsPacks from "../../components/Card&Carrusel/CardsPacks";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleGetStarted = () => {
    setShowModal(true);
  };
  return (
    <>
      {!isLoading && (
        <>
          <Navbar />
          <div className="homepage-video-container">
            <video autoPlay loop muted>
              <source src={videoBg} type="video/mp4" />
            </video>
            <div className="homepage-video-overlay">
              <h1>
                Choose a destination <br /> we will bring the friends
              </h1>
              {!isLoggedIn && (
                <button className="bton" onClick={handleGetStarted}>
                  Get Started
                </button>
              )}
              {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
            </div>
          </div>
          <CardsPacks />
          <div className="homepage-img-container mt-4">
            <img src={ImageHome} alt="imageHome" />
            <div className="carrusel-img-container">
              <h2 className=" text-homepage text-center">
              Explore the World with Our Travel Packs
              </h2>
              <p>Welcome to our travel packages website. We specialize in creating unique experiences so you can enjoy your vacation to the fullest. We offer a wide selection of travel packages for all tastes and budgets, from international destinations to weekend getaways. Our goal is to provide you with an unforgettable and worry-free trip. Plus, you can customize each travel package according to your needs and preferences. Start planning your next adventure with us today!</p>
              <Link className="boton-about mt-4" to="/packs">Check Our Packs</Link>
            </div>
          </div>
          <Cards />
          <div className="homepage-container mt-5">
            <h2 className=" titles-home text-center">
              See Our Most Popular Plans
            </h2>
            <div className="carrusel-container">
              <Carrusel />
            </div>
          </div>
        </>
      )}
    </>
  );
}
