import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSession } from "../Context/SessionManager";
import { emailVerification } from "../../api/api";

export default function Welcome() {
  const [searchParams] = useSearchParams();
  const { login } = useSession();
  const navigate = useNavigate();

  const getTokenHash = (encodedUrl) => {
    const mainParams = new URLSearchParams(encodedUrl);

    const confirmationUrl = decodeURIComponent(
      mainParams.get("confirmation_url")
    );

    const confirmationParams = new URLSearchParams(
      confirmationUrl.split("?")[1]
    );

    return confirmationParams.get("token");
  };

  useEffect(() => {
    const confirmationURL = searchParams.get("confirmation_url");

    if (confirmationURL) {
      const tokenHash = getTokenHash(searchParams.toString());

      if (tokenHash) {
        handleConfirm(tokenHash);
      } else {
        console.error("Token hash is missing.");
        navigate("/");
      }
    }
  }, [searchParams, navigate]);

  const handleConfirm = async (tokenHash) => {
    try {
      const response = await emailVerification(tokenHash);

      if (response.status === 200) {
        const { session, user } = response.data;

        login(session, user);
        navigate("/");
      } else {
        console.error("Email confirmation failed.");
        navigate("/");
      }
    } catch (error) {
      console.error("Confirmation process failed:", error.message);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>Thank you for confirming your email. You are being redirected...</p>
    </div>
  );
}
