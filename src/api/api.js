import { handleInvalidToken } from "../components/Utils/handleInvalidToken.jsx";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090",
});

export default api;

export const getUsers = async () => {
  const { data } = await api.get(`/users`);

  return data;
};

export const registerUser = async (userDetails) => {
  try {
    const { data } = await api.post("/users", userDetails);
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const loginUser = async (email, password) => {
  const { data } = await api.post("/users/login", {
    email,
    password,
  });
  console.log(data);
  return data;
};

export const authenticateUser = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await api.get("/users/authenticate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.user;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        handleInvalidToken();
      } else {
        localStorage.removeItem("token");
        console.error("An error occurred during authentication:", error);
      }
      return null;
    }
  }

  return null;
};

export const logout = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    await api.post("/users/logout", {});

    localStorage.removeItem("token");
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await api.delete(`/users/${userId}`);
    return data.message;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
