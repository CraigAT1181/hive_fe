import React, { useEffect, useState } from "react";
import { useSession } from "../Context/SessionManager";
import HeaderDrawer from "./HeaderDrawer";
import HeaderNav from "./HeaderNav";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [roomTitle, setroomTitle] = useState("");
  const { user, handleLogout } = useSession();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1).toUpperCase() || "Nation Live";
    let title;

    if (!path.includes("POSTS")) {
      title = path.split("-").join(" ");
    }

    setroomTitle(title);
  }, [location]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="hidden lg:block"></div>
      <div className="flex items-center lg:hidden">
        <button onClick={toggleDrawer} className="hamburger ml-1">
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-grow justify-center lg:hidden">
        <span className="text-3xl font-thin">{roomTitle}</span>
      </div>

      <div className="hidden lg:block">
        <HeaderNav roomTitle={roomTitle} />
      </div>
      <div className="hidden lg:block">
        {user ? (
          <button className="logout-button-nav" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div>
            <span className="mr-4 font-semibold">Join the Hive!</span>
            <button className="login-button-nav" onClick={handleLogin}>
              Login
            </button>
            <button className="register-button-nav" onClick={handleRegister}>
              Register
            </button>
          </div>
        )}
      </div>

      <HeaderDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
}
