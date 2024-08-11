import React, { useState } from "react";
import { loginUser } from "../../api/api";
import { useSession } from "../Context/SessionManager";
import { useNavigate } from "react-router-dom";
import { Modal, Alert } from "react-bootstrap";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const { login } = useSession();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    loginUser(email, password)
      .then(({ user, authData }) => {
        setIsLoading(false);
        const token = authData.session.access_token;
        login(user, token);

        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
        setError("Invalid username or password.");
      });
  };

  if (isLoading)
    return (
      <div className="">
        <p>Logging you in!</p>
        <i className="fa-solid fa-spinner fa-spin"></i>
      </div>
    );

  return (
    <Modal
      show={show}
      onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <div className="flex flex-col text-center">
            <p className="text-red-800 m-0">{error}</p>
            <div>
              <button
                className="reset-password"
                onClick={() => {
                  navigate("/request-link");
                }}>
                Reset password
              </button>
            </div>
          </div>
        )}
        <form onSubmit={loginHandler}>
          <div className="form-group my-2">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              className="form-control"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="text-gray-800 cursor-pointer bg-transparent absolute top-8 right-2"
              onClick={togglePasswordVisibility}
              type="button">
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}></i>
            </button>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="confirm-button"
              type="submit">
              Confirm
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
