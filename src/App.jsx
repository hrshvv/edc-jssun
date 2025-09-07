import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./our/components/navbar/Navbar";
import Team from "./our/views/Team";
import Main from "./our/views/Main";

function App() {
  return (
    <Router>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 md:w-[90%] w-full p-4">
        <Navbar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
