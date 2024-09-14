import React from "react";
import { useSession } from "../Context/SessionManager";
import { Link } from "react-router-dom";

export default function HeaderNav({ roomTitle }) {
  const { user } = useSession();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={`nav-item ${
          roomTitle === "Nation Live" ? "selected-nav-item" : ""
        }`}
      >
        Nation Live
      </Link>
      <Link
        to="/speakers-corner"
        className={`nav-item ${
          roomTitle === "SPEAKERS CORNER" ? "selected-nav-item" : ""
        }`}
      >
        Speaker's Corner
      </Link>
      {user && (
        <>
          <Link
            to="/community"
            className={`nav-item ${
              roomTitle === "COMMUNITY" ? "selected-nav-item" : ""
            }`}
          >
            Community
          </Link>

          <Link
            to="/town-hall"
            className={`nav-item ${
              roomTitle === "TOWN HALL" ? "selected-nav-item" : ""
            }`}
          >
            Town Hall
          </Link>
        </>
      )}

      <Link
        to="/protests"
        className={`nav-item ${
          roomTitle === "PROTESTS" ? "selected-nav-item" : ""
        }`}
      >
        Protests
      </Link>
      {user && (
        <>
          <Link
            to="/messages"
            className={`nav-item ${
              roomTitle === "MESSAGES" ? "selected-nav-item" : ""
            }`}
          >
            Messages
          </Link>
          <Link
            to="/notifications"
            className={`nav-item ${
              roomTitle === "NOTIFICATIONS" ? "selected-nav-item" : ""
            }`}
          >
            Notifications
          </Link>
        </>
      )}

      {user && (
        <>
          <div className="mx-4">|</div>
          <Link
            to="/profile"
            className={`nav-item ${
              roomTitle === "PROFILE" ? "selected-nav-item" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className={`nav-item ${
              roomTitle === "SETTINGS" ? "selected-nav-item" : ""
            }`}
          >
            Settings
          </Link>
        </>
      )}
    </nav>
  );
}
