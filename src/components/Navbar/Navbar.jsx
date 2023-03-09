import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import { Modal, Button, Form } from "react-bootstrap";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const { logOutUser } = useContext(AuthContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
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
                className="nav-link dropdown-toggle"
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
                  <Link className="dropdown-item" to="/packs/create">
                    Create Pack
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            {/* <Link className="btn btn-outline-success me-2" type="button" to="/login">
              Log in
            </Link> */}
            <Link
              className="btn btn-outline-success me-2"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Log in
            </Link>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" to="" onClick={() => setShowModal(false)}>
                  Log in
                </Button>
              </Modal.Footer>
            </Modal>
            <Link
              className="btn btn-outline-success"
              onClick={() => {
                logOutUser();
                setShowModal(false);
              }}
              to="/"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
