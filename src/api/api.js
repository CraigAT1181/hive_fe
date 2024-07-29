import axios from "axios";

const api = axios.create({
  baseURL: "https://hive-be-ggxy.onrender.com",
});

export default api;

export const getUsers = async () => {
    const { data } = await api.get(`/users`);
  
    return data;
  };