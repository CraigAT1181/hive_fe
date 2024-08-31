import React from "react";
import PostCard from "../PostCard/PostCard";

export default function PostDisplay({ posts }) {
  console.log("postDisplay:", posts);
  return (
    <div className="post-display-container">
      {posts.map((post) => {
        if (post.is_reply === false) {
          return <PostCard key={post.id} post={post} />;
        }
      })}
    </div>
  );
}
