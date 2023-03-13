import "./HomePage.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/video3.mp4";
import SignUpModal from "../../components/Modal/SignUpModal";
import Cards from "../../components/Card&Carrusel/Cards";
import ImageHome from '../../assets/imagehome.jpg'
import Carrusel from "../../components/Card&Carrusel/Carrusel";


export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

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
          <h1>Bring your backpack, we'll bring the friends</h1>
          <button className="btn" onClick={handleGetStarted}>
            Get Started
          </button>
          {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
      <Cards />
      <div className="homepage-container">
        <img src={ImageHome} alt="imageHome" />
        <div className="carrusel-container">
          <h2 className="text-center">Maybe Prefer a Complete Adventure</h2>
          <Carrusel />
        </div>
      </div>
    </>
  );
}
