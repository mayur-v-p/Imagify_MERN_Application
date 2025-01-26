import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredict from "./pages/BuyCredict";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div
      className="px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-teal-50"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredict />} />
      </Routes>
    </div>
  );
};

export default App;
