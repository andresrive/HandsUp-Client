import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
	<>
    <header className={`primary-header ${isScrolled ? 'active' : ''}`}>
      <nav className="navbar container">
        <Link to="#" className="logo">
          HANDSUP
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/plans" className="nav-link">
              Plans
            </Link>
          </li>
          <li>
            <Link to="/packs" className="nav-link">
              Packs
            </Link>
          </li>
        </ul>
        <Link to="/signup" className="button">
          Sign Up
        </Link>
      </nav>
    </header>
	
	</>
  );
}

export default Navbar;
