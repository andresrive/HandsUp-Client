import "./HomePage.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/video3.mp4";
import SignUpModal from "../../components/Modal/SignUpModal";
import Cards from "../../components/Card&Carrusel/Cards";
import ImageHome from "../../assets/planes.jpeg";
import Carrusel from "../../components/Card&Carrusel/Carrusel";
import CardsPacks from "../../components/Card&Carrusel/CardsPacks";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleGetStarted = () => {
    setShowModal(true);
  };
  return (
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
          <button className="bton" onClick={handleGetStarted}>
            Get Started
          </button>
          {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
      <CardsPacks />
      <div className="homepage-img-container mt-5">
        <img src={ImageHome} alt="imageHome" />
        <div className="carrusel-img-container">
          <h2 className=" text-homepage text-center">Maybe Prefer a Complete Adventure</h2>
          
        </div>
      </div>
      <Cards />
      <div className="homepage-container mt-5">
        <h2 className=" titles-home text-center">
          Maybe Prefer a Complete Adventure
        </h2>
        <div className="carrusel-container">
          <Carrusel />
        </div>
      </div>
    </>
  );
}
