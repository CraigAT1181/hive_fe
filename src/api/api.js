import { handleInvalidToken } from "../components/Utils/handleInvalidToken.jsx";
import axios from "axios";

const api = axios.create({
  baseURL: "https://hive-be-ggxy.onrender.com",
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

  return data;
};

export const emailVerification = async (tokenHash, email) => {
  try {
    const response = await api.post("/email-confirmation", {
      tokenHash,
      email,
    });
    return response;
  } catch (error) {
    console.error("Error in email verification:", error.message);
    throw error;
  }
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

export const fetchPosts = async (room) => {
  try {
    const data = await api.get(`/posts/${room}`);

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchSinglePost = async (postId) => {
  
  try {
    const data = await api.get(`/post/${postId}`);
console.log("API data", data);
    return data;
  } catch (error) {
    console.error("Error fetching single post data:", error);
    throw error;
  }
};

export const addPost = async (formData) => {
  try {
    const data = await api.post("/posts", formData);

    return data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
}