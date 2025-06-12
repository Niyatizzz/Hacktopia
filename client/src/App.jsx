import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import HackTopiaDashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<HackTopiaDashboard />} />
        {/* Add other routes here, for example:
        <Route path="/about" element={<About />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
