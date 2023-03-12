import "./HomePage.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/videobg.mp4";
import SignUpModal from "../../components/Modal/SignUpModal";

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
          <button className="btn" onClick={handleGetStarted}>Get Started</button>
          {showModal && <SignUpModal show={showModal} onHide={() => setShowModal(false)} />}
        </div>
      </div>
    </>
  );
}


