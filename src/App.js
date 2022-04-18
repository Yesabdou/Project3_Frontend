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
import AssociationPage from "./pages /AssociationPage";
import LogIn from "./pages /Login";
import AddMaterialPage from "./pages /CreateMaterialPage";
import Profil from "./pages /Profil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/register" element={<Register />}></Route>
          <Route path="/user/login" element={<LogIn />}></Route>
          <Route path="/annuaire" element={<Annuaire />}></Route>
          <Route path="/comprendre-le-handicap" element={<Handi />}></Route>
          <Route path="/list-materiels" element={<RentalPage />}></Route>
          <Route path="/material/:id" element={<MaterialPage />}></Route>
          <Route path="/material/new" element={<AddMaterialPage />}></Route>
          <Route path="/association/:id" element={<AssociationPage />}></Route>
          {/* POUR AFFICHER SON PROFIL  */}
          <Route path="/user/:id" element={<Profil />}></Route>

          {/* renvoyer a home si jamais il trouve pas la route : */}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
