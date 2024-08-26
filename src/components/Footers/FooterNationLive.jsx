import React from "react";
import { useSession } from "../Context/SessionManager";
import MediaPreviewPanel from "../PostInputPanel/MediaPreviewPanel";
import PostInputBox from "../PostInputPanel/PostInputBox";
import MediaInputPanel from "../PostInputPanel/MediaInputPanel";

export default function FooterNationLive() {
  const { user } = useSession();

  return (
    <div className="footer-nation-live">
      {user ? (
        <div>
          <div>
            <MediaPreviewPanel />
          </div>
          <div>
            <PostInputBox />
          </div>
          <div>
            <MediaInputPanel />
          </div>
        </div>
      ) : (
        <div className="bg-gray-700 flex justify-center">
          <img
            src={"/H.png"}
            alt="Hive logo"
            className="h-20 w-20 mt-2"
          />
        </div>
      )}
    </div>
  );
}
