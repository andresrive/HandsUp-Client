import { useState, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import "./LoginModal.css";

function LoginModal({ showModal, setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        setShowModal(false);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <Modal className="my-modal" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-title">Welcome to HandsUp! 🙌🏼</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group  className="form-group" controlId="formBasicEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control 
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="btn-secondary2" onClick={() => setShowModal(false)}>
              Close
            </button>
            <button className="btn-primary1" type="submit">
              Log in
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
