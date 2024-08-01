import React from "react";
// import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

export default function HeaderNav({ pageTitle }) {
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
      <Link
        to="/protests"
        className={`nav-item ${
          pageTitle === "PROTESTS" ? "selected-nav-item" : ""
        }`}>
        Protests
      </Link>
      <Link
        to="/messages"
        className={`nav-item ${
          pageTitle === "MESSAGES" ? "selected-nav-item" : ""
        }`}>
        Messages
      </Link>
      <div className="mx-4">|</div>
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
    </nav>
  );
}
