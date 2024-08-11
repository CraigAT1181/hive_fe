import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;

export const getUsers = async () => {
  const { data } = await api.get(`/users`);

  return data;
};

export const registerUser = async (
  email,
  password,
  full_name,
  handle,
  telephone,
  profile_pic,
  birthday,
  bio,
  country,
  city,
  county
) => {
  const { data } = await api.post("/users", {
    email,
    password,
    full_name,
    handle,
    telephone,
    profile_pic,
    birthday,
    bio,
    country,
    city,
    county,
  });

  return data;
};

export const loginUser = async (email, password) => {
  const { data } = await api.post("/users/login", {
    email,
    password,
  });

  return data;
};

export const authenticateUser = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await api.get("/users/authenticate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};
