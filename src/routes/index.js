import React from "react";
import { Home, Users } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Losted } from "../pages";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Losted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
