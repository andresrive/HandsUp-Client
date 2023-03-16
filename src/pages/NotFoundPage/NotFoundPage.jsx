import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Oops!</h1>
      <p className="not-found-text">We can't seem to find the page you're looking for.</p>
      <Link to="/">
      <button className="not-found-button">Go Back</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;

