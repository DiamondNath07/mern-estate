import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/log-out" element={<Logout />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
