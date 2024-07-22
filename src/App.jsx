import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/AuthContext";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import ErrorHandler from "./components/ErrorHandler";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const Home = lazy(() => import("./components/Home"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <AuthProvider> */}
      {/* <Header /> */}
      <main className="main">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          }>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/error"
              element={<ErrorHandler />}
            />
          </Routes>
        </Suspense>
      </main>
      {/* <Footer /> */}
      {/* </AuthProvider> */}
    </div>
  );
}
