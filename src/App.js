import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
