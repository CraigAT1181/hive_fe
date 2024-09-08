import React from "react";

export default function PostCard({ post, parentName = null }) {


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
          <p>1h</p>
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

        <div className="flex justify-between lg:justify-center mt-2">
          <div className="flex items-center mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-comment-dots"></i>
            <p className="mb-0 ml-1 font-thin text-sm">{post.reply_count}</p>
          </div>
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
      </div>
    </div>
  );
}
