import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import TopNavBar from "./TopNavBar";
import Home from "../page/Home";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar">
        <div className="sticky top-0 w-full z-100">
          {/* NavBar */}
          <TopNavBar />
        </div>
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
