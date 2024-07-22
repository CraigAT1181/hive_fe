import React from "react";
// import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

export default function NavbarHeader({ pageTitle }) {
  return (
    <nav className="navbar">
      <Link
        to="/profile"
        className={`nav-item ${
          pageTitle === "PROFILE" ? "selected-nav-item" : ""
        }`}>
        Profile
      </Link>

      <Link
        to="/town-hall"
        className={`nav-item ${
          pageTitle === "TOWN HALL" ? "selected-nav-item" : ""
        }`}>
        Town Hall
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
        to="/messages"
        className={`nav-item ${
          pageTitle === "MESSAGES" ? "selected-nav-item" : ""
        }`}>
        Messages
      </Link>

      <Link
        to="/protests"
        className={`nav-item ${
          pageTitle === "PROTESTS" ? "selected-nav-item" : ""
        }`}>
        Protests
      </Link>
    </nav>
  );
}
