import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import { fetchSinglePost } from "../../api/api";

export default function PostDisplay({ posts }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [parentPost, setParentPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [postHistory, setPostHistory] = useState([]);
  const [replyingToPostId, setReplyingToPostId] = useState(null); // Store postId for replies

  const handlePostClick = (postId) => {
    if (!selectedPost) {
      setPostHistory([...postHistory, { type: "list", posts }]);
    } else {
      setPostHistory([
        ...postHistory,
        { type: "detail", selectedPost, parentPost, replies },
      ]);
    }

    setIsLoading(true);

    fetchSinglePost(postId)
      .then(({ data }) => {
        setIsLoading(false);
        setSelectedPost(data.postWithParent);
        setParentPost(data.postWithParent.parentPost);
        setReplies(data.replies);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };

  const handleReplyClick = (postId) => {
    // Toggle reply input for the selected post
    setReplyingToPostId(replyingToPostId === postId ? null : postId);
  };

  const handleBackClick = () => {
    const previousState = postHistory[postHistory.length - 1];
    setPostHistory(postHistory.slice(0, -1));

    if (previousState.type === "list") {
      setSelectedPost(null);
      setParentPost(null);
      setReplies([]);
    } else if (previousState.type === "detail") {
      setSelectedPost(previousState.selectedPost);
      setParentPost(previousState.parentPost);
      setReplies(previousState.replies);
    }
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
          {postHistory.length > 0 && (
            <div className="flex justify-end mb-2">
              <button
                className="relative bg-gray-700 text-white text-center py-1 px-8 rounded-full"
                onClick={handleBackClick}>
                <i className="fa-solid absolute left-2 top-2 fa-chevron-left"></i>{" "}
                Back
              </button>
            </div>
          )}

          {parentPost && (
            <div className="parent-post-container">
              <div onClick={() => handlePostClick(parentPost.id)}>
                <PostCard
                  post={parentPost}
                  parentName={null}
                  handleReplyClick={handleReplyClick}
                  replyingToPostId={replyingToPostId}
                />
              </div>
              <hr />
            </div>
          )}

          <div className="selected-post-container">
            <div onClick={() => handlePostClick(selectedPost.id)}>
              <PostCard
                post={selectedPost}
                parentName={parentPost?.users?.handle}
                handleReplyClick={handleReplyClick}
                replyingToPostId={replyingToPostId}
              />
            </div>
          </div>

          <div className="replies-container">
            {replies &&
              replies.map((reply) => (
                <div
                  key={reply.id}
                  onClick={() => handlePostClick(reply.id)}>
                  <PostCard
                    post={reply}
                    parentName={selectedPost.users.handle}
                    handleReplyClick={handleReplyClick}
                    replyingToPostId={replyingToPostId}
                  />
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          {posts.map((post) => {
            if (!post.is_reply) {
              return (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}>
                  <PostCard
                    post={post}
                    handleReplyClick={handleReplyClick}
                    replyingToPostId={replyingToPostId}
                  />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
}
