import React from "react";
import { useSession } from "../Context/SessionManager";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HeaderNav({ pageTitle }) {
  const { user, handleLogout } = useSession();

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`nav-item ${
          pageTitle === "Nation Live" ? "selected-nav-item" : ""
        }`}>
        Nation Live
      </Link>
      <Link
        to="/speakers-corner"
        className={`nav-item ${
          pageTitle === "SPEAKERS CORNER" ? "selected-nav-item" : ""
        }`}>
        Speaker's Corner
      </Link>
      {user && (
        <>
          <Link
            to="/community"
            className={`nav-item ${
              pageTitle === "COMMUNITY" ? "selected-nav-item" : ""
            }`}>
            Community
          </Link>

          <Link
            to="/town-hall"
            className={`nav-item ${
              pageTitle === "TOWN HALL" ? "selected-nav-item" : ""
            }`}>
            Town Hall
          </Link>
        </>
      )}

      <Link
        to="/protests"
        className={`nav-item ${
          pageTitle === "PROTESTS" ? "selected-nav-item" : ""
        }`}>
        Protests
      </Link>
      {user && (
        <>
          <Link
            to="/messages"
            className={`nav-item ${
              pageTitle === "MESSAGES" ? "selected-nav-item" : ""
            }`}>
            Messages
          </Link>
          <Link
            to="/notifications"
            className={`nav-item ${
              pageTitle === "NOTIFICATIONS" ? "selected-nav-item" : ""
            }`}>
            Notifications
          </Link>
        </>
      )}

      <div className="mx-4">|</div>

      {user ? (
        <>
          <Link
            to="/profile"
            className={`nav-item ${
              pageTitle === "PROFILE" ? "selected-nav-item" : ""
            }`}>
            Profile
          </Link>
          <Link
            to="/settings"
            className={`nav-item ${
              pageTitle === "SETTINGS" ? "selected-nav-item" : ""
            }`}>
            Settings
          </Link>
          <div className="mx-4">|</div>
          <button
              className="logout-button-nav"
              onClick={handleLogout}>
              Logout
            </button>
        </>
      ) : (
        <div>
          <span className="mr-4 font-semibold">Join the Hive!</span>
          <button
            className="login-button"
            onClick={handleLogin}>
            Login
          </button>
          <button
            className="register-button"
            onClick={handleRegister}>
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
