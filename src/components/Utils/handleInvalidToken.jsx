import { useNavigate } from "react-router-dom";

export const handleInvalidToken = () => {
  const navigate = useNavigate();
  localStorage.removeItem("token");

  navigate("/");
};
