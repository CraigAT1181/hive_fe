import React from "react";
import { useSession } from "../Context/SessionManager";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HeaderDrawer({ isDrawerOpen, toggleDrawer }) {
  const { user, handleLogout } = useSession();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className={`drawer-secondary transform ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform`}
      onClick={toggleDrawer}
    >
      <div className="drawer-primary" onClick={(e) => e.stopPropagation()}>
        <button onClick={toggleDrawer} className="drawer-close">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="drawer-user-section">
          {user ? (
            <>
              <div>
                <img
                  src={user.profile_pic}
                  className="drawer-profile-icon"
                  alt="User's profile picture"
                />
              </div>
              <div>
                <p className="mb-0">{user.full_name}</p>
                <p className="mb-0">{user.handle}</p>
                <p>{user.city}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center m-0 font-semibold">
                <p>Join the Hive!</p>
              </div>
              <div className="flex justify-center">
                <button className="login-button-drawer" onClick={handleLogin}>
                  Login
                </button>
                <button
                  className="register-button-drawer"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
        <hr />

        <nav className="drawer-nav">
          <Link to="/" className="drawer-nav-item" onClick={toggleDrawer}>
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-tower-broadcast"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Nation Live</p>
              </div>
            </div>
          </Link>
          <Link
            to="/speakers-corner"
            className="drawer-nav-item"
            onClick={toggleDrawer}
          >
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Speaker's Corner</p>
              </div>
            </div>
          </Link>
          {user && (
            <>
              <Link
                to="/community"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
                <div className="flex">
                  <div className="mr-4 w-6">
                    <i className="fa-solid fa-users-line"></i>
                  </div>
                  <div>
                    <p className="mb-0 font-semibold">Community</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/town-hall"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
                <div className="flex">
                  <div className="mr-4 w-6">
                    <i className="fa-solid fa-house-flag"></i>
                  </div>
                  <div>
                    <p className="mb-0 font-semibold">Town Hall</p>
                  </div>
                </div>
              </Link>
            </>
          )}

          <Link
            to="/protests"
            className="drawer-nav-item"
            onClick={toggleDrawer}
          >
            <div className="flex">
              <div className="mr-4 w-6">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div>
                <p className="mb-0 font-semibold">Protests</p>
              </div>
            </div>
          </Link>
          {user && (
            <>
              <Link
                to="/messages"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
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
                to="/messages"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
                <div className="flex">
                  <div className="mr-4 w-6">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div>
                    <p className="mb-0 font-semibold">Notifications</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/profile"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
                <div className="flex  mt-16">
                  <div className="mr-4 w-6">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div>
                    <p className="mb-0 font-semibold">Profile</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/settings"
                className="drawer-nav-item"
                onClick={toggleDrawer}
              >
                <div className="flex">
                  <div className="mr-4 w-6">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                  <div>
                    <p className="mb-0 font-semibold">Settings</p>
                  </div>
                </div>
              </Link>
            </>
          )}
        </nav>
        {user && (
          <div className="flex justify-center">
            <button className="logout-button-drawer" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <div className="bg-gray-700 flex justify-center">
          <img src={"/H.png"} alt="Hive logo" className="h-36 w-36" />
        </div>
      </div>
    </div>
  );
}
