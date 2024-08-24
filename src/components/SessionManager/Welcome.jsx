import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSession } from "../Context/SessionManager";
import { emailVerification } from "../../api/api";

export default function Welcome() {
  const [searchParams] = useSearchParams();
  const { login } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract confirmation URL and data directly from the query parameters
    const confirmationURL = searchParams.get("confirmation_url");
    const userData = searchParams.get("data");

    if (confirmationURL && userData) {
      const { tokenHash, email } = getQueryParams(confirmationURL, userData);

      if (tokenHash && email) {
        handleConfirm(tokenHash, email);
      } else {
        console.error("Token hash or email is missing.");
        navigate("/");
      }
    }
  }, [searchParams, navigate]);

  const getQueryParams = (confirmationUrl, userData) => {
    // Parse the confirmationUrl to get the tokenHash
    const confirmationParams = new URLSearchParams(
      confirmationUrl.split("?")[1]
    );
    const tokenHash = confirmationParams.get("token");

    // Manually parse the map-like string format for userData
    let email;
    const emailMatch = userData.match(/email:([^ ]+)/);
    if (emailMatch && emailMatch.length > 1) {
      email = emailMatch[1]; // Extract the email
    } else {
      console.error("Failed to extract email from userData:", userData);
    }

    return {
      tokenHash,
      email,
    };
  };

  const handleConfirm = async (tokenHash, email) => {
    try {
      const response = await emailVerification(tokenHash, email);

      if (response.status === 200) {
        const { session, user } = response.data;
        login(session, user);
        navigate("/");
      } else {
        console.error("Email confirmation failed.");
        // navigate("/");
      }
    } catch (error) {
      console.error("Confirmation process failed:", error.message);
      // navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>Thank you for confirming your email. You are being redirected...</p>
    </div>
  );
}
