import React, { useEffect, useState } from "react";
import PostDisplay from "../PostDisplay/PostDisplay";
import { fetchPosts } from "../../api/api";

export default function NationLive() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setIsLoading(true);
    fetchPosts()
      .then(({ data: { posts } }) => {
        setIsLoading(false);
        setPosts(posts);
      })
      .catch(({ error }) => {
        setIsLoading(false);
        setError(error);
      });
  };

  if (error) {
    return (
      <div>
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="nation-live-container">
      {posts && <PostDisplay posts={posts} />}
    </div>
  );
}
