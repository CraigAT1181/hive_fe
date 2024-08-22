import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

export default function Welcome() {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Hive!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col justify-center items-center">
          <button>Complete Signup</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
