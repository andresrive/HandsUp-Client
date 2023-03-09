import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import videoBg from "../../assets/videobg.mp4";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homepage-video-container">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="homepage-video-overlay">
          <h1>Bring your backpack, we'll bring the friends</h1>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Get Started</span>
          </button>
        </div>
      </div>
    </>
  );
}
