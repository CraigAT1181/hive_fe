import React from "react";

export default function MediaInputPanel() {
  const icons = [
    { type: "image", icon: <i className="fa-regular fa-image"></i> },
    { type: "video", icon: <i className="fa-solid fa-video"></i> },
  ];

  const handleMediaIconClick = (type) => {
    if (type === "image") {
      console.log("Upload image!");
    } else if (type === "video") {
      console.log("Upload video!");
    }
  };

  return (
    <div className="media-input-panel">
      {icons.map((media, index) => (
        <div
          key={index}
          className="media-icons"
          onClick={() => handleMediaIconClick(media.type)}
        >
          {media.icon}
        </div>
      ))}
    </div>
  );
}
