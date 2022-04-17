import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import { useState } from "react";
import Home from "./pages /Home";
import Annuaire from "./pages /Annuaire";
import Handi from "./pages /handicape";
import RentalPage from "./pages /RentalPage";
import Register from "./pages /Register";

import MaterialPage from "./pages /MaterialPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/annuaire" element={<Annuaire />}></Route>
          <Route path="/comprendre-le-handicap" element={<Handi />}></Route>
          <Route path="/list-materiels" element={<RentalPage />}></Route>
          <Route path="/material/:id" element={<MaterialPage />}></Route>

          {/* renvoyer a home si jamais il trouve pas la route : */}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
