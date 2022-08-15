import React from "react";
import { Home, UserDetails, Users } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Losted } from "../pages";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home typeForm="Cadastro" />} />
        <Route path="/add" element={<Home typeForm="Add" />} />
        <Route path="/users" element={<Users />} exact />
        <Route path="/users/:username" element={<UserDetails />} />
        <Route path="*" element={<Losted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
