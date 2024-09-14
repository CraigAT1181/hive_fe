import React, { useState } from "react";

export default function PostInputBox() {
  const [messageInput, setMessageInput] = useState("");

  const onSendMessage = () => {
    if (messageInput.trim() !== "") {
    }
    setMessageInput("");
  };

  function handleChange(e) {
    setMessageInput(e.target.value);
  }

  function handleSend(e) {
    e.preventDefault();
    onSendMessage();
  }

  return (
    <div className="post-input-box">
      <form onSubmit={handleSend}>
        <div className="w-full relative">
          <label htmlFor="comment-input" className="form-label"></label>
          <input
            id="comment-input"
            className="message-input"
            type="text"
            placeholder="Post your message here"
            value={messageInput}
            onChange={handleChange}
          />
          {messageInput && (
            <button
              id="comment-button"
              className="message-send-button"
              type="submit"
            >
              <i className="fa-solid fa-xl text-gray-700 fa-arrow-right"></i>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
