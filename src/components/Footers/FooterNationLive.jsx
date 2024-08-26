import React from "react";
import { useSession } from "../Context/SessionManager";
import PostInputPanel from "../PostInputPanel/PostInputPanel";

export default function FooterNationLive() {
  const { user } = useSession();

  return (
    <div className="footer">
      {user ? (
        <PostInputPanel />
      ) : (
        <div className="flex justify-center">
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
