import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SessionProvider } from "./components/Context/SessionManager";
import Header from "./components/Header/Header";
import FooterNationLive from "./components/Footers/FooterNationLive";
import FooterDefault from "./components/Footers/FooterDefault";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const NationLive = lazy(() => import("./components/NationLive/NationLive"));
const PostThread = lazy(() => import("./components/PostThread/PostThread"));
const Community = lazy(() => import("./components/Community/Community"));
const SpeakersCorner = lazy(() =>
  import("./components/SpeakersCorner/SpeakersCorner")
);
const TownHall = lazy(() => import("./components/TownHall/TownHall"));
const Protests = lazy(() => import("./components/Protests/Protests"));
const Messages = lazy(() => import("./components/Messages/Messages"));
const Notifications = lazy(() =>
  import("./components/Notifications/Notifications")
);
const Profile = lazy(() => import("./components/Profile/Profile"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const Login = lazy(() => import("./components/SessionManager/Login"));
const Register = lazy(() => import("./components/SessionManager/Register"));
const ConfirmEmail = lazy(() =>
  import("./components/SessionManager/ConfirmEmail")
);
const Welcome = lazy(() => import("./components/SessionManager/Welcome"));

export default function App() {
  const location = useLocation();

  const renderFooter = () => {
    const { pathname } = location;
    if (pathname === "/") return <FooterNationLive />;
    return <FooterDefault />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SessionProvider>
        <Header />
        <main className="main">
          <Suspense
            fallback={
              <div className="flex justify-center">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<NationLive />} />
              <Route path="/posts/:postId" element={<PostThread />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/town-hall" element={<TownHall />} />
              <Route path="/speakers-corner" element={<SpeakersCorner />} />
              <Route path="/community" element={<Community />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/protests" element={<Protests />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/email-confirmation" element={<ConfirmEmail />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/*" element={<ErrorHandler />} />
            </Routes>
          </Suspense>
        </main>
        {renderFooter()}
      </SessionProvider>
    </div>
  );
}
