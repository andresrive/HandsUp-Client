import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { Modal, Button, Form } from "react-bootstrap";

export default function SignUpModal() {
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
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleClose = () => navigate("/");

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
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

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </Modal.Body>
    </Modal>
  );
}
