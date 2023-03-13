import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { Modal, Button, Form } from "react-bootstrap";
import LoginModal from "./LoginModal";

export default function SignUpModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordRepeat = (e) => setPasswordRepeat(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, username };
    authService
      .signup(requestBody)
      .then((response) => {
        onClose(); // cerrar modal al registrarse
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleClose = () => {
    setErrorMessage(undefined); // limpiar mensaje de error al cerrar
    onClose();
  };
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Sign Up</h2>
          <button className="close-button" onClick={handleClose}>
            x
          </button>
        </div>
        <div className="modal-body">
          <Form.Group controlId="formBasicUsername">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsername}
            />
          </Form.Group>

          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                value={passwordRepeat}
                onChange={handlePasswordRepeat}
              />
            </Form.Group>

            <button
              className="close-button"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>Already have an account?</p>
          <Link to="#" onClick={handleModalOpen}>
            Log in
          </Link>
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </Modal>
  );
}
