import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SessionProvider } from "./components/Context/SessionManager";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const NationLive = lazy(() => import("./components/NationLive/NationLive"));
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

export default function App() {
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/town-hall" element={<TownHall />} />
              <Route path="/speakers-corner" element={<SpeakersCorner />} />
              <Route path="/community" element={<Community />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/protests" element={<Protests />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<ErrorHandler />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </SessionProvider>
    </div>
  );
}
