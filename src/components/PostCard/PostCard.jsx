import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

export default function PostCard({
  post,
  parentName = null,
  handleReplyClick,
  replyingToPostId,
}) {
  const [replyContent, setReplyContent] = useState("");

  const formattedTime = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, `EEEE, do 'of' MMMM yyyy 'at' h:mma`);
  }

  const formattedDate = formatDate(post.created_at);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    console.log(replyContent);
    
    // Handle reply submission (e.g., make API call)
    setReplyContent("");
  };

  return (
    <div className="post-card-container relative">
      <div className="min-w-16 mx-2">
        <img
          className="w-16 h-16 object-cover rounded"
          src={post.users.profile_pic}
          alt="profile pic"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between lg:justify-start font-semibold">
          <p>{post.users.full_name}</p>
          <p className="lg:mx-4 font-thin">{post.users.handle}</p>
        </div>
        {post.is_reply === true && parentName && (
          <div>
            <span className="text-sm font-thin mb-2">
              Replying to {parentName}
            </span>
          </div>
        )}
        <div>{post.content}</div>
        {post.media && post.media.length > 0 && (
          <div className="grid grid-cols-2 gap-1 md:flex">
            {post.media.map((media) => (
              <div key={media.media_url}>
                <img
                  src={media.media_url}
                  alt="Attached media"
                  className="cursor-pointer w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <p className="text-sm font-semibold mb-0 mt-2">
          {formattedTime} <span className="font-thin">({formattedDate})</span>
        </p>

        <div className="flex justify-between lg:justify-center mt-2">
          {/* Reply button */}
          <div
            className="flex items-center mb-0 lg:mx-4 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleReplyClick(post.id);
            }}>
            <i className="fa-solid text-gray-400 fa-comment-dots"></i>
            <p className="mb-0 ml-1 font-thin text-sm">{post.reply_count}</p>
          </div>

          {/* Other buttons */}
          <div className="flex items-center mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-share-nodes"></i>
            <p className="mb-0 ml-1 font-thin text-sm">{post.retweets_count}</p>
          </div>
          <div className="flex items-center mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-thumbs-up"></i>
            <p className="mb-0 ml-1 font-thin text-sm">{post.likes_count}</p>
          </div>
          <div className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-bookmark"></i>
          </div>
          {"|"}
          <div className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-share-from-square"></i>
          </div>
        </div>

        {/* Conditionally render reply input for this post */}
        {replyingToPostId === post.id && (
          <div
            className="reply-input-container mt-2"
            onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleReplySubmit}>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                onClick={(e) => e.stopPropagation()}
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={(e) => e.stopPropagation()}>
                Submit Reply
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
