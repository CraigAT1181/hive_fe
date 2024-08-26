import React from "react";
import { useSession } from "../Context/SessionManager";
import SubmitMessagePanel from "../SubmitMessagePanel/SubmitMessagePanel";

export default function FooterNationLive() {
  const { user } = useSession();

  return <div className="footer">{user && <SubmitMessagePanel />}</div>;
}
