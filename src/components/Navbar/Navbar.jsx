import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import LoginModal from "../Modal/LoginModal";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" to="/">
          HANDSUP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
          <ul className="links-nav navbar-nav ms-auto mx-4">
            <li
              className="nav-item dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <Link
                className="nav-link dropdown-toggle"
                to="/plans"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plans
              </Link>
              <ul
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/plans/create">
                    Create Plan
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={toggleDropdown2}
              onMouseLeave={toggleDropdown2}
            >
              <Link
                className="nav-link dropdown-toggle mx-4"
                to="/packs"
                id="navbarDropdownMenuLink2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Packs
              </Link>
              <ul
                className={`dropdown-menu ${dropdownOpen2 ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <li>
                  <Link className="dropdown-item  " to="/packs/create">
                    Create Pack
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {isLoggedIn ? (
              <button
                className="buton"
                onClick={() => {
                  logOutUser();
                  setShowLoginModal(true);
                }}
                to="/"
              >
                Log Out
              </button>
            ) : (
              <button
                className="buton"
                onClick={() => setShowLoginModal(true)}
              >
                Log In
              </button>
            )}
            <LoginModal showModal={showLoginModal} setShowModal={handleLoginClose} />
          </div>
        </div>
      </div>
    </nav>
  );
}
