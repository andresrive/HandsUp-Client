import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { Modal, Button, Form } from "react-bootstrap";
import LoginModal from "./LoginModal";
import './SignUpModal.css'

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
        navigate("/");
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
    onClose()
  };

  return (
    <Modal className="my-modal-sign" show={true} onHide={handleClose}>
      <div className="modal-content-sign">
        <div className="modal-header-sign">
          <h2 className="modal.title-sign">Create an account</h2>
          <button className="close-button-sign" onClick={handleClose}>
            x
          </button>
        </div>
        <div className="modal-body-sign">
          <Form.Group className="form-group-sign" controlId="formBasicUsername">
            <Form.Label className="modal.form-sign" >User Name:</Form.Label>
            <Form.Control
              className="form-control-sign"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsername}
            />
          </Form.Group>

          <Form onSubmit={handleSignupSubmit}>
            <Form.Group className="form-group-sign" controlId="formBasicEmail">
              <Form.Label className="form-label-sign">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="form-group-sign" controlId="formBasicPassword">
              <Form.Label className="form-label-sign" >Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>

            <Form.Group className="form-group-sign" controlId="formBasicPasswordRepeat">
              <Form.Label className="form-label-sign">Repeat Password:</Form.Label>
              <Form.Control
                className="form-control-sign"
                type="password"
                placeholder="Repeat Password"
                value={passwordRepeat}
                onChange={handlePasswordRepeat}
              />
            </Form.Group>
            <Button id="btn-signUp"   type="submit">
              Sign Up
            </Button>
          </Form>

          {errorMessage && <p className="error-message-sign">{errorMessage}</p>}
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </Modal>
  );
}
