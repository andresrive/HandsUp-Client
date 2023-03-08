import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/auth.context";
import mountainLarge from '../';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const headerRef = useRef(null);

  useEffect(() => {
    const isScrolling = () => {
      const headerScroll = document.querySelector('.primary-header')
      let windowPosition = window.scrollY > 250
      headerScroll.classList.toggle('active', windowPosition)
    }
    window.addEventListener('scroll', isScrolling)

    return () => {
      window.removeEventListener('scroll', isScrolling)
    }
  }, [])

  return (
    <header className="primary-header" ref={headerRef}>
			<nav className="navbar container">
				<Link to="#" className="logo">HandsUp 🙌🏼.</Link>
				<ul className="nav-list">
					<li>
						<Link to="#" className="nav-link">Home</Link>
					</li>
					<li>
						<Link to="#" className="nav-link">Pricing</Link>
					</li>
					<li>
						<Link to="#" className="nav-link">Dates</Link>
					</li>
					<li>
						<Link to="#" className="nav-link">Testimonials</Link>
					</li>
					<li>
						<Link to="#" className="nav-link">Contact</Link>
					</li>
				</ul>
				<Link to="#" className="button">Book now</Link>
			</nav>
		</header>


  )
}

export default Navbar;
