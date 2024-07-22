import React from "react";
// import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

export default function DrawerHeader({ isDrawerOpen, toggleDrawer }) {
  //   const { user, logout } = useAuth();

  return (
    <div
      className={`drawer-secondary transform ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform`}
      onClick={toggleDrawer}>
      <div
        className="drawer-primary"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={toggleDrawer}
          className="drawer-close">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="drawer-user-section">
          <img
            className="profile-icon"
            alt=""
          />
          <p className="mb-0">Username</p>
          <p>Handle</p>
        </div>
        <nav className="drawer-nav">
          <Link
            to="/profile"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Profile</p>
              </div>
            </div>
          </Link>
          <Link
            to="/town-hall"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-house-flag"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Town Hall</p>
              </div>
            </div>
          </Link>
          <Link
            to="/speakers-corner"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Speaker's Corner</p>
              </div>
            </div>
          </Link>
          <Link
            to="/community"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-people-arrows"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Community</p>
              </div>
            </div>
          </Link>
          <Link
            to="/messages"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Messages</p>
              </div>
            </div>
          </Link>

          <Link
            to="/protests"
            className="drawer-nav-item"
            onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
              <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Protests</p>
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
