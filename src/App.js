import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./backend/components/Login";
import Register from "./backend/components/Register";
import Home from "./components/Home";
import Explore from "./components/Explore";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
