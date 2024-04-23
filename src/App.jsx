import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import AddProject from "./pages/AddProject";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="*" element={<Homepage />} />
        <Route path="/AddProject" element={<AddProject />} />
      </Routes>
    </Router>
  );
}

export default App;
