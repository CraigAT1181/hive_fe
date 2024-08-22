import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSession } from "../Context/SessionManager";
import { authenticateUser } from "../../api/api";

export default function Welcome() {
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(true);
  const { login } = useSession();
  const navigate = useNavigate();

  // Function to extract accessToken and refreshToken from confirmation_url
  const getQueryParams = (encodedUrl) => {
    // Decode the main query params first
    const mainParams = new URLSearchParams(encodedUrl);

    // Get the encoded confirmation_url from the main query params
    const confirmationUrl = decodeURIComponent(
      mainParams.get("confirmation_url")
    );

    // Now, parse the query params within the confirmation_url
    const confirmationParams = new URLSearchParams(
      confirmationUrl.split("?")[1]
    );

    return {
      accessToken: confirmationParams.get("token"),
      refreshToken: confirmationParams.get("refresh_token"),
    };
  };

  useEffect(() => {
    const confirmationURL = searchParams.get("confirmation_url");

    if (confirmationURL) {
      const { accessToken, refreshToken } = getQueryParams(
        searchParams.toString()
      );

      if (accessToken) {
        handleConfirm(accessToken);
      }
    }
  }, [searchParams]);

  const handleConfirm = async (accessToken, refreshToken) => {
    try {
      const userInfo = await authenticateUser(accessToken);

      if (userInfo) {
        const session = {
          access_token: accessToken,
          refresh_token: refreshToken,
        };

        login(session, userInfo);
        navigate("/"); // Redirect after successful login
      } else {
        console.error("Authentication failed: No user info returned.");
      }
    } catch (error) {
      console.error("Confirmation process failed:", error.message);
    }
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Hive!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col justify-center items-center">
          <p>
            Thank you for confirming your email. You are being redirected...
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
