import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const NationalLiveFeed = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const TownHall = lazy(() => import("./components/TownHall/TownHall"));
const SpeakersCorner = lazy(() =>
  import("./components/SpeakersCorner/SpeakersCorner")
);
const Community = lazy(() => import("./components/Community/Community"));
const Messages = lazy(() => import("./components/Messages/Messages"));
const Protests = lazy(() => import("./components/Protests/Protests"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <AuthProvider> */}
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
            <Route path="/" element={<NationalLiveFeed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/town-hall" element={<TownHall />} />
            <Route path="/speakers-corner" element={<SpeakersCorner />} />
            <Route path="/community" element={<Community />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/protests" element={<Protests />} />
            <Route path="/*" element={<ErrorHandler />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {/* </AuthProvider> */}
    </div>
  );
}
