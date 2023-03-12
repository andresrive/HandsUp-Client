import "./HomePage.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/video3.mp4";
import SignUpModal from "../../components/Modal/SignUpModal";

import Enjoy from '../../assets/enjoy.avif'
import Meet from '../../assets/meet.avif'
import Create from '../../assets/create-plan.jpeg'

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
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <img src={Create} className="card-img-top card-img-small" alt="Imagen 1" />
              <div className="card-body">
                <h5 className="card-title">Create Your Plan</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src={Meet} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <h5 className="card-title">Meet New People</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src={Enjoy} className="card-img-top" alt="Imagen 3" />
              <div className="card-body">
                <h5 className="card-title">Enjoy It!</h5>
                <p className="card-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
