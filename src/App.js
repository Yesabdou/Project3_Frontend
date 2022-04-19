import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import { useState } from "react";
import Home from "./pages /infoPages/Home";
import Annuaire from "./pages /Association/Annuaire";
import Handi from "./pages /infoPages/handicape";
import Stock from "./pages /materiel/Stock";
import Register from "./pages /logPages/Register";

import MaterialPage from "./pages /materiel/MaterialPage";
import AssociationPage from "./pages /Association/AssociationPage";
import LogIn from "./pages /logPages/Login";
import AddMaterialPage from "./pages /materiel/CreateMaterialPage";
import Profil from "./pages /logPages/Profil";
import AddRentPage from "./pages /rent/CreateRentPage";
import Rents from "./components/rent/DisplayRentsForOneMatreial";
import RentsByUser from "./components/rent/DisplayRentsForOneUser";

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
          <Route path="/list-materiels" element={<Stock />}></Route>
          <Route path="/material/:id" element={<MaterialPage />}></Route>
          <Route path="/material/new" element={<AddMaterialPage />}></Route>
          <Route path="/association/:id" element={<AssociationPage />}></Route>
          {/* POUR AFFICHER SON PROFIL  */}
          <Route path="/user/:id" element={<Profil />}></Route>
          <Route path="/material/:materialid/rents" element={<AddRentPage />}></Route>
          <Route path="/material/:materialid/all-rents" element={<Rents />}></Route>
          <Route path="/user/:userid/all-rents" element={<RentsByUser />}></Route>
          {/* renvoyer a home si jamais il trouve pas la route : */}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
