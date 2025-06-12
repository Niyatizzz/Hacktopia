import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import HackTopiaDashboard from "./pages/Dashboard";
import HackTopiaLogin from "./pages/Login";
import HackTopiaSignup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<HackTopiaDashboard />} />
        <Route path="/login" element={<HackTopiaLogin />} />
        <Route path="/signup" element={<HackTopiaSignup />} />
        {/* Add other routes here, for example:
        <Route path="/about" element={<About />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
