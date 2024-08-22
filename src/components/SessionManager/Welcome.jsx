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

  const confirmationURL = searchParams.get("confirmation_url");

  const getQueryParams = (url) => {
    const params = new URLSearchParams(url.split("?")[1]);
    return {
      accessToken: params.get("token"),
      refreshToken: params.get("refresh_token"),
    };
  };

  useEffect(() => {
    if (confirmationURL) {
      const { accessToken, refreshToken } = getQueryParams(confirmationURL);

      if (accessToken) {
        handleConfirm(accessToken, refreshToken);
      }
    }
  }, [confirmationURL]);

  const handleConfirm = async (accessToken, refreshToken) => {
    try {
      const userInfo = await authenticateUser(accessToken);

      if (userInfo) {
        const session = {
          access_token: accessToken,
          refresh_token: refreshToken,
        };

        login(session, userInfo);
        navigate("/");
      }
    } catch (error) {
      console.error("Confirmation process failed:", error);
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
