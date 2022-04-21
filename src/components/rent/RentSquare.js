import React, { useEffect } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

const RentSquare = ({ rent }) => {
  return (
    <>
      <li className="materialSquare">

        <h1>Status:</h1>
        <p
          className={`${
            rent.status === "En cours"
              ? "red"
              : "" || rent.status === "Rendu"
              ? "green"
              : "" || rent.status === "A venir"
              ? "orange"
              : ""
          }`}
        >
          {rent.status}
        </p>
        <h2>Référence: {rent.materialId}</h2>
        <div className="des">
          <p data-color="du" className="description">
            Début du prêt: {new Date(rent.startDate).toLocaleDateString("fr")}
          </p>
          <p className="description">
            Fin du prêt: {new Date(rent.endDate).toLocaleDateString("fr")}
          </p>

          <p className="description">Prêté à: {rent.rentedTo}</p>
          <p className="description">Adresse de la famille: {rent.adresse}</p>
        </div>
      </li>
    </>
  );
};

export default RentSquare;
