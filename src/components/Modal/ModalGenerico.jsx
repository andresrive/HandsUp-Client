import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { Modal, Button, Form } from "react-bootstrap";
import LoginModal from "./LoginModal";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

export default function ModalGenerico() {
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
                navigate("/");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [errorMessageLog, setErrorMessageLog] = useState(undefined);

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmailLog = (e) => setEmailLog(e.target.value);
    const handlePasswordLog = (e) => setPasswordLog(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        authService
            .login(requestBody)
            .then((response) => {
                storeToken(response.data.authToken);
                authenticateUser();
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessageLog(errorDescription);
            });
    };

    return (<>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal.title-sign">Sign Up</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <Button className="btn-primary1-sign" type="submit">
                                Sign Up
                            </Button>
                        </Form>

                        {errorMessage && <p className="error-message-sign">{errorMessage}</p>}

                        <p>Already have an account?</p>

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Modal.Body className="modal-body">
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="form-group" controlId="formBasicEmail">
                                <Form.Label className="form-label">Email address</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    type="email"
                                    placeholder="Enter email"
                                    value={emailLog}
                                    onChange={handleEmailLog}
                                />
                            </Form.Group>

                            <Form.Group className="form-group" controlId="formBasicPassword">
                                <Form.Label className="form-label">Password</Form.Label>
                                <Form.Control
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    value={passwordLog}
                                    onChange={handlePasswordLog}
                                />
                            </Form.Group>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            {/* <button className="btn-secondary2" onClick={() => setShowModal(false)}>
              Close
            </button> */}
                            <button className="btn-primary1" type="submit">
                                Log in
                            </button>
                        </Form>
                    </Modal.Body>
                    <div className="modal-footer">
                        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
    </>
    )
}