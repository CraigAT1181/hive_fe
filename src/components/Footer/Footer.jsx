import React, { useState } from "react";

export default function Footer() {
  const [messageInput, setMessageInput] = useState("");

  const onSendMessage = () => {
    if (messageInput.trim() !== "") {
      console.log("Sent!");
    }
  };

  function handleChange(e) {
    setMessageInput(e.target.value);
  }

  function handleSend(e) {
    e.preventDefault();
    onSendMessage();
  }

  return (
    <div className="footer">
      <div className="my-4">
        <form onSubmit={handleSend}>
          <div className="w-full relative">
            <label
              htmlFor="comment-input"
              className="form-label"></label>
            <input
              id="comment-input"
              className="message-input"
              type="text"
              placeholder="Type your message here"
              value={messageInput}
              onChange={handleChange}
            />
            {messageInput && (
              <button
                id="comment-button"
                className="message-send-button"
                type="submit">
                <i className="fa-solid fa-xl text-gray-700 fa-arrow-right"></i>
              </button>
            )}
          </div>
        </form>
      </div>
      <p className="text-white mb-0">&copy; 2024 Hive.</p>
    </div>
  );
}
