import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser, logout } from "../../api/api";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authenticateUser();
        setUser(userData);
      } catch (error) {
        setUser(null);
        console.error("Failed to fetch user information", error);
      }
    };

    fetchUser();
    
    console.log(user);
  }, []);

  const login = (session, user) => {
    try {
      localStorage.setItem("token", session.access_token);
      setUser(user);
    } catch (error) {
      console.error("error", error);
      handleLogout();
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ user, login, handleLogout }}>
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
