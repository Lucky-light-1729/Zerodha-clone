import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import Minor from "./Minor";
import Nri from "./Nri";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/open-account/minor" element={<Minor />} />
        <Route path="/open-account/nri" element={<Nri />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
