import React, { useState } from "react";
import { registerUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Modal, Alert } from "react-bootstrap";
import PasswordChecker from "../Utils/PasswordChecker";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);
  const [retypePassword, setRetypePassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    handle: "",
    telephone: "",
    birthday: "",
    bio: "",
    country: "",
    city: "",
    county: "",
  });

  const navigate = useNavigate();

  const togglePassword1Visibility = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileInput = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const registrationHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = new FormData();
    userData.append("email", formData.email);
    userData.append("password", formData.password);
    userData.append("full_name", formData.full_name);
    userData.append("handle", formData.handle);
    userData.append("telephone", formData.telephone);
    userData.append("birthday", formData.birthday);
    userData.append("bio", formData.bio);
    userData.append("country", formData.country);
    userData.append("city", formData.city);
    userData.append("county", formData.county);

    if (profilePic) {
      userData.append("profile-pic", profilePic);
    }

    if (formData.password !== retypePassword) {
      setIsLoading(false);
      setError("Passwords don't match, please try again.");
    } else {
      registerUser(userData)
        .then(({ user }) => {
          if (user) {
            setIsLoading(false);
            navigate("/email-confirmation");
          } else {
            setIsLoading(false);
            setError(message);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setError({ message: error.message });
        });
    }
  };

  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };

  if (isLoading)
    return (
      <div className="flex flex-col text-center mt-4">
        <i className="fa-solid fa-spinner fa-spin"></i>
        <p>Just registering you, won't be long...</p>
      </div>
    );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={registrationHandler}>
          <div className="form-group mt-2">
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              type="text"
              className="form-control"
              name="full_name"
              value={formData.full_name}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="handle">Handle</label>
            <div className="flex relative items-center">
              <span className="absolute left-2 text-gray-400">@</span>
              <input
                id="handle"
                type="text"
                className="form-control ml-8"
                name="handle"
                value={formData.handle}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="telephone">Telephone</label>
            <input
              id="telephone"
              type="tel"
              className="form-control"
              name="telephone"
              value={formData.telephone}
              onChange={handleInput}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="birthday">Birthday</label>
            <input
              id="birthday"
              type="date"
              className="form-control"
              name="birthday"
              value={formData.birthday}
              onChange={handleInput}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              className="form-control"
              name="bio"
              value={formData.bio}
              onChange={handleInput}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="county">County</label>
            <input
              id="county"
              type="text"
              className="form-control"
              name="county"
              value={formData.county}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="profile_pic">
              Profile Picture (Must be .jpg, .jpeg or .png)
            </label>
            <input
              id="profile_pic"
              type="file"
              className="form-control"
              name="profile_pic"
              onChange={handleFileInput}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password1">Password</label>
            <div style={{ position: "relative" }}>
              <input
                id="password1"
                type={showPassword1 ? "text" : "password"}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInput}
                style={{ paddingRight: "40px" }}
                required
              />
              <button
                className="text-gray-700 cursor-pointer bg-transparent absolute top-2 right-2"
                onClick={togglePassword1Visibility}
                type="button"
              >
                <i
                  className={`fa-solid ${
                    showPassword1 ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password2">Re-type Password</label>
            <div style={{ position: "relative" }}>
              <input
                id="password2"
                type={showPassword2 ? "text" : "password"}
                className="form-control"
                name="retypePassword"
                value={retypePassword}
                onChange={({ target }) => setRetypePassword(target.value)}
                style={{ paddingRight: "40px" }}
                required
              />
              <button
                className="text-gray-700 cursor-pointer bg-transparent absolute top-2 right-2"
                onClick={togglePassword2Visibility}
                type="button"
              >
                <i
                  className={`fa-solid ${
                    showPassword2 ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
            </div>
          </div>
          <PasswordChecker password={formData.password} />
          <div className="d-flex justify-content-center mt-4">
            <button className="confirm-button" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
