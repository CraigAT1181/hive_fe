import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // Login
  const login = (user, session) => {
    try {
      setUser(user);
      localStorage.setItem("token", session.access_token);
    } catch (error) {
      console.error("error", error);
      handleLogout();
    }
  };

  // Logout function
  const logout = () => {
    handleLogout();
  };

  // Function to handle user logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider.");
  }

  return context;
};
