import React from "react";

export default function PostCard() {
  return (
    <div className="post-card-container">
      <div className="min-w-16 mx-2">
        <img
          className="w-16 h-16 object-cover rounded"
          src={"/profile-pic.jpg"}
          alt="profile pic"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between lg:justify-start font-semibold">
          <p className="">CraigT</p>
          <p className="lg:mx-4 font-thin">@craigtipple</p>
          <p className="">1h</p>
        </div>
        <div>
          Post text will appear here, and I should write a lot ot make sure that
          the text behaves I hope it will. For example, if someone was to write
          a very long post, it should expand to comfortably display the entire
          thing.
        </div>
        <div className="flex justify-between lg:justify-center mt-2">
          <p className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-comment-dots"></i>
          </p>
          <p className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-share-nodes"></i>
          </p>
          <p className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-thumbs-up"></i>
          </p>
          <p className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-bookmark"></i>
          </p>
          {"|"}
          <p className="mb-0 lg:mx-4">
            <i className="fa-solid text-gray-400 fa-share-from-square"></i>
          </p>
        </div>
        {/* LOGIC TO CHECK IF THERE'S A RETWEET. IF SO, RENDER DIV BELOW */}
        {/* <div className="border border-gray-500 p-2 mt-4">
          A shortened version of the shared tweet would appear here.
        </div> */}
      </div>
    </div>
  );
}
