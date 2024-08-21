import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

export default function ConfirmEmail() {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Email Sent!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex text-center">
          <p className="text-red-800 m-0">
            Check your email and click the link to login!
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
