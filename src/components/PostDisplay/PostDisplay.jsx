import React from "react";
import PostCard from "../PostCard/PostCard";

export default function PostDisplay() {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="post-display-container">
      <div>
        {posts.map((x) => {
          return <PostCard key={x} />;
        })}
      </div>
    </div>
  );
}
