import React from "react";
import "./Homepage.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from "./final/components/Sidenav";
import UserProfile from "./final/page/UserProfile";
import CreatePost from "./final/page/create_post"

function Homepage() {
  return (
    <BrowserRouter>
      <div className="homepage">
        <div className="homepage__navWraper">
          <Sidenav />
        </div>
        <div className="homepage__timeline">
          <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Homepage;
