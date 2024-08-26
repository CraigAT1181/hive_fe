import React from "react";
import { useSession } from "../Context/SessionManager";
import MediaPreviewPanel from "../PostInputPanel/MediaPreviewPanel";
import PostInputBox from "../PostInputPanel/PostInputBox";
import MediaInputPanel from "../PostInputPanel/MediaInputPanel";

export default function PostInputPanel() {
  const { user } = useSession();

  return (
    <div className="footer-nation-live">
      {user && (
        <div>
          <div>
            <MediaPreviewPanel />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={user.profile_pic}
              alt="User's profile pic"
              className="w-10 h-10 border-2 object-cover rounded mr-1"
            />
            <PostInputBox />
          </div>
          <div>
            <MediaInputPanel />
          </div>
        </div>
      )}
    </div>
  );
}
