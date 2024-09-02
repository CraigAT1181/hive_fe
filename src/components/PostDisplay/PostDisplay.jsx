import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import { fetchSinglePost } from "../../api/api";

export default function PostDisplay({ posts }) {
  console.log("postDisplay:", posts);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [parentPost, setParentPost] = useState(null);
  const [replies, setReplies] = useState([]);

  const handlePostClick = (postId) => {
    setIsLoading(true);

    fetchSinglePost(postId)
      .then(({ data }) => {
        setIsLoading(false);
        console.log("data:", data);
        setSelectedPost(data.postWithParent);
        console.log("postWithParent:", data.postWithParent);
        setParentPost(data.postWithParent.parentPost);
        console.log("parentPost:", data.postWithParent.parentPost);
        setReplies(data.replies);
        console.log("replies:", data.replies);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
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
      {selectedPost ? (
        <>
          {parentPost && (
            <div className="parent-post-container">
              <div onClick={() => handlePostClick(parentPost.id)}>
                <PostCard post={parentPost} parentName={null} />
              </div>
            </div>
          )}

          <div className="selected-post-container">
            <div onClick={() => handlePostClick(selectedPost.id)}>
              <PostCard
                post={selectedPost}
                parentName={parentPost?.users?.handle}
              />
            </div>
          </div>

          <div className="replies-container">
            {replies &&
              replies.map((reply) => {
                return (
                  <div key={reply.id} onClick={() => handlePostClick(reply.id)}>
                    <PostCard
                      post={reply}
                      parentName={selectedPost.users.handle}
                    />
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          {posts.map((post) => {
            // if (post.is_reply === false) {
            return (
              <div key={post.id} onClick={() => handlePostClick(post.id)}>
                <PostCard post={post} />
              </div>
            );
            // }
          })}
        </>
      )}
    </div>
  );
}
