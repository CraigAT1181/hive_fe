import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../api/api";

export default function PostDisplay({ room }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPosts(room);
  }, [room]);

  const getPosts = (room) => {
    setIsLoading(true);
    fetchPosts(room)
      .then(({ data: { posts } }) => {
        setIsLoading(false);
        setPosts(posts);
      })
      .catch(({ error }) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-display-container">
      {posts.map((post) => {
        if (!post.is_reply) {
          return (
            <div key={post.id}>
              <PostCard post={post} handlePostClick={handlePostClick} />
            </div>
          );
        }
      })}
    </div>
  );
}
