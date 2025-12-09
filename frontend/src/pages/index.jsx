// src/pages/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // resolves to ./Home/index.jsx
import Blog from "./Blog"; // resolves to ./Blog/index.jsx

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Single article route for now */}
      <Route
        path="/blog/seven-pillars-perfektionist"
        element={<Blog />}
      />
    </Routes>
  );
}

export default Pages;
