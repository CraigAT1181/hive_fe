import React, { useEffect, useState } from "react";
import HeaderDrawer from "./HeaderDrawer";
import HeaderNav from "./HeaderNav";
import SessionManager from "./SessionManager";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1).toUpperCase() || "HOME";

    const title = path.split("-").join(" ");

    setPageTitle(title);
  }, [location]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="flex items-center lg:hidden">
        <button
          onClick={toggleDrawer}
          className="hamburger ml-1">
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
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-grow justify-center lg:hidden">
        <span className="text-2xl font-thin">{pageTitle}</span>
      </div>
      <div className="hidden lg:block">
        <HeaderNav pageTitle={pageTitle} />
      </div>
      {/* <div className="hidden lg:block">
        <SessionManager />
      </div> */}
      <HeaderDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </header>
  );
}
